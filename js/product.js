"use strict";

const params = new URLSearchParams(location.search);
let language = params.get("lang") === "en" ? "en" : "ar";
let theme = "light";
const productId = params.get("id");
const product = SALIMA_PRODUCTS.find(item => item.id === productId);
const brandName = item => SALIMA_BRANDS.find(brand => brand.id === item.brand)?.[language] || item.brand;
const categoryNames = {
  ar: { food: "مواد غذائية", home: "منتجات منزلية", oil: "زيوت غذائية", canned: "معلبات" },
  en: { food: "Food", home: "Household", oil: "Cooking oils", canned: "Canned goods" }
};

function productCard(item) {
  const text = item[language];
  return `<article class="product-card"><div class="product-media"><img src="${item.image}" alt="${text.name}" width="1122" height="1402" loading="lazy" decoding="async"></div><div class="product-body"><h3>${text.name}</h3><div class="product-meta"><span>${brandName(item)}</span><span>${item.type[language]}</span></div><p>${text.short}</p><a class="product-details-btn" href="./product.html?id=${encodeURIComponent(item.id)}&lang=${language}"><span>${language === "ar" ? "عرض التفاصيل" : "View details"}</span><span>→</span></a></div></article>`;
}

function render() {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.documentElement.dataset.theme = theme;
  document.querySelector("#productLanguage").textContent = language === "ar" ? "EN" : "ع";
  document.querySelector("#productBack").textContent = language === "ar" ? "← العودة إلى المنتجات" : "← Back to products";
  if (!product) {
    document.querySelector("#productNotFound").hidden = false;
    document.title = language === "ar" ? "المنتج غير موجود | شركة سليمة" : "Product not found | Salima";
    return;
  }
  const text = product[language];
  document.querySelector("#productPageCard").hidden = false;
  document.querySelector("#productPageImage").src = product.image;
  document.querySelector("#productPageImage").alt = text.name;
  document.querySelector("#productPageCategory").textContent = categoryNames[language][product.category];
  document.querySelector("#productPageTitle").textContent = text.name;
  document.querySelector("#productPageMeta").innerHTML = [brandName(product), product.type[language], product.weight].filter(Boolean).map(value => `<span>${value}</span>`).join("");
  document.querySelector("#productPageDescription").textContent = text.description;
  const details = [
    [language === "ar" ? "الاستخدام المقترح" : "Suggested use", text.use],
    [language === "ar" ? "التخزين" : "Storage", text.storage],
    [language === "ar" ? "العبوة" : "Packaging", text.packaging]
  ].filter(([, value]) => value);
  document.querySelector("#productPageDetails").innerHTML = details.map(([label, value]) => `<article><div><h3>${label}</h3><p>${value}</p></div></article>`).join("");
  const related = SALIMA_PRODUCTS.filter(item => item.category === product.category && item.id !== product.id).slice(0, 3);
  document.querySelector("#productPageRelated").hidden = related.length === 0;
  document.querySelector("#productRelatedTitle").textContent = language === "ar" ? "قد يعجبك أيضًا" : "You May Also Like";
  document.querySelector("#productRelatedGrid").innerHTML = related.map(productCard).join("");
  document.title = `${text.name} | ${language === "ar" ? "شركة سليمة" : "Salima"}`;
  document.querySelector('meta[name="description"]').content = text.short;
}

document.querySelector("#productLanguage").addEventListener("click", () => { language = language === "ar" ? "en" : "ar"; render(); });
document.querySelector("#productTheme").addEventListener("click", () => { theme = theme === "light" ? "dark" : "light"; render(); });
render();
