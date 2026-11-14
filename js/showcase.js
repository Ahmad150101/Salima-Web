"use strict";
(() => {
  const params = new URLSearchParams(location.search);
  let language = params.get("lang") === "en" ? "en" : params.get("lang") === "ar" ? "ar" : localStorage.getItem("salima-language") === "en" ? "en" : "ar";
  let index = 0;
  let startX = 0;
  const $ = selector => document.querySelector(selector);
  const tx = (item, key) => language === "ar" ? item[key + "Ar"] : item[key + "En"];
  const copy = {
    ar:{openingTitle:"سليمة",openingText:"تشكيلة منتجات ترافق تفاصيل يومك، مقدمة في تجربة بصرية واضحة.",openingKicker:"تجربة المنتجات",tissuesA:"المحارم · المجموعة الأولى",tissuesB:"المحارم · المجموعة الثانية",finalTitle:"اكتشف المزيد",finalText:"تابع إلى الكتالوج لاستكشاف المنتجات والمواصفات المتاحة لكل منتج.",catalog:"استكشف الكتالوج",home:"العودة للرئيسية",hint:"استخدم الأسهم أو اسحب للتنقل",illustrative:"صورة توضيحية"},
    en:{openingTitle:"Salima",openingText:"A product collection for everyday moments, presented through a clear visual experience.",openingKicker:"Product experience",tissuesA:"Tissues · collection one",tissuesB:"Tissues · collection two",finalTitle:"Discover more",finalText:"Continue to the catalog to explore every product and its available specifications.",catalog:"Explore catalog",home:"Back to home",hint:"Use arrow keys or swipe to navigate",illustrative:"Illustrative image"}
  };
  const verifiedHeroIds = ["tissues-mona","rice-aeroplane","oil-ukrainian","canned-tuna"];
  const productCard = product => {
    const specs = [tx(product,"weight"),tx(product,"pieces")].filter(Boolean);
    const note = tx(product,"imageNote");
    return '<article class="show-product" data-product-id="'+product.id+'"><div class="show-product-media"><img src="'+product.images[0]+'" alt="'+tx(product,"name")+'">'+(note?'<span class="show-image-note">'+note+'</span>':"")+'</div><div class="show-product-copy"><h2>'+tx(product,"name")+'</h2><p class="tagline">'+tx(product,"tagline")+'</p><div class="specs">'+specs.map(value=>"<span>"+value+"</span>").join("")+'</div><p class="description">'+tx(product,"description")+"</p></div></article>";
  };
  const productScene = (title, intro, products, sceneIndex) =>
    '<section class="scene product-scene"><div class="scene-copy"><span class="scene-no">'+String(sceneIndex).padStart(2,"0")+' / 07</span><h1>'+title+'</h1><p>'+intro+'</p></div><div class="scene-products count-'+products.length+'">'+products.map(productCard).join("")+"</div></section>";
  function buildScenes() {
    const t = copy[language];
    const tissues = SALIMA_PRODUCTS.filter(product=>product.category==="tissues");
    const category = id => SALIMA_CATEGORIES.find(item=>item.id===id);
    const openingProducts = verifiedHeroIds.map(id=>SALIMA_PRODUCTS.find(product=>product.id===id));
    return [
      '<section class="scene opening"><div class="scene-copy"><span class="scene-no">'+t.openingKicker+'</span><h1>'+t.openingTitle+'</h1><p>'+t.openingText+'</p></div><div class="opening-products">'+openingProducts.map(product=>'<img src="'+product.images[0]+'" alt="'+tx(product,"name")+'">').join("")+"</div></section>",
      productScene(t.tissuesA,tx(category("tissues"),"intro"),tissues.slice(0,3),2),
      productScene(t.tissuesB,tx(category("tissues"),"intro"),tissues.slice(3,6),3),
      productScene(tx(category("rice"),"name"),tx(category("rice"),"intro"),SALIMA_PRODUCTS.filter(product=>product.category==="rice"),4),
      productScene(tx(category("oils"),"name"),tx(category("oils"),"intro"),SALIMA_PRODUCTS.filter(product=>product.category==="oils"),5),
      productScene(tx(category("canned"),"name"),tx(category("canned"),"intro"),SALIMA_PRODUCTS.filter(product=>product.category==="canned"),6),
      '<section class="scene final"><div class="scene-copy"><span class="scene-no">07 / 07</span><h1>'+t.finalTitle+'</h1><p>'+t.finalText+'</p><div class="final-actions"><a href="index.html#products">'+t.catalog+'</a><a href="index.html">'+t.home+"</a></div></div></section>"
    ];
  }
  function show(nextIndex) {
    const scenes = [...document.querySelectorAll(".scene")];
    index = Math.max(0,Math.min(nextIndex,scenes.length-1));
    scenes.forEach((scene,sceneIndex)=>scene.classList.toggle("active",sceneIndex===index));
    [...$("#dots").children].forEach((dot,dotIndex)=>dot.classList.toggle("active",dotIndex===index));
    $("#currentSlide").textContent=String(index+1).padStart(2,"0");
    $("#totalSlides").textContent=String(scenes.length).padStart(2,"0");
    $("#progressBar").style.width=(index+1)/scenes.length*100+"%";
    $("#prev").disabled=index===0;
    $("#next").disabled=index===scenes.length-1;
  }
  function render() {
    const scenes=buildScenes();
    $("#showcase").innerHTML=scenes.join("");
    $("#dots").innerHTML=scenes.map((_,sceneIndex)=>'<button data-slide="'+sceneIndex+'" aria-label="'+(sceneIndex+1)+'"></button>').join("");
    document.documentElement.lang=language;
    document.documentElement.dir=language==="ar"?"rtl":"ltr";
    $("#showLanguage").textContent=language==="ar"?"EN":"ع";
    $("#hint").textContent=copy[language].hint;
    localStorage.setItem("salima-language",language);
    show(Math.min(index,scenes.length-1));
  }
  $("#next").addEventListener("click",()=>show(index+1));
  $("#prev").addEventListener("click",()=>show(index-1));
  $("#dots").addEventListener("click",event=>{const dot=event.target.closest("[data-slide]");if(dot)show(Number(dot.dataset.slide))});
  $("#showLanguage").addEventListener("click",()=>{language=language==="ar"?"en":"ar";render()});
  $("#fullscreen").addEventListener("click",async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen()}catch{}});
  document.addEventListener("keydown",event=>{if(event.key==="ArrowLeft")show(language==="ar"?index+1:index-1);if(event.key==="ArrowRight")show(language==="ar"?index-1:index+1);if(event.key==="Escape"&&!document.fullscreenElement)location.href="index.html"});
  document.addEventListener("touchstart",event=>{startX=event.touches[0].clientX},{passive:true});
  document.addEventListener("touchend",event=>{const distance=event.changedTouches[0].clientX-startX;if(Math.abs(distance)>45)show(index+(distance<0?1:-1))},{passive:true});
  render();
})();
