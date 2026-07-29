"use strict";

const I18N = {
  ar:{skip:"انتقل إلى المحتوى",home:"الرئيسية",products:"المنتجات",brands:"علاماتنا التجارية",about:"عن الشركة",faq:"الأسئلة الشائعة",heroEyebrow:"كتالوج سليمة",heroTitle:"منتجات واضحة، وتصفح أسهل",heroText:"تعرّف إلى منتجات سليمة ضمن أقسام منظمة، وابحث عن المنتج المناسب بسرعة.",browse:"تصفح المنتجات",browseBrands:"استعرض العلامات",offersKicker:"العروض",offersTitle:"العروض الحالية",brandsKicker:"علاماتنا",brandsTitle:"علامات تجارية ضمن أقسام واضحة",brandsText:"معاينة مختصرة للعلامات المؤكدة في الكتالوج.",allBrands:"عرض جميع العلامات",catalog:"الكتالوج",productsTitle:"المنتجات",productsText:"ابحث بالاسم أو القسم أو النوع أو المعلومات المتوفرة.",searchLabel:"البحث في المنتجات",searchPlaceholder:"ابحث عن منتج...",clear:"مسح البحث والفلاتر",noResults:"لا توجد نتائج مطابقة",noResultsText:"عدّل عبارة البحث أو اعرض جميع الأقسام.",aboutTitle:"سليمة",aboutText:"موقع تعريفي يجمع منتجات الشركة في كتالوج منظم، ويعرض المعلومات المؤكدة المتوفرة لكل منتج.",vision:"الرؤية",visionText:"تقديم المنتجات ضمن تجربة رقمية واضحة وسهلة الوصول.",mission:"الرسالة",missionText:"تنظيم معلومات المنتجات وتسهيل استعراضها بالعربية والإنجليزية.",location:"الخريطة",locationTitle:"نطاق التواجد",locationText:"تعرض الخريطة نطاقًا عامًا دون نشر عنوان غير مؤكد.",faqTitle:"معلومات سريعة",q1:"هل الموقع متجر إلكتروني؟",a1:"لا، الموقع مخصص للتعريف بالمنتجات وعرض معلوماتها.",q2:"كيف أعرض تفاصيل منتج؟",a2:"اختر زر عرض التفاصيل في بطاقة المنتج.",q3:"هل كل المعلومات والصور مكتملة؟",a3:"تظهر المعلومات والصور المؤكدة فقط، وتُستكمل البيانات عند اعتمادها.",pdfTitle:"كتالوج سليمة PDF",pdfText:"نسخة قابلة للحفظ من الكتالوج المتوفر.",download:"تحميل PDF",footerText:"سليمة — كتالوج تعريفي للمنتجات.",share:"مشاركة",copy:"نسخ الرابط",copied:"تم نسخ الرابط",openPage:"فتح صفحة المنتج",related:"منتجات مشابهة",all:"جميع المنتجات",details:"عرض التفاصيل",results:n=>`${n} نتيجة`,brand:"العلامة",category:"القسم",type:"النوع",weight:"الوزن",quantity:"الكمية",pieces:"عدد القطع",packages:"عدد العبوات",description:"الوصف",featured:"مميز",new:"جديد",offer:"عرض"},
  en:{skip:"Skip to content",home:"Home",products:"Products",brands:"Our Brands",about:"About",faq:"FAQ",heroEyebrow:"Salima catalog",heroTitle:"Clear products, easier browsing",heroText:"Explore Salima products in organized categories and find what you need quickly.",browse:"Browse products",browseBrands:"Explore brands",offersKicker:"Offers",offersTitle:"Current Offers",brandsKicker:"Our brands",brandsTitle:"Confirmed brands in clear categories",brandsText:"A concise preview of confirmed catalog brands.",allBrands:"View all brands",catalog:"Catalog",productsTitle:"Products",productsText:"Search by product name, category, type, or available details.",searchLabel:"Search products",searchPlaceholder:"Search products...",clear:"Clear search and filters",noResults:"No matching products",noResultsText:"Change your search or show all categories.",aboutTitle:"Salima",aboutText:"An informational catalog that organizes company products and displays confirmed information only.",vision:"Vision",visionText:"Present products through a clear and accessible digital experience.",mission:"Mission",missionText:"Organize product information for easy browsing in Arabic and English.",location:"Map",locationTitle:"General coverage",locationText:"The map shows a general area without publishing an unconfirmed address.",faqTitle:"Quick information",q1:"Is this an online store?",a1:"No. This website introduces products and displays their information.",q2:"How do I view product details?",a2:"Choose View details on a product card.",q3:"Are all images and details complete?",a3:"Only confirmed information and images are shown; data is completed after approval.",pdfTitle:"Salima PDF catalog",pdfText:"A downloadable copy of the available catalog.",download:"Download PDF",footerText:"Salima — an informational product catalog.",share:"Share",copy:"Copy link",copied:"Link copied",openPage:"Open product page",related:"Related products",all:"All products",details:"View details",results:n=>`${n} results`,brand:"Brand",category:"Category",type:"Type",weight:"Weight",quantity:"Quantity",pieces:"Pieces",packages:"Packages",description:"Description",featured:"Featured",new:"New",offer:"Offer"}
};

const state={language:localStorage.getItem("salima-language")==="en"?"en":"ar",theme:localStorage.getItem("salima-theme")==="dark"?"dark":"light",category:"all",search:"",lastTrigger:null};
const $=(s,p=document)=>p.querySelector(s);
const $$=(s,p=document)=>[...p.querySelectorAll(s)];
const text=(p,key)=>state.language==="ar"?p[`${key}Ar`]:p[`${key}En`];
const category=id=>SALIMA_CATEGORIES.find(item=>item.id===id);
const brand=id=>SALIMA_BRANDS.find(item=>item.id===id);
const productName=p=>text(p,"name");
const productImage=p=>p.images[0]||"assets/products/tissues.svg";

function normalize(value){
  return String(value||"").toLowerCase().normalize("NFKD").replace(/[\u064B-\u065F\u0670]/g,"").replace(/[أإآ]/g,"ا").replace(/ة/g,"ه").replace(/ى/g,"ي").replace(/\s+/g," ").trim();
}
function catName(id){const item=category(id);return item?text(item,"name"):"";}
function brandName(id){const item=brand(id);return item?text(item,"name"):"";}
function productUrl(p){return `product.html?id=${encodeURIComponent(p.id)}&lang=${state.language}`;}
function availableRows(p){
  return [
    [I18N[state.language].category,catName(p.category)],[I18N[state.language].brand,brandName(p.brand)],
    [I18N[state.language].type,text(p,"type")],[I18N[state.language].weight,text(p,"weight")],
    [I18N[state.language].quantity,text(p,"quantity")],[I18N[state.language].pieces,p.piecesCount],
    [I18N[state.language].packages,p.packageCount],[I18N[state.language].description,text(p,"description")]
  ].filter(([,v])=>v);
}
function productCard(p){
  const badges=[p.offer.active?I18N[state.language].offer:"",p.featured?I18N[state.language].featured:"",p.isNew?I18N[state.language].new:""].filter(Boolean);
  return `<article class="product-card"><div class="product-media"><img src="${productImage(p)}" alt="${productName(p)}" width="1122" height="1402" loading="lazy" decoding="async"></div><div class="product-body"><span class="product-category">${catName(p.category)}</span><h3>${productName(p)}</h3><div class="product-meta">${brandName(p.brand)?`<span>${brandName(p.brand)}</span>`:""}${badges.map(x=>`<span class="badge">${x}</span>`).join("")}</div><button class="product-button" type="button" data-product="${p.id}">${I18N[state.language].details}</button></div></article>`;
}
function applyLocale(){
  const tr=I18N[state.language];document.documentElement.lang=state.language;document.documentElement.dir=state.language==="ar"?"rtl":"ltr";document.documentElement.dataset.theme=state.theme;
  $$("[data-i18n]").forEach(el=>{const v=tr[el.dataset.i18n];if(typeof v==="string")el.textContent=v});
  $$("[data-i18n-placeholder]").forEach(el=>el.placeholder=tr[el.dataset.i18nPlaceholder]);
  $("#languageToggle").textContent=state.language==="ar"?"EN":"ع";localStorage.setItem("salima-language",state.language);localStorage.setItem("salima-theme",state.theme);
}
function renderFilters(){
  $("#filterList").innerHTML=[{id:"all",nameAr:"جميع المنتجات",nameEn:"All products"},...SALIMA_CATEGORIES].map(c=>`<button class="filter-btn ${state.category===c.id?"active":""}" type="button" data-category="${c.id}">${text(c,"name")}</button>`).join("");
}
function searchable(p){
  return [p.nameAr,p.nameEn,category(p.category)?.nameAr,category(p.category)?.nameEn,p.typeAr,p.typeEn,p.weightAr,p.weightEn,p.quantityAr,p.quantityEn,p.piecesCount,p.packageCount,p.descriptionAr,p.descriptionEn,...p.keywordsAr,...p.keywordsEn].map(normalize).join(" ");
}
function renderProducts(){
  const query=normalize(state.search);const list=SALIMA_PRODUCTS.filter(p=>(state.category==="all"||p.category===state.category)&&(!query||searchable(p).includes(query)));
  $("#productsGrid").innerHTML=list.map(productCard).join("");$("#resultsSummary").textContent=I18N[state.language].results(list.length);$("#emptyState").hidden=list.length>0;
}
function renderBrands(){
  const featured=SALIMA_BRANDS.slice(0,6);$("#brandPreview").innerHTML=featured.map(b=>{const count=SALIMA_PRODUCTS.filter(p=>p.brand===b.id).length;return `<a class="brand-card" href="brands.html?brand=${encodeURIComponent(b.id)}"><small>${catName(b.category)}</small><strong>${brandName(b.id)}</strong><span>${count} ${state.language==="ar"?"منتج":"product"}</span></a>`}).join("");
}
function renderOffers(){
  const offers=SALIMA_PRODUCTS.filter(p=>p.offer.active);$("#offers").hidden=!offers.length;$("#offersGrid").innerHTML=offers.map(productCard).join("");
}
function relatedCards(p){return SALIMA_PRODUCTS.filter(x=>x.category===p.category&&x.id!==p.id).slice(0,3).map(x=>`<a class="related-card" href="${productUrl(x)}"><img src="${productImage(x)}" alt="${productName(x)}" loading="lazy"><strong>${productName(x)}</strong></a>`).join("")}
function openProduct(id){
  const p=SALIMA_PRODUCTS.find(x=>x.id===id);if(!p)return;state.lastTrigger=document.activeElement;$("#productModal").dataset.id=id;$("#modalImage").src=productImage(p);$("#modalImage").alt=productName(p);$("#modalCategory").textContent=catName(p.category);$("#modalTitle").textContent=productName(p);$("#modalDetails").innerHTML=availableRows(p).map(([k,v])=>`<dt>${k}</dt><dd>${v}</dd>`).join("");$("#productPageLink").href=productUrl(p);const related=relatedCards(p);$("#relatedProducts").hidden=!related;$("#relatedGrid").innerHTML=related;$("#productModal").showModal();document.body.style.overflow="hidden";
}
function currentShareUrl(){const p=SALIMA_PRODUCTS.find(x=>x.id===$("#productModal").dataset.id);return new URL(productUrl(p),location.href).href}
async function shareProduct(){const url=currentShareUrl();if(navigator.share){await navigator.share({title:$("#modalTitle").textContent,url}).catch(()=>{})}else await navigator.clipboard.writeText(url)}
async function copyProduct(){await navigator.clipboard.writeText(currentShareUrl());const b=$("#copyProduct"),old=b.textContent;b.textContent=I18N[state.language].copied;setTimeout(()=>b.textContent=old,1500)}
function refresh(){applyLocale();renderFilters();renderProducts();renderBrands();renderOffers();$("#year").textContent=new Date().getFullYear()}

$("#languageToggle").addEventListener("click",()=>{state.language=state.language==="ar"?"en":"ar";refresh()});
$("#themeToggle").addEventListener("click",()=>{state.theme=state.theme==="light"?"dark":"light";applyLocale()});
$("#menuBtn").addEventListener("click",()=>{const n=$("#mainNav"),open=n.classList.toggle("open");$("#menuBtn").setAttribute("aria-expanded",open)});
$("#filterList").addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(!b)return;state.category=b.dataset.category;renderFilters();renderProducts()});
$("#productSearch").addEventListener("input",e=>{state.search=e.target.value;renderProducts()});
$("#clearSearch").addEventListener("click",()=>{state.search="";$("#productSearch").value="";renderProducts();$("#productSearch").focus()});
$("#clearFilters").addEventListener("click",()=>{state.category="all";state.search="";$("#productSearch").value="";renderFilters();renderProducts()});
document.addEventListener("click",e=>{const b=e.target.closest("[data-product]");if(b)openProduct(b.dataset.product)});
$("#modalClose").addEventListener("click",()=>$("#productModal").close());
$("#productModal").addEventListener("click",e=>{if(e.target===$("#productModal"))$("#productModal").close()});
$("#productModal").addEventListener("close",()=>{document.body.style.overflow="";state.lastTrigger?.focus()});
$("#shareProduct").addEventListener("click",shareProduct);$("#copyProduct").addEventListener("click",copyProduct);
refresh();
