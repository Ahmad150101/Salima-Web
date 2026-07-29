"use strict";
let language=new URLSearchParams(location.search).get("lang")==="en"?"en":"ar";
let theme=localStorage.getItem("salima-theme")==="dark"?"dark":"light";
const selected=new URLSearchParams(location.search).get("brand");
const name=(x,k)=>language==="ar"?x[`${k}Ar`]:x[`${k}En`];
const image=p=>p.images[0]||"assets/products/tissues.svg";
const brands=selected?SALIMA_BRANDS.filter(b=>b.id===selected):SALIMA_BRANDS;
function render(){
  document.documentElement.lang=language;document.documentElement.dir=language==="ar"?"rtl":"ltr";document.documentElement.dataset.theme=theme;
  document.querySelector("#pageLanguage").textContent=language==="ar"?"EN":"ع";document.querySelector("#backLink").textContent=language==="ar"?"← العودة إلى الرئيسية":"← Back to home";document.querySelector("#pageTitle").textContent=language==="ar"?"علاماتنا التجارية":"Our Brands";document.querySelector("#pageIntro").textContent=language==="ar"?"العلامات التجارية المؤكدة مرتبة حسب أقسام المنتجات.":"Confirmed brands organized by product category.";
  const banner=document.querySelector("#brandFilterBanner");banner.hidden=!selected;if(selected){const b=brands[0];banner.textContent=b?(language==="ar"?`عرض منتجات علامة ${name(b,"name")} فقط`:`Showing ${name(b,"name")} products only`):(language==="ar"?"العلامة المطلوبة غير موجودة.":"The requested brand was not found.")}
  const groups=SALIMA_CATEGORIES.map(c=>{const list=brands.filter(b=>b.category===c.id);if(!list.length)return"";return `<section><h2>${name(c,"name")}</h2><div class="brands-grid">${list.map(b=>{const products=SALIMA_PRODUCTS.filter(p=>p.brand===b.id);return `<article class="brand-full-card"><h3>${name(b,"name")}</h3><div class="brand-product-images">${products.map(p=>`<img src="${image(p)}" alt="${name(p,"name")}" loading="lazy" decoding="async">`).join("")}</div><p>${products.length} ${language==="ar"?"منتج":"product(s)"}</p><a class="primary-btn" href="brands.html?brand=${encodeURIComponent(b.id)}&lang=${language}">${language==="ar"?"عرض المنتجات":"View products"}</a>${selected?`<div class="products-grid" style="grid-template-columns:1fr;margin-top:16px">${products.map(p=>`<a class="related-card" href="product.html?id=${p.id}&lang=${language}"><strong>${name(p,"name")}</strong></a>`).join("")}</div>`:""}</article>`}).join("")}</div></section>`}).join("");
  document.querySelector("#brandsGroups").innerHTML=groups||(language==="ar"?"<div class=status-message>لا توجد علامة مطابقة.</div>":"<div class=status-message>No matching brand.</div>");
}
document.querySelector("#pageLanguage").addEventListener("click",()=>{language=language==="ar"?"en":"ar";render()});document.querySelector("#pageTheme").addEventListener("click",()=>{theme=theme==="light"?"dark":"light";localStorage.setItem("salima-theme",theme);render()});render();
