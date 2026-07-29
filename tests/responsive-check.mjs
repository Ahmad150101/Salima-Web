import fs from "node:fs";
import path from "node:path";

const port = process.argv[2] || "9223";
const runName = process.argv[3] || "headless";
const base = "http://127.0.0.1:4173/Salima-Web/";
const timeoutMs = 8000;
const artifactRoot = path.resolve("tests", "artifacts", runName);
fs.mkdirSync(artifactRoot, { recursive: true });

const targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
const target = targets.find(item => item.type === "page");
if (!target) throw new Error("No Chrome page target was available.");
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

let id = 0;
const pending = new Map();
const consoleErrors = [];
const networkErrors = [];
socket.addEventListener("message", event => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    const request = pending.get(message.id);
    pending.delete(message.id);
    return message.error ? request.reject(new Error(message.error.message)) : request.resolve(message.result);
  }
  if (message.method === "Runtime.exceptionThrown") {
    consoleErrors.push(message.params.exceptionDetails.exception?.description || message.params.exceptionDetails.text);
  }
  if (message.method === "Log.entryAdded" && message.params.entry.level === "error") {
    consoleErrors.push(message.params.entry.text);
  }
  if (message.method === "Network.loadingFailed" && !message.params.canceled) {
    networkErrors.push(message.params.errorText);
  }
  if (message.method === "Network.responseReceived" && message.params.response.status >= 400) {
    networkErrors.push(`${message.params.response.status} ${message.params.response.url}`);
  }
});
const call = (method, params = {}) => new Promise((resolve, reject) => {
  const requestId = ++id;
  pending.set(requestId, { resolve, reject });
  socket.send(JSON.stringify({ id: requestId, method, params }));
});
const evaluate = async expression => {
  const result = await call("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
  return result.result.value;
};
const waitFor = async (expression, label) => {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    if (await evaluate(`Boolean(${expression})`)) return Date.now() - started;
    await new Promise(resolve => setTimeout(resolve, 50));
  }
  throw new Error(`Timed out after ${timeoutMs}ms waiting for ${label}: ${expression}`);
};
const click = selector => evaluate(`document.querySelector(${JSON.stringify(selector)})?.click()`);
const setInput = (selector, value) => evaluate(`(() => {
  const input=document.querySelector(${JSON.stringify(selector)});
  input.value=${JSON.stringify(value)};
  input.dispatchEvent(new Event("input",{bubbles:true}));
})()`);
const visibleState = selector => evaluate(`(() => {
  const el=document.querySelector(${JSON.stringify(selector)});
  if(!el)return {exists:false};
  const style=getComputedStyle(el),rect=el.getBoundingClientRect(),vw=document.documentElement.clientWidth,vh=document.documentElement.clientHeight;
  return {exists:true,hidden:el.hidden,display:style.display,visibility:style.visibility,opacity:style.opacity,
    rect:{x:rect.x,y:rect.y,width:rect.width,height:rect.height},insideViewport:rect.right>=0&&rect.bottom>=0&&rect.left<=vw&&rect.top<=vh};
})()`);
const saveFailure = async (name, selectors) => {
  const safe = name.replace(/[^a-z0-9_-]/gi, "-");
  const snapshot = {
    url: await evaluate("location.href"),
    readyState: await evaluate("document.readyState"),
    bodyText: await evaluate("document.body.innerText"),
    elements: {}
  };
  for (const selector of selectors) snapshot.elements[selector] = await visibleState(selector);
  fs.writeFileSync(path.join(artifactRoot, `${safe}.json`), JSON.stringify(snapshot, null, 2));
  fs.writeFileSync(path.join(artifactRoot, `${safe}.html`), await evaluate("document.documentElement.outerHTML"));
  try {
    const shot = await call("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
    fs.writeFileSync(path.join(artifactRoot, `${safe}.png`), Buffer.from(shot.data, "base64"));
  } catch {}
};
const navigate = async (relative, language, width) => {
  await call("Emulation.setDeviceMetricsOverride", { width, height: 900, deviceScaleFactor: 1, mobile: false });
  await call("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
  await call("Network.clearBrowserCache");
  await call("Network.clearBrowserCookies");
  await call("Storage.clearDataForOrigin", { origin: "http://127.0.0.1:4173", storageTypes: "all" });
  const separator = relative.includes("?") ? "&" : "?";
  await call("Page.navigate", { url: `${base}${relative}${separator}lang=${language}&test=${Date.now()}` });
  await waitFor('document.readyState==="complete"', "document.readyState complete");
  await evaluate(`localStorage.clear();sessionStorage.clear();navigator.serviceWorker?.getRegistrations().then(items=>Promise.all(items.map(item=>item.unregister())))`);
  if (relative === "" && language === "en") {
    await click("#languageToggle");
    await waitFor('document.documentElement.lang==="en" && document.documentElement.dir==="ltr"', "English home locale");
  }
};
const checkLayout = () => evaluate(`(() => {
  const viewport=document.documentElement.clientWidth;
  const offenders=[...document.querySelectorAll("body *")].filter(el=>{
    const r=el.getBoundingClientRect();
    return r.width>0&&(r.left < -1 || r.right > viewport + 1);
  }).slice(0,8).map(el=>({tag:el.tagName,id:el.id,cls:String(el.className),left:Math.round(el.getBoundingClientRect().left),right:Math.round(el.getBoundingClientRect().right)}));
  return {viewport,scrollWidth:document.documentElement.scrollWidth,offenders};
})()`);

await call("Page.enable");
await call("Runtime.enable");
await call("Log.enable");
await call("Network.enable");
await call("ServiceWorker.enable");
await call("Network.setCacheDisabled", { cacheDisabled: true });
await call("Page.addScriptToEvaluateOnNewDocument", {
  source: `localStorage.clear();sessionStorage.clear();`
});

const tests = [];
const record = async (name, task, selectors = []) => {
  const started = Date.now();
  try {
    const details = await task();
    tests.push({ name, status: "passed", durationMs: Date.now() - started, details });
    if (/^(home-render|brands-render|product-valid)-ar-1440$/.test(name)) {
      const shot = await call("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
      fs.writeFileSync(path.join(artifactRoot, `${name}.png`), Buffer.from(shot.data, "base64"));
      fs.writeFileSync(path.join(artifactRoot, `${name}.html`), await evaluate("document.documentElement.outerHTML"));
      fs.writeFileSync(path.join(artifactRoot, `${name}.txt`), await evaluate("document.body.innerText"));
    }
  } catch (error) {
    await saveFailure(name, selectors);
    tests.push({ name, status: "failed", durationMs: Date.now() - started, error: error.message });
  }
};

for (const language of ["ar", "en"]) {
  for (const width of [390, 768, 1440]) {
    await navigate("", language, width);
    await record(`home-render-${language}-${width}`, async () => {
      const waitMs = await waitFor('document.querySelectorAll("#productsGrid .product-card").length===15', "15 product cards");
      const offers = await evaluate('({hidden:document.querySelector("#offers").hidden,active:SALIMA_PRODUCTS.filter(p=>p.offer.active).length})');
      if (offers.active === 0 && !offers.hidden) throw new Error("Offers must be hidden when no offer is active.");
      const layout = await checkLayout();
      if (layout.scrollWidth > layout.viewport + 1 || layout.offenders.length) throw new Error(`Horizontal overflow: ${JSON.stringify(layout)}`);
      return { waitMs, offers, layout };
    }, ["#productsGrid", "#offers"]);
    await record(`home-search-${language}-${width}`, async () => {
      await setInput("#productSearch", language === "ar" ? "تونة" : "tuna");
      await waitFor('document.querySelectorAll("#productsGrid .product-card").length===1', "one search result");
      return { count: await evaluate('document.querySelectorAll("#productsGrid .product-card").length') };
    }, ["#productSearch", "#productsGrid"]);
    await record(`home-filter-${language}-${width}`, async () => {
      await click("#clearFilters");
      await waitFor('document.querySelectorAll("#productsGrid .product-card").length===15', "reset before category filter");
      await click('[data-category="rice"]');
      await waitFor('document.querySelectorAll("#productsGrid .product-card").length===3', "three rice products");
      return { count: await evaluate('document.querySelectorAll("#productsGrid .product-card").length') };
    }, ['[data-category="rice"]', "#productsGrid"]);
    await record(`home-modal-${language}-${width}`, async () => {
      await click("#clearFilters");
      await waitFor('document.querySelectorAll("#productsGrid .product-card").length===15', "reset product cards");
      await click('#productsGrid [data-product="rice-aeroplane"]');
      await waitFor('document.querySelector("#productModal").open && document.querySelector("#modalTitle").textContent.trim().length>0', "open product modal");
      const state = await visibleState("#productModal");
      await click("#modalClose");
      await waitFor('!document.querySelector("#productModal").open', "closed product modal");
      return state;
    }, ["#productModal", "#modalTitle", "#modalImage"]);
    await record(`home-locale-theme-${language}-${width}`, async () => {
      const expectedDir = language === "ar" ? "rtl" : "ltr";
      const before = await evaluate('({lang:document.documentElement.lang,dir:document.documentElement.dir,theme:document.documentElement.dataset.theme})');
      if (before.lang !== language || before.dir !== expectedDir) throw new Error(`Locale mismatch: ${JSON.stringify(before)}`);
      await click("#themeToggle");
      const after = await evaluate('document.documentElement.dataset.theme');
      if (after === before.theme) throw new Error("Theme did not toggle.");
      return { before, after };
    }, ["html", "#themeToggle"]);
  }
}

for (const language of ["ar", "en"]) {
  for (const width of [390, 768, 1440]) {
    await navigate("brands.html", language, width);
    await record(`brands-render-${language}-${width}`, async () => {
      const waitMs = await waitFor('document.querySelectorAll(".brand-full-card").length===9', "nine confirmed brands");
      return { waitMs, count: await evaluate('document.querySelectorAll(".brand-full-card").length'), layout: await checkLayout() };
    }, ["#brandsGroups", ".brand-full-card"]);
    await navigate("brands.html?brand=rania", language, width);
    await record(`brands-rania-${language}-${width}`, async () => {
      await waitFor('document.querySelectorAll(".brand-full-card").length===1', "Rania brand only");
      const title = await evaluate('document.querySelector(".brand-full-card h3").textContent.trim()');
      if (!/رانيا|Rania/i.test(title)) throw new Error(`Unexpected brand title: ${title}`);
      return { title };
    }, ["#brandFilterBanner", ".brand-full-card"]);
    await navigate("brands.html?brand=unknown", language, width);
    await record(`brands-invalid-${language}-${width}`, async () => {
      await waitFor('document.querySelectorAll(".brand-full-card").length===0 && document.querySelector(".status-message")', "invalid brand message");
      return { message: await evaluate('document.querySelector(".status-message").textContent.trim()') };
    }, ["#brandFilterBanner", ".status-message"]);
  }
}

for (const language of ["ar", "en"]) {
  for (const width of [390, 768, 1440]) {
    await navigate("product.html?id=rice-aeroplane", language, width);
    await record(`product-valid-${language}-${width}`, async () => {
      const waitMs = await waitFor('!document.querySelector("#productPageCard").hidden && document.querySelector("#productPageTitle").textContent.trim().length>0', "valid product");
      return { waitMs, title: await evaluate('document.querySelector("#productPageTitle").textContent.trim()'), layout: await checkLayout() };
    }, ["#productPageCard", "#productPageTitle", "#productPageImage"]);
    await navigate("product.html?id=invalid", language, width);
    await record(`product-invalid-${language}-${width}`, async () => {
      const waitMs = await waitFor('!document.querySelector("#productNotFound").hidden', "not-found product message");
      return { waitMs, message: await evaluate('document.querySelector("#productNotFound").innerText.trim()') };
    }, ["#productNotFound"]);
  }
}

socket.close();
const report = { runName, tool: "Chrome DevTools Protocol", base, timeoutMs, tests, consoleErrors, networkErrors };
console.log(JSON.stringify(report, null, 2));
if (tests.some(test => test.status === "failed") || consoleErrors.length || networkErrors.length) process.exitCode = 1;
