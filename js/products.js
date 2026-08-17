"use strict";

const SALIMA_CATEGORIES = [
  { id: "tissues", nameAr: "المحارم", nameEn: "Tissues" },
  { id: "rice", nameAr: "الأرز", nameEn: "Rice" },
  { id: "oils", nameAr: "الزيوت", nameEn: "Oils" },
  { id: "canned", nameAr: "المعلبات", nameEn: "Canned goods" }
];

const SALIMA_BRANDS = [
  { id: "mona", category: "tissues", nameAr: "منى", nameEn: "Mona" },
  { id: "maram", category: "tissues", nameAr: "مرام", nameEn: "Maram" },
  { id: "rania", category: "tissues", nameAr: "رانيا", nameEn: "Rania" },
  { id: "hana", category: "tissues", nameAr: "هنا", nameEn: "Hana" },
  { id: "dania", category: "tissues", nameAr: "دانيا", nameEn: "Dania" },
  { id: "set-el-kol-tissues", category: "tissues", nameAr: "ست الكل", nameEn: "Set El Kol" },
  { id: "aeroplane", category: "rice", nameAr: "AEROPLANE", nameEn: "AEROPLANE" },
  { id: "atlantic", category: "rice", nameAr: "ATLANTIC", nameEn: "ATLANTIC" },
  { id: "set-el-kol", category: "rice", nameAr: "SET EL KOL", nameEn: "SET EL KOL" }
];

const emptyOffer = () => ({
  active: false, titleAr: "", titleEn: "", detailsAr: "", detailsEn: "", startDate: "", endDate: ""
});

const product = (data) => ({
  id: "", category: "", brand: "", nameAr: "", nameEn: "", images: [],
  weightAr: "", weightEn: "", quantityAr: "", quantityEn: "", piecesCount: "",
  packageCount: "", typeAr: "", typeEn: "", descriptionAr: "", descriptionEn: "",
  keywordsAr: [], keywordsEn: [], featured: false, isNew: false, offer: emptyOffer(),
  ...data
});

const SALIMA_PRODUCTS = [
  product({id:"tissues-mona",category:"tissues",brand:"mona",nameAr:"محارم منى",nameEn:"Mona Tissues",images:["assets/products/unified/tissues-mona-stack.webp","assets/products/unified/tissues-mona-single.webp"],typeAr:"محارم",typeEn:"Tissues",keywordsAr:["محارم","منى"],keywordsEn:["tissues","mona"]}),
  product({id:"tissues-maram",category:"tissues",brand:"maram",nameAr:"محارم مرام",nameEn:"Maram Tissues",images:["assets/products/unified/tissues-maram.webp"],typeAr:"محارم",typeEn:"Tissues",keywordsAr:["محارم","مرام"],keywordsEn:["tissues","maram"]}),
  product({id:"tissues-rania",category:"tissues",brand:"rania",nameAr:"محارم رانيا",nameEn:"Rania Tissues",images:["assets/products/unified/tissues-rania.webp"],typeAr:"محارم",typeEn:"Tissues",keywordsAr:["محارم","رانيا"],keywordsEn:["tissues","rania"]}),
  product({id:"tissues-hana",category:"tissues",brand:"hana",nameAr:"محارم هنا",nameEn:"Hana Tissues",images:["assets/products/unified/tissues-hana.webp"],typeAr:"محارم",typeEn:"Tissues",keywordsAr:["محارم","هنا"],keywordsEn:["tissues","hana"]}),
  product({id:"tissues-dania",category:"tissues",brand:"dania",nameAr:"محارم دانيا",nameEn:"Dania Tissues",images:["assets/products/unified/tissues-dania.webp"],typeAr:"محارم",typeEn:"Tissues",keywordsAr:["محارم","دانيا"],keywordsEn:["tissues","dania"]}),
  product({id:"tissues-set-el-kol",category:"tissues",brand:"set-el-kol-tissues",nameAr:"محارم ست الكل",nameEn:"Set El Kol Tissues",images:["assets/products/unified/tissues-set-el-kol.webp"],typeAr:"محارم",typeEn:"Tissues",keywordsAr:["محارم","ست الكل"],keywordsEn:["tissues","set el kol"],featured:true}),
  product({id:"rice-aeroplane",category:"rice",brand:"aeroplane",nameAr:"أرز AEROPLANE",nameEn:"AEROPLANE Rice",images:["assets/products/unified/rice-aeroplane.webp"],typeAr:"أرز",typeEn:"Rice",keywordsAr:["أرز","ارز"],keywordsEn:["rice","aeroplane"],featured:true}),
  product({id:"rice-atlantic",category:"rice",brand:"atlantic",nameAr:"أرز ATLANTIC",nameEn:"ATLANTIC Rice",images:["assets/products/unified/rice-atlantic.webp"],typeAr:"أرز",typeEn:"Rice",keywordsAr:["أرز","ارز"],keywordsEn:["rice","atlantic"]}),
  product({id:"rice-set-el-kol",category:"rice",brand:"set-el-kol",nameAr:"أرز SET EL KOL",nameEn:"SET EL KOL Rice",images:["assets/products/real/set-elkol-rice.png"],typeAr:"أرز",typeEn:"Rice",keywordsAr:["أرز","ارز","ست الكل"],keywordsEn:["rice","set el kol"],featured:true}),
  product({id:"oil-ukrainian",category:"oils",nameAr:"زيت أوكراني",nameEn:"Ukrainian Oil",images:["assets/products/unified/oil-salima-front.webp"],typeAr:"زيت",typeEn:"Oil",keywordsAr:["زيت","أوكراني","اوكراني"],keywordsEn:["oil","ukrainian"]}),
  product({id:"oil-turkish",category:"oils",nameAr:"زيت تركي",nameEn:"Turkish Oil",images:["assets/products/unified/oil-salima-alt.webp"],typeAr:"زيت",typeEn:"Oil",keywordsAr:["زيت","تركي"],keywordsEn:["oil","turkish"]}),
  product({id:"canned-tuna",category:"canned",nameAr:"تونة",nameEn:"Tuna",images:["assets/products/unified/canned-tuna.webp","assets/products/unified/canned-tuna-alt.webp"],typeAr:"تونة",typeEn:"Tuna",keywordsAr:["تونة","معلبات"],keywordsEn:["tuna","canned"],featured:true}),
  product({id:"canned-beans",category:"canned",nameAr:"فول عادي",nameEn:"Fava Beans",images:["assets/products/unified/canned-beans.webp"],typeAr:"فول عادي",typeEn:"Fava beans",keywordsAr:["فول","عادي","معلبات"],keywordsEn:["beans","fava","canned"]}),
  product({id:"canned-spicy-beans",category:"canned",nameAr:"فول حار",nameEn:"Spicy Fava Beans",images:["assets/products/unified/canned-beans.webp"],typeAr:"فول حار",typeEn:"Spicy fava beans",keywordsAr:["فول","حار","معلبات"],keywordsEn:["beans","spicy","canned"],isNew:true}),
  product({id:"canned-sweet-corn",category:"canned",nameAr:"ذرة حلوة",nameEn:"Sweet Corn",images:["assets/products/corn.svg"],typeAr:"ذرة حلوة",typeEn:"Sweet corn",keywordsAr:["ذرة","ذره","حلوة","معلبات"],keywordsEn:["sweet","corn","canned"]})
];

const SALIMA_DATA = { categories: SALIMA_CATEGORIES, brands: SALIMA_BRANDS, products: SALIMA_PRODUCTS };
