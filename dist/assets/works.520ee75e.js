var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,l=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&i(e,a,t[a]);if(n)for(var a of n(t))r.call(t,a)&&i(e,a,t[a]);return e},d=(e,n)=>t(e,a(n));import{A as o,d as m,F as c,p as u,i as p,_ as g,m as v}from"./root.314d2a99.js";import{n as f,e as x,f as h,i as y,w as b,p as k,k as E,o as w,y as L,z as I,C as _,a as C,g as A,t as F,B as O,D as S,l as T,E as q,F as D,m as j,T as P,G as M,x as N}from"./vendor.5e96a560.js";import{_ as z}from"./Filter.3d377e1d.js";import{H as $,i as V}from"./index.2a16f735.js";var B=f({props:{title:{type:String,required:!0},kind:{type:String,required:!0},tags:{type:String,required:!0}}});const G=b();k("data-v-2bf95322");const H={class:"\n      card-header\n      grid\n      content-start\n      mb-10\n      md:min-h-24\n      lg:min-h-28\n      1.5xl:min-h-36 1.5xl:mb-22\n    ",style:{"word-break":"break-word"}},W={class:"\n        card-title\n        mb-2.5\n        text-5xl\n        leading-9\n        font-semibold\n        uppercase\n        @md:text-4xl @md: @md: @md: @md: @md: @md: @md: @md: @md:leading-7\n        1.5xl:text-6xl 1.5xl:leading-45px 1.5xl:mb-3.5\n      "},X={class:"\n        card-kind\n        mb-1\n        text-sun text-sm\n        !leading-none\n        font-semibold\n        uppercase\n        1.5xl:text-xl\n      "},R={class:"card-tags text-xs !leading-none opacity-50 1.5xl:text-sm"};E();const Y=G(((e,t,a,n,s,r)=>(w(),x("div",H,[h("h2",W,y(e.title),1),h("span",X,y(e.kind),1),h("span",R,y(e.tags),1)]))));B.render=Y,B.__scopeId="data-v-2bf95322";const J=e=>`background-image: url(${e})`;function K(e,t,a,n,s){(()=>{let e,r;const i=A.timeline({paused:!0}).to(n,{autoAlpha:1,duration:.5},"same").to(n,{x:300,y:-300,duration:100},"same");t.addEventListener("mouseenter",(()=>{e=t.getBoundingClientRect(),r={x:e.width/2,y:e.height/2},i.restart()}),{passive:!0}),t.addEventListener("mouseleave",(()=>{i.pause(),A.to(n,{autoAlpha:0,duration:.5})}),{passive:!0}),t.addEventListener("mousemove",F((t=>{const n=(e=>({x:e.clientX,y:e.clientY}))(t);var i,l,d,o,m;(e=>{const t=-.015*e.x,n=-.015*e.y;A.to([a,s],{x:(e,a)=>a===s?-1*t:t,y:(e,t)=>t===s?-1*n:n,duration:.2})})((i=n.x,l=n.y,d=e.x,o=e.y,{x:i-d-(m=r).x,y:l-o-m.y}))}),100),{passive:!0})})(),C.create({id:e,trigger:t,start:()=>"top 40%",end:()=>"bottom 40%",toggleClass:"is-active"}),_((()=>{var t;null==(t=C.getById(e))||t.kill()}))}var Q=f({props:{text:{type:String,required:!0},bgImage:{type:String,required:!0},setImgElm:{type:Function,required:!0}},setup(e){const t=L();return O((()=>{t.value&&e.setImgElm(t.value)})),{imgElm:t}}});const U=b();k("data-v-7c912e96");const Z={class:"card-body min-h-52 relative grid 1.5xl:min-h-72"},ee=h("span",{class:"\n        card-more\n        link link--underline link--uppercase link--bold\n        block\n        mt-14\n        self-end\n        text-sm\n        lg:hidden\n      "},[h("span",{class:"link__text"},"подробнее"),h("span",{class:"link__icon"},[h("svg",{class:"link__arrow",width:"12",height:"12"},[h("use",{"xlink:href":"#icon-arrow"})])])],-1);E();const te=U(((e,t,a,n,s,r)=>(w(),x("div",Z,[h("div",{ref:"imgElm",style:e.bgImage,class:"\n        card-img\n        absolute\n        -z-1\n        top-1/2\n        left-0\n        transform\n        -translate-y-1/2\n        w-5/4\n        h-4/2\n        bg-no-repeat\n      "},null,4),h("span",{innerHTML:e.text,class:"\n        card-text\n        max-w-3/5\n        inline-block\n        text-26px\n        font-thin\n        text-justify\n        uppercase\n        @md:text-2xl @md: @md: @md: @md: @md: @md: @md: @md: @md:leading-none\n        1.5xl:text-4xl 1.5xl:leading-none\n      "},null,8,["innerHTML"]),ee]))));Q.render=te,Q.__scopeId="data-v-7c912e96";var ae=f({components:{CardItemHeader:B,CardItemBody:Q},props:{id:{type:String,required:!0},title:{type:String,required:!0},kind:{type:String,required:!0},tags:{type:Array,required:!0},text:{type:String,required:!0},imgPath:{type:Object,required:!0},href:{type:String,required:!0}},setup(e){const t=L(),a=L(),n=L(),s=L(),{tags:r,imgPath:i,id:l}=S(e),d=I((()=>`#${r.value.join(" #")}`)),{cardImage:u}=function(e){const t=L(!1),a=o.isDesktop?e.large[0]:e.small[0];let n=o.isDesktop?e.large[1]:e.small[1];return n||(n=a),m(c.lossy,((e,a)=>{t.value=!!a})),{cardImage:I((()=>J(t?n:a)))}}(i.value);return O((()=>{t.value&&a.value&&n.value&&s.value&&K(l.value,t.value,a.value,n.value,s.value)})),{card:t,bgArrowsWrapper:a,bgArrows:n,formattedTags:d,cardImage:u,cardImgElm:s,setCardImgElm:e=>{s.value=e}}}});const ne=b();k("data-v-7e26c553");const se={ref:"card",class:"\n      card\n      lozad\n      relative\n      text-dark-grey\n      <md(:mx-$base-page-gap-negative\n      px-$base-page-gap)\n      md:px-30px md: md: md: md: md: md: md:py-25px md: md: md: md: md: md: md:h-full md: md: md: md: md: md: md:overflow-hidden\n    ","data-toggle-class":"is-visible"},re={ref:"bgArrowsWrapper",class:"absolute top-1/20 -left-1/20 w-6/5 h-6/5 -z-1 <lg:hidden"},ie={ref:"bgArrows",class:"bg-arrows"};E();const le=ne(((e,t,a,n,s,r)=>{const i=T("card-item-header"),l=T("card-item-body");return w(),x("div",se,[h("div",re,[h("div",ie,null,512)],512),h(i,{title:e.title,kind:e.kind,tags:e.formattedTags},null,8,["title","kind","tags"]),h(l,{text:e.text,bgImage:e.cardImage,"set-img-elm":e.setCardImgElm},null,8,["text","bgImage","set-img-elm"]),h("a",{href:e.href,class:"absolute top-0 left-0 w-full h-full","aria-label":"Подробнее."},null,8,["href"])],512)}));ae.render=le,ae.__scopeId="data-v-7e26c553";var de=f({components:{CardItem:ae},props:{cardsData:{type:Array,required:!0},setContentListElm:{type:Function,required:!0}},data:()=>({duration:.5,lazyLoad:q()}),methods:{enter(e,t){const{duration:a}=this,n=a;A.from(e,{y:50,alpha:0,duration:a,delay:n,onComplete(){t()}})},leave(e,t){const{duration:a}=this;A.to(e,{y:50,alpha:0,duration:a,onComplete(){t()}})}},mounted(){this.lazyLoad.observe(),this.$refs.list&&this.setContentListElm(this.$refs.list)},updated(){setTimeout((()=>{C.refresh(),this.lazyLoad.observe()}),1e3*this.duration),u()}});const oe=b();k("data-v-d41fdfe0");const me={ref:"list"};E();const ce=oe(((e,t,a,n,s,r)=>{const i=T("card-item");return w(),x("div",me,[h(P,{name:"works-cards-list",tag:"ul",class:"<md:block grid grid-cols-2 xl:grid-cols-3",onEnter:e.enter,onLeave:e.leave},{default:oe((()=>[(w(!0),x(D,null,j(e.cardsData,(e=>(w(),x("li",{key:e.id,class:"list-item"},[h(i,{id:`${e.id}`,title:e.title,kind:e.kind,tags:e.tags,text:e.text,imgPath:e.imgs,href:e.href},null,8,["id","title","kind","tags","text","imgPath","href"])])))),128))])),_:1},8,["onEnter","onLeave"])],512)}));de.render=ce,de.__scopeId="data-v-d41fdfe0";var ue,pe;function ge(e){const t=L([]),a=I((()=>{let a;a=e.value===ue.ALL?t.value:t.value.filter((t=>0!==t.types.filter((t=>t===e.value)).length)).map((t=>((e,t)=>{var a;const n=null==(a=e.marketing)?void 0:a[t];return n?d(l({},e),{text:n}):l({},e)})(t,e.value)));const n=Date.now();return a=a.map((e=>d(l({},e),{id:(e.id+n)*M(!0)}))),a}));return O((async()=>{const e=await(async()=>await $.get("/api/works/main"))();console.log("🚀 ~ file: useWorksCards.ts ~ line 11 ~ getWorksCards ~ cards",e),await t.value.push(...e)})),{worksCardsFiltered:a}}(pe=ue||(ue={})).ALL="все",pe.DEVELOPMENT="разработка",pe.DESIGN="дизайн",pe.CONTEXT="контекст",pe.SMM="smm";var ve=f({components:{FilterElm:z,CardList:de},setup(){const e=L(),{activeFilter:t,setActiveFilter:a,filterItems:n}=function(){const e=L(ue.ALL),t=[{value:ue.ALL,name:ue.ALL,checked:!0},{value:ue.DEVELOPMENT,name:ue.DEVELOPMENT,checked:!1},{value:ue.DESIGN,name:ue.DESIGN,checked:!1},{value:ue.CONTEXT,name:ue.CONTEXT,checked:!1},{value:ue.SMM,name:ue.SMM,checked:!1}];return{activeFilter:e,setActiveFilter:t=>{e.value=t},filterItems:t}}();console.log("🚀 ~ file: App.vue ~ line 27 ~ setup ~ filterItems",n),console.log("🚀 ~ file: App.vue ~ line 27 ~ setup ~ activeFilter",t);const{worksCardsFiltered:s}=ge(t);return console.log("🚀 ~ file: App.vue ~ line 32 ~ setup ~ worksCardsFiltered",s),{contentListElm:e,setContentListElm:t=>{e.value=t},worksCardsFiltered:s,activeFilter:t,setActiveFilter:a,filterItems:n}},methods:{setActiveFilter(e){this.activeFilter=e}}});const fe=b();k("data-v-35c8eb5c");const xe={class:"works"};E();const he=fe(((e,t,a,n,s,r)=>{const i=T("filter-elm"),l=T("card-list");return w(),x("div",xe,[h(i,{"filter-items":e.filterItems,"set-active-filter":e.setActiveFilter,contentList:e.contentListElm},null,8,["filter-items","set-active-filter","contentList"]),h(l,{"cards-data":e.worksCardsFiltered,"set-content-list-elm":e.setContentListElm},null,8,["cards-data","set-content-list-elm"])])}));ve.render=he,ve.__scopeId="data-v-35c8eb5c";p(),N(ve).mount("#app"),V(),o.isDesktop?g((()=>import("./index.b3328a94.js")),["/assets/index.b3328a94.js","/assets/index.c8c98333.css","/assets/utils.5f3990ab.js","/assets/submitForm.555a8b8a.js","/assets/vendor.5e96a560.js","/assets/validation.3bd2158a.js","/assets/root.314d2a99.js","/assets/root.b4a3362f.css"]):function(){const e=document.querySelector(".footer-redirect");e&&g((()=>import("./redirectFooter.20852222.js")),["/assets/redirectFooter.20852222.js","/assets/vendor.5e96a560.js"]).then((({default:t})=>{const a=new t(e);v((()=>a.initMobile()),(()=>{}))}))}();
