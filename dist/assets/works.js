var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,l=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&i(e,a,t[a]);if(n)for(var a of n(t))s.call(t,a)&&i(e,a,t[a]);return e},d=(e,n)=>t(e,a(n));import{A as o,c as m,F as c,p as u,i as p,_ as g,m as v}from"./root.js";import{n as f,e as x,f as h,i as y,w as b,p as k,k as E,o as L,y as w,z as I,C as _,a as C,g as A,t as F,B as O,D as S,l as T,E as q,F as D,m as j,T as P,G as M,x as N}from"./vendor.js";import{_ as z,a as $}from"./sprite.symbol.js";import{H as V,i as B}from"./index4.js";var G=f({props:{title:{type:String,required:!0},kind:{type:String,required:!0},tags:{type:String,required:!0}}});const H=b();k("data-v-2bf95322");const X={class:"\n      card-header\n      grid\n      content-start\n      mb-10\n      md:min-h-24\n      lg:min-h-28\n      1.5xl:min-h-36 1.5xl:mb-22\n    ",style:{"word-break":"break-word"}},R={class:"\n        card-title\n        mb-2.5\n        text-5xl\n        leading-9\n        font-semibold\n        uppercase\n        @md:text-4xl @md: @md: @md: @md: @md: @md: @md: @md: @md:leading-7\n        1.5xl:text-6xl 1.5xl:leading-45px 1.5xl:mb-3.5\n      "},W={class:"\n        card-kind\n        mb-1\n        text-sun text-sm\n        !leading-none\n        font-semibold\n        uppercase\n        1.5xl:text-xl\n      "},Y={class:"card-tags text-xs !leading-none opacity-50 1.5xl:text-sm"};E();const J=H(((e,t,a,n,r,s)=>(L(),x("div",X,[h("h2",R,y(e.title),1),h("span",W,y(e.kind),1),h("span",Y,y(e.tags),1)]))));G.render=J,G.__scopeId="data-v-2bf95322";const K=e=>`background-image: url(${e})`;function Q(e,t,a,n,r){(()=>{let e,s;const i=A.timeline({paused:!0}).to(n,{autoAlpha:1,duration:.5},"same").to(n,{x:300,y:-300,duration:100},"same");t.addEventListener("mouseenter",(()=>{e=t.getBoundingClientRect(),s={x:e.width/2,y:e.height/2},i.restart()}),{passive:!0}),t.addEventListener("mouseleave",(()=>{i.pause(),A.to(n,{autoAlpha:0,duration:.5})}),{passive:!0}),t.addEventListener("mousemove",F((t=>{const n=(e=>({x:e.clientX,y:e.clientY}))(t);var i,l,d,o,m;(e=>{const t=-.015*e.x,n=-.015*e.y;A.to([a,r],{x:(e,a)=>a===r?-1*t:t,y:(e,t)=>t===r?-1*n:n,duration:.2})})((i=n.x,l=n.y,d=e.x,o=e.y,{x:i-d-(m=s).x,y:l-o-m.y}))}),100),{passive:!0})})(),C.create({id:e,trigger:t,start:()=>"top 40%",end:()=>"bottom 40%",toggleClass:"is-active"}),_((()=>{var t;null==(t=C.getById(e))||t.kill()}))}var U=f({props:{text:{type:String,required:!0},bgImage:{type:String,required:!0},setImgElm:{type:Function,required:!0}},setup(e){const t=w();return O((()=>{t.value&&e.setImgElm(t.value)})),{imgElm:t}}});const Z=b();k("data-v-2a025a77");const ee=z+"#icon-arrow",te={class:"card-body min-h-52 relative grid 1.5xl:min-h-72"},ae=h("span",{class:"\n        card-more\n        link link--underline link--uppercase link--bold\n        block\n        mt-14\n        self-end\n        text-sm\n        lg:hidden\n      "},[h("span",{class:"link__text"},"подробнее"),h("span",{class:"link__icon"},[h("svg",{class:"link__arrow",width:"12",height:"12"},[h("use",{"xlink:href":ee})])])],-1);E();const ne=Z(((e,t,a,n,r,s)=>(L(),x("div",te,[h("div",{ref:"imgElm",style:e.bgImage,class:"\n        card-img\n        absolute\n        -z-1\n        top-1/2\n        left-0\n        transform\n        -translate-y-1/2\n        w-5/4\n        h-4/2\n        bg-no-repeat\n      "},null,4),h("span",{innerHTML:e.text,class:"\n        card-text\n        max-w-3/5\n        inline-block\n        text-26px\n        font-thin\n        text-justify\n        uppercase\n        @md:text-2xl @md: @md: @md: @md: @md: @md: @md: @md: @md:leading-none\n        1.5xl:text-4xl 1.5xl:leading-none\n      "},null,8,["innerHTML"]),ae]))));U.render=ne,U.__scopeId="data-v-2a025a77";var re=f({components:{CardItemHeader:G,CardItemBody:U},props:{id:{type:String,required:!0},title:{type:String,required:!0},kind:{type:String,required:!0},tags:{type:Array,required:!0},text:{type:String,required:!0},imgPath:{type:Object,required:!0},href:{type:String,required:!0}},setup(e){const t=w(),a=w(),n=w(),r=w(),{tags:s,imgPath:i,id:l}=S(e),d=I((()=>`#${s.value.join(" #")}`)),{cardImage:u}=function(e){const t=w(!1),a=o.isDesktop?e.large[0]:e.small[0];let n=o.isDesktop?e.large[1]:e.small[1];return n||(n=a),m(c.lossy,((e,a)=>{t.value=!!a})),{cardImage:I((()=>K(t?n:a)))}}(i.value);return O((()=>{t.value&&a.value&&n.value&&r.value&&Q(l.value,t.value,a.value,n.value,r.value)})),{card:t,bgArrowsWrapper:a,bgArrows:n,formattedTags:d,cardImage:u,cardImgElm:r,setCardImgElm:e=>{r.value=e}}}});const se=b();k("data-v-7e26c553");const ie={ref:"card",class:"\n      card\n      lozad\n      relative\n      text-dark-grey\n      <md(:mx-$base-page-gap-negative\n      px-$base-page-gap)\n      md:px-30px md: md: md: md: md: md: md:py-25px md: md: md: md: md: md: md:h-full md: md: md: md: md: md: md:overflow-hidden\n    ","data-toggle-class":"is-visible"},le={ref:"bgArrowsWrapper",class:"absolute top-1/20 -left-1/20 w-6/5 h-6/5 -z-1 <lg:hidden"},de={ref:"bgArrows",class:"bg-arrows"};E();const oe=se(((e,t,a,n,r,s)=>{const i=T("card-item-header"),l=T("card-item-body");return L(),x("div",ie,[h("div",le,[h("div",de,null,512)],512),h(i,{title:e.title,kind:e.kind,tags:e.formattedTags},null,8,["title","kind","tags"]),h(l,{text:e.text,bgImage:e.cardImage,"set-img-elm":e.setCardImgElm},null,8,["text","bgImage","set-img-elm"]),h("a",{href:e.href,class:"absolute top-0 left-0 w-full h-full","aria-label":"Подробнее."},null,8,["href"])],512)}));re.render=oe,re.__scopeId="data-v-7e26c553";var me=f({components:{CardItem:re},props:{cardsData:{type:Array,required:!0},setContentListElm:{type:Function,required:!0}},data:()=>({duration:.5,lazyLoad:q()}),methods:{enter(e,t){const{duration:a}=this,n=a;A.from(e,{y:50,alpha:0,duration:a,delay:n,onComplete(){t()}})},leave(e,t){const{duration:a}=this;A.to(e,{y:50,alpha:0,duration:a,onComplete(){t()}})}},mounted(){this.lazyLoad.observe(),this.$refs.list&&this.setContentListElm(this.$refs.list)},updated(){setTimeout((()=>{C.refresh(),this.lazyLoad.observe()}),1e3*this.duration),u()}});const ce=b();k("data-v-d41fdfe0");const ue={ref:"list"};E();const pe=ce(((e,t,a,n,r,s)=>{const i=T("card-item");return L(),x("div",ue,[h(P,{name:"works-cards-list",tag:"ul",class:"<md:block grid grid-cols-2 xl:grid-cols-3",onEnter:e.enter,onLeave:e.leave},{default:ce((()=>[(L(!0),x(D,null,j(e.cardsData,(e=>(L(),x("li",{key:e.id,class:"list-item"},[h(i,{id:`${e.id}`,title:e.title,kind:e.kind,tags:e.tags,text:e.text,imgPath:e.imgs,href:e.href},null,8,["id","title","kind","tags","text","imgPath","href"])])))),128))])),_:1},8,["onEnter","onLeave"])],512)}));me.render=pe,me.__scopeId="data-v-d41fdfe0";var ge,ve;function fe(e){const t=w([]),a=I((()=>{let a;a=e.value===ge.ALL?t.value:t.value.filter((t=>0!==t.types.filter((t=>t===e.value)).length)).map((t=>((e,t)=>{var a;const n=null==(a=e.marketing)?void 0:a[t];return n?d(l({},e),{text:n}):l({},e)})(t,e.value)));const n=Date.now();return a=a.map((e=>d(l({},e),{id:(e.id+n)*M(!0)}))),a}));return O((async()=>{const e=await(async()=>await V.get("/api/works/main"))();await t.value.push(...e)})),{worksCardsFiltered:a}}(ve=ge||(ge={})).ALL="все",ve.DEVELOPMENT="разработка",ve.DESIGN="дизайн",ve.CONTEXT="контекст",ve.SMM="smm";var xe=f({components:{FilterElm:$,CardList:me},setup(){const e=w(),{activeFilter:t,setActiveFilter:a,filterItems:n}=function(){const e=w(ge.ALL),t=[{value:ge.ALL,name:ge.ALL,checked:!0},{value:ge.DEVELOPMENT,name:ge.DEVELOPMENT,checked:!1},{value:ge.DESIGN,name:ge.DESIGN,checked:!1},{value:ge.CONTEXT,name:ge.CONTEXT,checked:!1},{value:ge.SMM,name:ge.SMM,checked:!1}];return{activeFilter:e,setActiveFilter:t=>{e.value=t},filterItems:t}}(),{worksCardsFiltered:r}=fe(t);return{contentListElm:e,setContentListElm:t=>{e.value=t},worksCardsFiltered:r,activeFilter:t,setActiveFilter:a,filterItems:n}},methods:{setActiveFilter(e){this.activeFilter=e}}});const he=b();k("data-v-59b08fa6");const ye={class:"works"};E();const be=he(((e,t,a,n,r,s)=>{const i=T("filter-elm"),l=T("card-list");return L(),x("div",ye,[h(i,{"filter-items":e.filterItems,"set-active-filter":e.setActiveFilter,contentList:e.contentListElm},null,8,["filter-items","set-active-filter","contentList"]),h(l,{"cards-data":e.worksCardsFiltered,"set-content-list-elm":e.setContentListElm},null,8,["cards-data","set-content-list-elm"])])}));xe.render=be,xe.__scopeId="data-v-59b08fa6";p(),N(xe).mount("#app"),B(),o.isDesktop?g((()=>import("./index5.js")),["/assets/index5.js","/assets/index2.css","/assets/utils.js","/assets/submitForm.js","/assets/vendor.js","/assets/validation.js","/assets/root.js","/assets/root.css"]):function(){const e=document.querySelector(".footer-redirect");e&&g((()=>import("./redirectFooter.js")),["/assets/redirectFooter.js","/assets/vendor.js"]).then((({default:t})=>{const a=new t(e);v((()=>a.initMobile()),(()=>{}))}))}();
