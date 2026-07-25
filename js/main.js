"use strict";

const translations = {
  ar: {
    skip: "انتقل إلى المحتوى", company: "شركة سليمة", tagline: "جودة تصل إلى كل بيت",
    navHome: "الرئيسية", navBrands: "علاماتنا", navProducts: "المنتجات", navWhy: "لماذا سليمة؟", navGallery: "المعرض", navLocation: "موقعنا", navAbout: "من نحن",
    heroEyebrow: "منتجات يومية مختارة بعناية", heroTitle: "جودة <span>تصل</span> إلى كل بيت",
    heroText: "اكتشف مجموعة سليمة من المنتجات الغذائية والمنزلية الأساسية، ضمن كتالوج واضح وسريع صُمم لتشاهد كل منتج بسهولة.",
    explore: "استكشف المنتجات", aboutLink: "تعرّف علينا", statProducts: "منتجات أساسية", statResponsive: "متوافق مع الهاتف", statLanguages: "لغتان",
    featured: "مميز", clearCatalog: "كتالوج واضح", easyBrowse: "تصفح سريع وسهل", viewAllProducts: "عرض جميع المنتجات",
    filterBrand: "العلامة التجارية", filterType: "النوع", filterWeight: "الوزن", clearFilters: "مسح الفلاتر", allOptions: "الكل",
    zoomImage: "تكبير الصورة", openProductPage: "فتح صفحة المنتج", relatedTitle: "قد يعجبك أيضًا", footerResources: "المصادر",
    guideKicker: "دليل سريع", guideTitle: "اختر المنتج المناسب لك", guideBasmatiTitle: "أرز بسمتي", guideBasmatiText: "للأطباق التي تحتاج حبة طويلة ومفلفلة.", guideJasmineTitle: "أرز ياسمين", guideJasmineText: "للأطباق العطرية والوصفات الآسيوية.", guideCamolinoTitle: "أرز كامولينو", guideCamolinoText: "للاستخدام اليومي والوصفات المنزلية.", guideCannedTitle: "المعلبات", guideCannedText: "للوجبات والحلول السريعة.", guideTissuesTitle: "المحارم", guideTissuesText: "للاستخدام المنزلي اليومي.",
    contactKicker: "التواصل", contactTitle: "بيانات التواصل", contactText: "ستُضاف بيانات التواصل الرسمية عند توفرها.", contactPending: "قيد التحديث",
    productCategories: "فئات المنتجات", footerRice: "الأرز", footerCanned: "المعلبات", footerOil: "الزيوت", footerTissues: "المحارم",
    catalogKicker: "كتالوج سليمة", productsTitle: "كل احتياجاتك الأساسية في مكان واحد",
    productsIntro: "ابحث عن المنتج أو استخدم التصنيفات للوصول إليه بسرعة، ثم افتح البطاقة لمعرفة التفاصيل.", searchPlaceholder: "ابحث عن منتج...",
    noResultsTitle: "لا توجد منتجات مطابقة", noResultsText: "جرّب كلمة بحث مختلفة أو اختر جميع المنتجات.", showAll: "عرض جميع المنتجات",
    whyKicker: "لماذا سليمة؟", whyTitle: "تجربة عرض بسيطة تضع المنتج أولًا", whyIntro: "صُممت الصفحة لتقدم المعلومات المهمة بشكل واضح، دون تسجيل أو خطوات غير ضرورية.",
    featureQualityTitle: "عرض موثوق", featureQualityText: "بطاقات موحّدة وصور واضحة تساعد الزائر على التعرّف إلى المنتج بسرعة.",
    featureVarietyTitle: "تنوع منظم", featureVarietyText: "تصنيفات للأغذية والمعلبات والزيوت والمنتجات المنزلية في مكان واحد.",
    featureMobileTitle: "مصمم للهاتف", featureMobileText: "واجهة سريعة ومتجاوبة مناسبة للزوار القادمين من رمز QR.",
    featureEasyTitle: "وصول سريع", featureEasyText: "بحث مباشر، فلاتر سهلة، وتفاصيل تظهر دون مغادرة الصفحة.",
    galleryKicker: "منتجات سليمة عن قرب", galleryTitle: "معرض المنتجات", galleryIntro: "اضغط على أي صورة لعرضها بحجم أكبر والتنقل بين المنتجات.",
    aboutKicker: "عن الشركة", aboutTitle: "سليمة… حضور واضح للمنتجات اليومية", aboutText: "تقدم سليمة مجموعة من المنتجات الغذائية والمنزلية الأساسية ضمن هوية بسيطة وواضحة. هذه الصفحة مخصصة لعرض المنتجات ومعلوماتها فقط، دون تسجيل دخول أو شراء إلكتروني.",
    visionTitle: "رؤيتنا", visionText: "تقديم كتالوج رقمي يجعل التعرف إلى منتجات سليمة أسهل وأسرع.", missionTitle: "رسالتنا", missionText: "عرض معلومات واضحة ومنظمة تساعد الزائر على اختيار المنتج المناسب.",
    valueClarity: "الوضوح", valueQuality: "الجودة", valueSimplicity: "البساطة", valueVariety: "التنوع",
    footerText: "كتالوج رقمي خفيف وسريع لعرض منتجات الشركة من أي جهاز.", quickLinks: "روابط سريعة", sitePurpose: "هدف الموقع", sitePurposeText: "عرض المنتجات فقط دون تسجيل أو بيع أو شراء.", rights: "جميع الحقوق محفوظة.", languageLabel: "English version",
    detailUse: "الاستخدام المقترح", detailStorage: "التخزين", detailPackaging: "العبوة", detailsDisclaimer: "ملاحظة: الصور والبيانات الحالية توضيحية ويمكن استبدالها ببيانات العبوة الرسمية.",
    viewDetails: "عرض التفاصيل", results: "نعرض {count} من أصل {total} منتجات", themeDark: "تفعيل الوضع الداكن", themeLight: "تفعيل الوضع الفاتح", menuOpen: "فتح القائمة", menuClose: "إغلاق القائمة",
    brandsKicker: "علاماتنا التجارية", brandsTitle: "تشكيلة متنوعة تحت سقف واحد", brandsIntro: "اختر العلامة التجارية لعرض منتجاتها مباشرة.", featuredKicker: "اختيارات مميزة", featuredTitle: "منتجاتنا المميزة", compareKicker: "دليل الأرز", compareTitle: "اختر الأرز المناسب لطبختك", compareIntro: "مقارنة سريعة بين الأنواع المتوفرة في الكتالوج.", compareProduct: "المنتج", compareType: "النوع", compareWeight: "الوزن", compareUse: "الاستخدام المقترح", basmatiLong: "بسمتي طويل الحبة", jasmineRice: "أرز ياسمين عطري", indianBasmati: "بسمتي هندي", camolinoRice: "كامولينو أبيض", useKabsa: "الكبسة والمندي", useAsian: "الأطباق الآسيوية", useBiryani: "البرياني والأرز المفلفل", useDaily: "الطبخ اليومي والمحاشي", catalogPdfKicker: "نسخة قابلة للحفظ", catalogPdfTitle: "حمّل كتالوج سليمة PDF", catalogPdfText: "نسخة مختصرة تضم أبرز المنتجات والصور.", downloadCatalog: "تحميل الكتالوج", faqKicker: "الأسئلة الشائعة", faqTitle: "معلومات سريعة قبل التصفح", faq1q: "هل الموقع متجر إلكتروني؟", faq1a: "لا، الموقع مخصص للتعرف على منتجات سليمة وعرض معلوماتها فقط.", faq2q: "هل تتوفر المنتجات بأحجام مختلفة؟", faq2a: "تختلف الأحجام حسب المنتج والتوفر، وتظهر الأحجام المؤكدة داخل تفاصيل المنتج.", faq3q: "كيف أشاهد تفاصيل المنتج؟", faq3a: "اضغط على زر عرض التفاصيل داخل أي بطاقة.", locationKicker: "نطاق التواجد", locationTitle: "الضفة الغربية", locationText: "نطاق التوزيع داخل الضفة الغربية، وتعرض الخريطة النطاق العام دون تحديد عنوان غير مؤكد.", openMap: "فتح في خرائط Google",
    categories: { all: "جميع المنتجات", food: "مواد غذائية", home: "منتجات منزلية", oil: "زيوت غذائية", canned: "معلبات" }, groups: { all: "جميع المنتجات", rice: "الأرز", canned: "المعلبات", oil: "الزيوت", tissues: "المحارم", other: "منتجات أخرى" }
  },
  en: {
    skip: "Skip to content", company: "Salima Company", tagline: "Quality for every home",
    navHome: "Home", navBrands: "Brands", navProducts: "Products", navWhy: "Why Salima?", navGallery: "Gallery", navLocation: "Location", navAbout: "About",
    heroEyebrow: "Everyday products selected with care", heroTitle: "Quality <span>made</span> for every home",
    heroText: "Explore Salima's range of essential food and household products through a clear, fast catalog designed for effortless browsing.",
    explore: "Explore products", aboutLink: "About us", statProducts: "Core products", statResponsive: "Mobile friendly", statLanguages: "Languages",
    featured: "Featured", clearCatalog: "Clear catalog", easyBrowse: "Fast and easy browsing", viewAllProducts: "View All Products",
    filterBrand: "Brand", filterType: "Type", filterWeight: "Weight", clearFilters: "Clear filters", allOptions: "All",
    zoomImage: "Enlarge image", openProductPage: "Open Product Page", relatedTitle: "You May Also Like", footerResources: "Resources",
    guideKicker: "Quick guide", guideTitle: "Choose the Right Product", guideBasmatiTitle: "Basmati Rice", guideBasmatiText: "For dishes that call for long, separate grains.", guideJasmineTitle: "Jasmine Rice", guideJasmineText: "For aromatic dishes and Asian recipes.", guideCamolinoTitle: "Camolino Rice", guideCamolinoText: "For everyday cooking and home recipes.", guideCannedTitle: "Canned Goods", guideCannedText: "For quick meals and convenient options.", guideTissuesTitle: "Tissues", guideTissuesText: "For everyday household use.",
    contactKicker: "Contact", contactTitle: "Contact details", contactText: "Official contact details will be added when available.", contactPending: "Pending update",
    productCategories: "Product categories", footerRice: "Rice", footerCanned: "Canned goods", footerOil: "Oils", footerTissues: "Tissues",
    catalogKicker: "Salima catalog", productsTitle: "Everyday essentials in one place",
    productsIntro: "Search for a product or use categories to find it quickly, then open the card to view details.", searchPlaceholder: "Search products...",
    noResultsTitle: "No matching products", noResultsText: "Try another search term or choose all products.", showAll: "Show all products",
    whyKicker: "Why Salima?", whyTitle: "A simple experience that puts products first", whyIntro: "The page presents key information clearly, without accounts or unnecessary steps.",
    featureQualityTitle: "Clear presentation", featureQualityText: "Consistent cards and clear visuals help visitors identify products quickly.",
    featureVarietyTitle: "Organized variety", featureVarietyText: "Food, canned goods, oils, and household products in one place.",
    featureMobileTitle: "Built for mobile", featureMobileText: "A fast responsive experience for visitors arriving through a QR code.",
    featureEasyTitle: "Quick access", featureEasyText: "Instant search, simple filters, and details without leaving the page.",
    galleryKicker: "A closer look", galleryTitle: "Product gallery", galleryIntro: "Select any image to enlarge it and browse through the product collection.",
    aboutKicker: "About the company", aboutTitle: "Salima — a clear presence for everyday products", aboutText: "Salima presents a range of essential food and household products through a simple, clear identity. This website is designed for product viewing only, with no sign-in or online purchasing.",
    visionTitle: "Our vision", visionText: "Provide a digital catalog that makes discovering Salima products easier and faster.", missionTitle: "Our mission", missionText: "Present clear, organized information that helps visitors understand each product.",
    valueClarity: "Clarity", valueQuality: "Quality", valueSimplicity: "Simplicity", valueVariety: "Variety",
    footerText: "A lightweight, fast digital catalog for viewing company products on any device.", quickLinks: "Quick links", sitePurpose: "Website purpose", sitePurposeText: "Product display only, with no accounts, sales, or purchases.", rights: "All rights reserved.", languageLabel: "النسخة العربية",
    detailUse: "Suggested use", detailStorage: "Storage", detailPackaging: "Packaging", detailsDisclaimer: "Note: Current images and details are illustrative and can be replaced with official package information.",
    viewDetails: "View details", results: "Showing {count} of {total} products", themeDark: "Enable dark mode", themeLight: "Enable light mode", menuOpen: "Open menu", menuClose: "Close menu",
    brandsKicker: "Our brands", brandsTitle: "A varied portfolio in one place", brandsIntro: "Choose a brand to display its products instantly.", featuredKicker: "Featured picks", featuredTitle: "Featured Products", compareKicker: "Rice guide", compareTitle: "Choose the right rice for your dish", compareIntro: "A quick comparison of rice varieties in the catalog.", compareProduct: "Product", compareType: "Type", compareWeight: "Weight", compareUse: "Suggested use", basmatiLong: "Extra-long basmati", jasmineRice: "Fragrant jasmine rice", indianBasmati: "Indian basmati", camolinoRice: "White camolino", useKabsa: "Kabsa and mandi", useAsian: "Asian dishes", useBiryani: "Biryani and fluffy rice", useDaily: "Daily cooking and stuffed dishes", catalogPdfKicker: "Save a copy", catalogPdfTitle: "Download the Salima PDF catalog", catalogPdfText: "A concise copy featuring key products and images.", downloadCatalog: "Download catalog", faqKicker: "Frequently asked questions", faqTitle: "Quick information before browsing", faq1q: "Is this an online store?", faq1a: "No. The website is only for discovering Salima products and information.", faq2q: "Are products available in different sizes?", faq2a: "Sizes vary by product and availability; confirmed sizes appear in product details.", faq3q: "How can I see product details?", faq3a: "Select View details on any product card.", locationKicker: "Service area", locationTitle: "West Bank", locationText: "The distribution area is within the West Bank; the map shows the general area without an unverified address.", openMap: "Open in Google Maps",
    categories: { all: "All products", food: "Food", home: "Household", oil: "Cooking oils", canned: "Canned goods" }, groups: { all: "All products", rice: "Rice", canned: "Canned goods", oil: "Oils", tissues: "Tissues", other: "Other products" }
  }
};

const storage = {
  get(key, fallback) {
    try { return localStorage.getItem(key) || fallback; }
    catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); }
    catch { /* Storage may be unavailable in private or embedded contexts. */ }
  }
};

const state = {
  language: storage.get("salima-language", "ar"),
  theme: storage.get("salima-theme", "light"),
  category: "all",
  search: "",
  brand: "all",
  type: "all",
  weight: "all",
  lightboxIndex: 0
};

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const elements = {
  html: document.documentElement,
  loader: $("#pageLoader"), header: $("#siteHeader"), menuBtn: $("#menuBtn"), nav: $("#mainNav"),
  themeToggle: $("#themeToggle"), languageToggle: $("#languageToggle"), footerLanguage: $("#footerLanguage"),
  search: $("#productSearch"), clearSearch: $("#clearSearch"), filterList: $("#filterList"), productsGrid: $("#productsGrid"),
  resultsSummary: $("#resultsSummary"), emptyState: $("#emptyState"), resetFilters: $("#resetFilters"), galleryGrid: $("#galleryGrid"),
  brandFilter: $("#brandFilter"), featuredGrid: $("#featuredGrid"), sliderDots: $("#sliderDots"), sliderPrev: $("#sliderPrev"), sliderNext: $("#sliderNext"),
  brandSelect: $("#brandSelect"), typeSelect: $("#typeSelect"), weightSelect: $("#weightSelect"), clearFilters: $("#clearFilters"),
  toTop: $("#toTop"), year: $("#year"),
  modal: $("#productModal"), modalClose: $("#modalClose"), modalImage: $("#modalImage"), modalCategory: $("#modalCategory"),
  modalTitle: $("#modalTitle"), modalDescription: $("#modalDescription"), modalUse: $("#modalUse"), modalStorage: $("#modalStorage"), modalPackaging: $("#modalPackaging"),
  modalMeta: $("#modalMeta"), modalZoom: $("#modalZoom"), productPageLink: $("#productPageLink"), relatedProducts: $("#relatedProducts"), relatedGrid: $("#relatedGrid"),
  lightbox: $("#lightbox"), lightboxClose: $("#lightboxClose"), lightboxPrev: $("#lightboxPrev"), lightboxNext: $("#lightboxNext"), lightboxImage: $("#lightboxImage"), lightboxCaption: $("#lightboxCaption")
};

function t(key) { return translations[state.language][key]; }
function getProductText(product) { return product[state.language]; }
function getBrand(product) {
  return SALIMA_BRANDS.find((brand) => brand.id === product.brand)?.[state.language] || product.brand;
}
function normalize(value) { return value.trim().toLocaleLowerCase(state.language === "ar" ? "ar" : "en"); }

function applyTheme() {
  elements.html.dataset.theme = state.theme;
  storage.set("salima-theme", state.theme);
  const label = state.theme === "light" ? t("themeDark") : t("themeLight");
  elements.themeToggle.setAttribute("aria-label", label);
  elements.themeToggle.title = label;
}

function applyTranslations() {
  const lang = state.language;
  const direction = lang === "ar" ? "rtl" : "ltr";
  elements.html.lang = lang;
  elements.html.dir = direction;
  document.title = lang === "ar" ? "شركة سليمة | كتالوج المنتجات" : "Salima Company | Product Catalog";
  document.querySelector('meta[name="description"]').content = lang === "ar"
    ? "كتالوج شركة سليمة لعرض المنتجات الغذائية والمنزلية بجودة واضحة وتجربة سهلة."
    : "Salima Company's clear and accessible catalog for food and household products.";

  $$('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
  });
  $$('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
  });
  $$('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang][key] !== undefined) el.placeholder = translations[lang][key];
  });

  elements.languageToggle.textContent = lang === "ar" ? "EN" : "ع";
  elements.menuBtn.setAttribute("aria-label", t("menuOpen"));
  applyTheme();
  renderFilters();
  renderBrands();
  renderAdvancedFilters();
  renderProducts();
  renderFeatured();
  renderGallery();
  refreshModalLanguage();
}

function toggleLanguage() {
  state.language = state.language === "ar" ? "en" : "ar";
  storage.set("salima-language", state.language);
  applyTranslations();
}


function renderBrands() {
  if (!elements.brandFilter) return;
  elements.brandFilter.innerHTML = SALIMA_BRANDS.map((brand) => `<button type="button" class="brand-pill ${state.brand === brand.id ? "active" : ""}" data-brand="${brand.id}">${brand[state.language]}</button>`).join("");
}

function renderFeatured() {
  if (!elements.featuredGrid) return;
  elements.featuredGrid.innerHTML = SALIMA_PRODUCTS.filter((p) => p.featured).slice(0,4).map(productCard).join("");
  initRevealObserver(elements.featuredGrid);
}

function renderFilters() {
  const categories = ["all", "rice", "canned", "oil", "tissues", "other"];
  elements.filterList.innerHTML = categories.map((category) => `
    <button type="button" class="filter-btn ${state.category === category ? "active" : ""}" data-category="${category}">
      ${t("groups")[category]}
    </button>
  `).join("");
}

function renderAdvancedFilters() {
  const option = (value, label, selected) => `<option value="${value}" ${selected === value ? "selected" : ""}>${label}</option>`;
  const types = [...new Map(SALIMA_PRODUCTS.map(product => [product.type.en, product.type[state.language]])).entries()];
  const weights = [...new Set(SALIMA_PRODUCTS.map(product => product.weight).filter(Boolean))];
  elements.brandSelect.innerHTML = option("all", t("allOptions"), state.brand) + SALIMA_BRANDS.filter(brand => brand.id !== "all").map(brand => option(brand.id, brand[state.language], state.brand)).join("");
  elements.typeSelect.innerHTML = option("all", t("allOptions"), state.type) + types.map(([value, label]) => option(value, label, state.type)).join("");
  elements.weightSelect.innerHTML = option("all", t("allOptions"), state.weight) + weights.map(weight => option(weight, weight, state.weight)).join("");
}

function filteredProducts() {
  const query = normalize(state.search);
  return SALIMA_PRODUCTS.filter((product) => {
    const text = getProductText(product);
    const brand = SALIMA_BRANDS.find(item => item.id === product.brand);
    const matchesCategory = state.category === "all" || product.group === state.category || (state.category === "other" && !["rice", "canned", "oil", "tissues"].includes(product.group));
    const matchesBrand = state.brand === "all" || product.brand === state.brand;
    const matchesType = state.type === "all" || product.type.en === state.type;
    const matchesWeight = state.weight === "all" || product.weight === state.weight;
    const searchable = normalize(`${product.ar.name} ${product.en.name} ${brand?.ar || ""} ${brand?.en || ""} ${t("categories")[product.category]} ${product.type.ar} ${product.type.en} ${text.short}`);
    return matchesCategory && matchesBrand && matchesType && matchesWeight && (!query || searchable.includes(query));
  });
}

function productCard(product, index) {
  const text = getProductText(product);
  return `
    <article class="product-card reveal" data-product-id="${product.id}">
      <div class="product-media">
        <span class="product-category">${product.featured ? t("featured") : t("categories")[product.category]}</span>${product.weight ? `<span class="product-weight">${product.weight}</span>` : ""}
        <img src="${product.image}" alt="${text.name}" loading="lazy" decoding="async" width="1122" height="1402">
      </div>
      <div class="product-body">
        <div class="product-title-row"><h3>${text.name}</h3><span class="product-number">0${index + 1}</span></div>
        <div class="product-meta"><span>${getBrand(product)}</span><span>${product.type[state.language]}</span></div>
        <p>${text.short}</p>
        <button class="product-details-btn" type="button" data-open-product="${product.id}" aria-label="${t("viewDetails")}: ${text.name}">
          <span>${t("viewDetails")}</span><span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  `;
}

function renderProducts() {
  const products = filteredProducts();
  elements.productsGrid.innerHTML = products.map(productCard).join("");
  elements.emptyState.hidden = products.length !== 0;
  elements.productsGrid.hidden = products.length === 0;
  elements.resultsSummary.textContent = t("results").replace("{count}", products.length).replace("{total}", SALIMA_PRODUCTS.length);
  elements.clearSearch.classList.toggle("show", Boolean(state.search));
  initRevealObserver(elements.productsGrid);
}

function renderGallery() {
  elements.galleryGrid.innerHTML = SALIMA_PRODUCTS.map((product, index) => {
    const text = getProductText(product);
    return `<button class="gallery-item reveal" type="button" data-gallery-index="${index}" aria-label="${text.name}"><img src="${product.image}" alt="${text.name}" loading="lazy" decoding="async" width="1122" height="1402"><span class="gallery-label">${text.name}</span></button>`;
  }).join("");
  initRevealObserver(elements.galleryGrid);
}

function openProduct(productId) {
  const product = SALIMA_PRODUCTS.find((item) => item.id === productId);
  if (!product) return;
  const text = getProductText(product);
  elements.modal.dataset.productId = product.id;
  elements.modalImage.src = product.image;
  elements.modalImage.alt = text.name;
  elements.modalCategory.textContent = t("categories")[product.category];
  elements.modalTitle.textContent = text.name;
  elements.modalMeta.innerHTML = [getBrand(product), product.type[state.language], product.weight].filter(Boolean).map(value => `<span>${value}</span>`).join("");
  elements.modalDescription.textContent = text.description;
  elements.modalUse.textContent = text.use;
  elements.modalStorage.textContent = text.storage;
  elements.modalPackaging.textContent = text.packaging;
  elements.productPageLink.href = `./product.html?id=${encodeURIComponent(product.id)}&lang=${state.language}`;
  const related = SALIMA_PRODUCTS.filter(item => item.category === product.category && item.id !== product.id).slice(0, 3);
  elements.relatedProducts.hidden = related.length === 0;
  elements.relatedGrid.innerHTML = related.map(item => {
    const relatedText = getProductText(item);
    return `<button type="button" data-open-product="${item.id}"><img src="${item.image}" alt="${relatedText.name}" width="1122" height="1402" loading="lazy"><span>${relatedText.name}</span></button>`;
  }).join("");
  if (!elements.modal.open) state.lastProductTrigger = document.activeElement;
  if (!elements.modal.open) elements.modal.showModal();
  document.body.classList.add("modal-open");
}

function refreshModalLanguage() {
  if (!elements.modal.open || !elements.modal.dataset.productId) return;
  openProduct(elements.modal.dataset.productId);
}

function closeDialog(dialog) {
  if (dialog.open) dialog.close();
  if (!elements.modal.open && !elements.lightbox.open) document.body.classList.remove("modal-open");
}

function openLightbox(index) {
  state.lightboxIndex = (index + SALIMA_PRODUCTS.length) % SALIMA_PRODUCTS.length;
  const product = SALIMA_PRODUCTS[state.lightboxIndex];
  const text = getProductText(product);
  elements.lightboxImage.src = product.image;
  elements.lightboxImage.alt = text.name;
  elements.lightboxCaption.textContent = text.name;
  if (!elements.lightbox.open) elements.lightbox.showModal();
  document.body.classList.add("modal-open");
}

function setMenu(open) {
  elements.nav.classList.toggle("open", open);
  elements.menuBtn.classList.toggle("active", open);
  elements.menuBtn.setAttribute("aria-expanded", String(open));
  elements.menuBtn.setAttribute("aria-label", open ? t("menuClose") : t("menuOpen"));
}

function updateScrollUI() {
  const y = window.scrollY;
  elements.header.classList.toggle("scrolled", y > 15);
  elements.toTop.classList.toggle("show", y > 500);

  const sections = $$("main section[id]");
  let activeId = "home";
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= 150) activeId = section.id;
  });
  $$("#mainNav a").forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`));
}

let revealObserver;
function initRevealObserver(parent = document) {
  if (!("IntersectionObserver" in window)) {
    $$(".reveal", parent).forEach((element) => element.classList.add("visible"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12, rootMargin: "0px 0px -25px" });
  }
  $$(".reveal:not(.visible)", parent).forEach((element) => revealObserver.observe(element));
}

function animateCounters() {
  const counters = $$('[data-count]');
  if (!("IntersectionObserver" in window)) {
    counters.forEach((counter) => { counter.textContent = counter.dataset.count; });
    return;
  }
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      let value = 0;
      const timer = setInterval(() => {
        value += 1;
        el.textContent = value;
        if (value >= target) clearInterval(timer);
      }, 80);
      observer.unobserve(el);
    });
  }, { threshold: .6 });
  counters.forEach((counter) => counterObserver.observe(counter));
}

function bindEvents() {
  elements.themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    applyTheme();
  });
  elements.languageToggle.addEventListener("click", toggleLanguage);
  elements.footerLanguage.addEventListener("click", toggleLanguage);
  elements.menuBtn.addEventListener("click", () => setMenu(!elements.nav.classList.contains("open")));
  $$("#mainNav a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
  $$("[data-footer-group]").forEach((link) => link.addEventListener("click", () => {
    state.category = link.dataset.footerGroup;
    renderFilters();
    renderProducts();
  }));

  elements.filterList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.category = button.dataset.category;
    renderFilters();
    renderBrands();
    renderProducts();
  });

  if (elements.brandFilter) elements.brandFilter.addEventListener("click", (event) => {
    const button = event.target.closest("[data-brand]");
    if (!button) return;
    state.brand = button.dataset.brand;
    renderBrands();
    renderAdvancedFilters();
    renderProducts();
    document.querySelector("#products").scrollIntoView({behavior:"smooth"});
  });

  if (elements.featuredGrid) elements.featuredGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open-product]");
    if (button) openProduct(button.dataset.openProduct);
  });

  elements.search.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderProducts();
  });
  elements.clearSearch.addEventListener("click", () => {
    state.search = "";
    elements.search.value = "";
    renderProducts();
    elements.search.focus();
  });
  elements.resetFilters.addEventListener("click", () => {
    state.category = "all";
    state.brand = "all";
    state.type = "all";
    state.weight = "all";
    state.search = "";
    elements.search.value = "";
    renderFilters();
    renderBrands();
    renderAdvancedFilters();
    renderProducts();
  });
  elements.clearFilters.addEventListener("click", () => elements.resetFilters.click());
  elements.brandSelect.addEventListener("change", (event) => { state.brand = event.target.value; renderBrands(); renderProducts(); });
  elements.typeSelect.addEventListener("change", (event) => { state.type = event.target.value; renderProducts(); });
  elements.weightSelect.addEventListener("change", (event) => { state.weight = event.target.value; renderProducts(); });

  elements.productsGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open-product]");
    if (button) openProduct(button.dataset.openProduct);
  });
  elements.modalClose.addEventListener("click", () => closeDialog(elements.modal));
  elements.modal.addEventListener("click", (event) => { if (event.target === elements.modal) closeDialog(elements.modal); });
  elements.modal.addEventListener("close", () => {
    if (!elements.lightbox.open) document.body.classList.remove("modal-open");
    state.lastProductTrigger?.focus?.();
  });
  elements.modalZoom.addEventListener("click", () => {
    const index = SALIMA_PRODUCTS.findIndex(product => product.id === elements.modal.dataset.productId);
    if (index >= 0) openLightbox(index);
  });
  elements.relatedGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open-product]");
    if (button) openProduct(button.dataset.openProduct);
  });

  elements.galleryGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-gallery-index]");
    if (button) openLightbox(Number(button.dataset.galleryIndex));
  });
  elements.lightboxClose.addEventListener("click", () => closeDialog(elements.lightbox));
  elements.lightboxPrev.addEventListener("click", () => openLightbox(state.lightboxIndex - 1));
  elements.lightboxNext.addEventListener("click", () => openLightbox(state.lightboxIndex + 1));
  elements.lightbox.addEventListener("click", (event) => { if (event.target === elements.lightbox) closeDialog(elements.lightbox); });
  elements.lightbox.addEventListener("close", () => {
    if (!elements.modal.open) document.body.classList.remove("modal-open");
  });

  document.addEventListener("keydown", (event) => {
    if (elements.lightbox.open && event.key === "ArrowLeft") openLightbox(state.lightboxIndex + (state.language === "ar" ? 1 : -1));
    if (elements.lightbox.open && event.key === "ArrowRight") openLightbox(state.lightboxIndex + (state.language === "ar" ? -1 : 1));
  });

  elements.toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", updateScrollUI, { passive: true });
  window.addEventListener("resize", () => { if (window.innerWidth > 880) setMenu(false); });
}

function initHeroSlider() {
  const slider = $(".hero-slider");
  const slides = $$(".hero-slide");
  const dots = $$("#sliderDots button");
  if (!slider || slides.length === 0) return;
  let slideIndex = 0;
  let timer = null;
  let pointerStart = null;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const showSlide = (index) => {
    slideIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("active", i === slideIndex));
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === slideIndex);
      dot.setAttribute("aria-current", i === slideIndex ? "true" : "false");
    });
  };
  const stop = () => { if (timer) window.clearInterval(timer); timer = null; };
  const start = () => {
    stop();
    if (!reducedMotion.matches && !document.hidden && !slider.matches(":hover")) {
      timer = window.setInterval(() => showSlide(slideIndex + 1), 4200);
    }
  };
  dots.forEach((dot, index) => dot.addEventListener("click", () => { showSlide(index); start(); }));
  elements.sliderPrev.addEventListener("click", () => { showSlide(slideIndex - 1); start(); });
  elements.sliderNext.addEventListener("click", () => { showSlide(slideIndex + 1); start(); });
  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", start);
  document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());
  slider.addEventListener("pointerdown", event => { pointerStart = event.clientX; });
  slider.addEventListener("pointerup", event => {
    if (pointerStart === null) return;
    const distance = event.clientX - pointerStart;
    if (Math.abs(distance) > 45) showSlide(slideIndex + (distance < 0 ? 1 : -1));
    pointerStart = null;
    start();
  });
  showSlide(0);
  start();
}

function init() {
  elements.year.textContent = new Date().getFullYear();
  elements.search.value = state.search;
  applyTranslations();
  bindEvents();
  initRevealObserver();
  animateCounters();
  updateScrollUI();
  initHeroSlider();
  window.setTimeout(() => elements.loader.classList.add("hide"), 450);
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
