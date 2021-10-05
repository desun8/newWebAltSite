var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,o=(e,t)=>{for(var l in t||(t={}))n.call(t,l)&&i(e,l,t[l]);if(a)for(var l of a(t))s.call(t,l)&&i(e,l,t[l]);return e};import{s as r,D as d,H as c,C as u,L as m,v as g,i as p,j as f,r as v,w as h,p as x,m as I,n as b,o as y,J as k,t as w,g as E,q as _,N as T,T as L,F as S,u as F,x as D,y as O,O as q,Q as V,R as j,E as M,V as P,X as A,A as C}from"./vendor.43b1651c.js";import{d as z,e as H,A as N,_ as $,m as G,l as X,S as B}from"./root.e6f9b4ee.js";import{_ as R}from"./Filter.83cde251.js";class J{static async get(e,t={method:"GET"}){try{const l=await fetch(e,t);if(!l.ok)throw new Error(`Ошибка HTTP: ${l.status}`);const a=await l.json();return console.log("🚀 ~ file: Https.ts ~ line 11 ~ Https ~ get ~ data",a),await a.results}catch(l){console.error(l)}}}const Q=(e,t)=>{t?z(t):r.exports.disablePageScroll(e)},W=(e,t)=>{t?H(t):r.exports.enablePageScroll(e)};var K=g({props:{id:{type:String,required:!0}},setup:()=>o({},function(){const e=d(),t=d();return m("dialogElm",e),c((()=>{e.value&&(t.value=new u(e.value),t.value.on("show",(()=>{Q(e.value,N.scrollbar)})),t.value.on("hide",(()=>{W(e.value,N.scrollbar)})))})),{dialogElm:e,dialog:t,openDialog:()=>{var e;null==(e=t.value)||e.show()},closeDialog:()=>{var e;null==(e=t.value)||e.hide()}}}())});const U=h();x("data-v-2057787a");const Y=f("div",{class:"dialog-overlay","data-a11y-dialog-hide":""},null,-1),Z={class:"dialog-content",role:"document"},ee=f("div",{class:"dialog-close"},[f("button",{class:"page-menu__close",type:"button","aria-label":"Закрыть диалог.","data-a11y-dialog-hide":""},[f("span",{class:"icon-cross"}),I("close ")])],-1),te=f("h2",{id:"dialog-works-title",class:"sr-only"},"Все работы.",-1);b();const le=U(((e,t,l,a,n,s)=>(y(),p("div",{ref:"dialogElm",id:e.id,class:"dialog-container works-dialog","aria-labelledby":"dialog-works-title","aria-hidden":"true"},[Y,f("div",Z,[ee,te,v(e.$slots,"default",{},void 0,!0)])],8,["id"]))));K.render=le,K.__scopeId="data-v-2057787a";var ae=g({props:{id:{type:String,required:!0},title:{type:String,required:!0},kind:{type:String,required:!0},tags:{type:Array,required:!0},text:{type:String,required:!0},imgPath:{type:String,required:!0},href:{type:String,required:!0},setItemInfo:{type:Function,required:!0}},setup(e){const t=d(),{kind:l,tags:a,imgPath:n,text:s,setItemInfo:i}=k(e),o=`#${a.value.join(" #")}`,r=()=>{i.value(l.value,o,s.value,n.value)};return c((()=>{t.value&&t.value.addEventListener("mouseenter",r,{passive:!0})})),{item:t,formatedTags:o}}});const ne=h();x("data-v-5994ca54");const se={class:"not-last:mb-5 lg:not-last:mb-9"},ie={ref:"item",class:"relative grid hover:text-sun"},oe={class:"\n          title\n          text-32px\n          leading-none\n          font-semibold\n          uppercase\n          transition-colors\n        "},re={class:"\n          mb-0.5\n          text-sun text-xs\n          leading-none\n          font-semibold\n          uppercase\n          lg:hidden\n        "},de={class:"text-xs leading-none opacity-50 lg:hidden"};b();const ce=ne(((e,t,l,a,n,s)=>(y(),p("li",se,[f("article",ie,[f("h3",oe,w(e.title),1),f("span",re,w(e.kind),1),f("span",de,w(e.formatedTags),1),f("a",{class:"absolute top-0 left-0 w-full h-full",href:e.href},null,8,["href"])],512)]))));ae.render=ce,ae.__scopeId="data-v-5994ca54";var ue=g({components:{ListItem:ae},props:{items:{type:Array,required:!0},setItemInfo:{type:Function,required:!0}},data:()=>({duration:.5}),methods:{enter(e,t){const{duration:l}=this,a=l;E.from(e,{y:50,alpha:0,duration:l,delay:a,onComplete(){t()}})},leave(e,t){const{duration:l}=this;E.to(e,{y:50,alpha:0,duration:l,onComplete(){t()}})}}});ue.render=function(e,t,l,a,n,s){const i=_("list-item");return y(),p(L,{name:"works-list",tag:"ul",class:"pb-5",onEnter:e.enter,onLeave:e.leave},{default:T((()=>[(y(!0),p(S,null,F(e.items,(t=>(y(),p(i,{key:t.id,id:`${t.id}`,title:t.title,kind:t.kind,tags:t.tags,text:t.text,imgPath:t.img,href:t.href,"set-item-info":e.setItemInfo},null,8,["id","title","kind","tags","text","imgPath","href","set-item-info"])))),128))])),_:1},8,["onEnter","onLeave"])};var me=g({props:{setInfoElm:{type:Function,required:!0},kind:{type:String,required:!0},tags:{type:String,required:!0},image:String,text:String},setup(e){const t=d();return c((()=>{t.value&&e.setInfoElm(t.value)})),{infoElm:t}}});const ge=h();x("data-v-0402a828");const pe={ref:"infoElm",class:"\n      <lg:hidden\n      grid\n      items-center\n      content-center\n      justify-center\n      h-screen\n      p-$base-page-gap\n    ","data-a11y-dialog-hide":""};b();const fe=ge(((e,t,l,a,n,s)=>(y(),p("div",pe,[D(f("img",{src:e.image,class:"max-h-70vh mb-3",alt:"",role:"presentation"},null,8,["src"]),[[O,e.image]]),f("span",{ref:"kind",class:"mb-1 text-2xl leading-none text-sun font-semibold uppercase"},w(e.kind),513),f("span",{ref:"tags",class:"text-xs"},w(e.tags),513),D(f("span",{innerHTML:e.text,class:"text"},null,8,["innerHTML"]),[[O,!e.image]])],512))));me.render=fe,me.__scopeId="data-v-0402a828";var ve=g({setup(){const e=d();return c((()=>{e.value&&new q(e.value,{autoHide:!1})})),{simplebar:e}}});const he=h();x("data-v-876fc152");const xe={ref:"simplebar",class:"simplebar"};b();const Ie=he(((e,t,l,a,n,s)=>(y(),p("div",xe,[v(e.$slots,"default",{},void 0,!0)],512))));ve.render=Ie,ve.__scopeId="data-v-876fc152";var be=g({setup(){const e=d(),t=V("dialogElm");return c((()=>{!N.isDesktop&&e.value&&$((()=>import("./redirectFooter.fcfd2b6b.js")),["/assets/redirectFooter.fcfd2b6b.js","/assets/vendor.43b1651c.js"]).then((({default:t})=>{const l=new t(e.value);G((()=>l.initMobile()),(()=>{}))}))})),{rootElm:e,goToTop:()=>{null==t||t.value.scrollTo(0,0)}}}});const ye={ref:"rootElm",class:"footer-redirect !py-24 lg:hidden"},ke=f("div",{class:"footer-redirect__wrap","aria-hidden":"true"},[f("div",{class:"footer-redirect__title"},[f("svg",{class:"footer-redirect__name-svg","fill-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.414","clip-rule":"evenodd",version:"1.1",viewBox:"0 0 258 39","xml:space":"preserve"},[f("defs",null,[f("linearGradient",{id:"vue-a"},[f("stop",{id:"anim-grad-color-active-top",offset:"0%","stop-color":"#ff5000"}),f("stop",{offset:"0%","stop-color":"#c4c4c4"})])]),f("path",{fill:"url(#vue-a)","fill-rule":"nonzero",d:"M251.31 38.5h-2.323V9.315h-5.809L250.148 0l6.97 9.315h-5.808V38.5zm-17.535 0h-2.434V9.315h-6.085L232.558 0l7.301 9.315h-6.084V38.5zm-88.625 0h-28.912V.8h28.912v7.8h-20.02v6.604h18.928v7.852H125.13v7.592h20.02V38.5zm14.765 0h-8.892V.8h14.508c2.427 0 4.68.173 6.76.52 2.115.347 3.935.988 5.46 1.924 1.526.901 2.722 2.149 3.588 3.744.867 1.595 1.3 3.623 1.3 6.084 0 2.496-.433 4.541-1.3 6.136a9.93 9.93 0 01-3.588 3.796c-1.525.901-3.345 1.543-5.46 1.924-2.08.347-4.333.52-6.76.52h-5.616V38.5zm-64.35 0H78.457V.8h16.432c2.08 0 3.987.139 5.72.416 1.768.277 3.293.78 4.576 1.508a7.873 7.873 0 013.016 3.016c.728 1.248 1.092 2.86 1.092 4.836 0 1.733-.381 3.259-1.144 4.576-.763 1.283-1.872 2.375-3.328 3.276 1.768.624 3.207 1.629 4.316 3.016 1.109 1.352 1.664 3.172 1.664 5.46 0 2.115-.364 3.917-1.092 5.408a9.432 9.432 0 01-3.12 3.588c-1.317.901-2.912 1.56-4.784 1.976-1.872.416-3.952.624-6.24.624zm-86.673 0H0V.8h8.892v14.404h15.496V.8h8.892v37.7h-8.892V23.056H8.892V38.5zm66.101 0h-9.672l-2.288-6.708h-14.56L46.237 38.5h-9.464L50.969.8h9.776l14.248 37.7zm116.439 0h-10.244l14.144-19.188L181.812.8h10.452l8.32 11.388L208.956.8h10.296L205.68 19.156 219.876 38.5h-10.452l-8.996-12.22-8.996 12.22zM87.349 31.012h8.32c1.907 0 3.328-.381 4.264-1.144.971-.763 1.456-1.803 1.456-3.12 0-1.317-.485-2.357-1.456-3.12-.936-.763-2.357-1.144-4.264-1.144h-8.32v8.528zm-36.432-6.448h9.724l-4.836-14.352-4.888 14.352zM159.915 8.288v9.672h5.876c1.04 0 2.011-.069 2.912-.208.902-.139 1.682-.381 2.34-.728.694-.381 1.231-.884 1.612-1.508.382-.624.572-1.439.572-2.444 0-.971-.19-1.768-.572-2.392a3.864 3.864 0 00-1.612-1.456c-.658-.381-1.438-.624-2.34-.728a19.132 19.132 0 00-2.912-.208h-5.876zM87.349 15.88h7.852c1.56 0 2.756-.347 3.588-1.04.832-.693 1.248-1.629 1.248-2.808 0-1.179-.416-2.097-1.248-2.756-.832-.659-2.028-.988-3.588-.988h-7.852v7.592z"})])])],-1);var we,Ee;be.render=function(e,t,l,a,n,s){return y(),p("div",ye,[f("a",{href:"#",class:"footer-redirect__link","aria-label":"Вернуться в начало страницы.",onClick:t[1]||(t[1]=j(((...t)=>e.goToTop&&e.goToTop(...t)),["prevent"]))}),ke],512)},(Ee=we||(we={})).ALL="все",Ee.DEVELOPMENT="разработка",Ee.DESIGN="дизайн",Ee.CONTEXT="контекст",Ee.SMM="smm";function _e(e){X("Start useItems works-dialog");const a=d([]),n=M((()=>{let n;console.log("computed all-works items"),e.value===we.ALL?(console.log("filter === all"),n=a.value):(console.log("filter !== all"),n=a.value.filter((t=>0!==t.types.filter((t=>t===e.value)).length)),console.log("🚀 ~ file: useItems.ts ~ line 39 ~ filteredItems=items.value.filter ~ filteredItems",n));const s=Date.now();return console.log("set random item id"),n=n.map((e=>{return a=o({},e),n={id:e.id+s},t(a,l(n));var a,n})),console.log("🚀 ~ file: useItems.ts ~ line 31 ~ filteredItems=filteredItems.map ~ filteredItems",n),X("End useItems works-dialog"),n})),s=M((()=>n.value.length));return c((async()=>{const e=await(async()=>await J.get("/api/works"))();console.log("🚀 ~ file: useItems.ts ~ line 14 ~ getWorksCards ~ cards",e),await a.value.push(...e)})),{itemsFiltered:n,total:s}}var Te=g({components:{FilterElement:R,Simplebar:ve,ListElement:ue,ListItemInfo:me,BtnToTop:be},props:{setTotal:{type:Function,required:!0}},setup(e){const{activeFilter:t,setActiveFilter:l,filterItems:a}=function(){const e=d(we.ALL),t=[{value:we.ALL,name:we.ALL,checked:!0},{value:we.DEVELOPMENT,name:we.DEVELOPMENT,checked:!1},{value:we.DESIGN,name:we.DESIGN,checked:!1},{value:we.CONTEXT,name:we.CONTEXT,checked:!1},{value:we.SMM,name:we.SMM,checked:!1}];return{activeFilter:e,setActiveFilter:t=>{e.value=t},filterItems:t}}();console.log("🚀 ~ file: DialogContent.vue ~ line 55 ~ setup ~ filterItems",a),console.log("🚀 ~ file: DialogContent.vue ~ line 55 ~ setup ~ activeFilter",t);const{itemsFiltered:n,total:s}=_e(t);console.log("🚀 ~ file: DialogContent.vue ~ line 61 ~ setup ~ total",s),console.log("🚀 ~ file: DialogContent.vue ~ line 61 ~ setup ~ itemsFiltered",n);const i=e.setTotal;P(s,(e=>{i(e)}));const{setInfoElm:o,itemInfo:r,setItemInfo:u}=function(){const e=d(),t=d({img:"",kind:"",tags:"",text:""});return{setInfoElm:t=>{e.value=t},itemInfo:t,setItemInfo:(l,a,n,s)=>{e.value&&(E.killTweensOf(e.value),E.timeline().to(e.value,{alpha:0,duration:.1,onComplete(){console.log("text",n),t.value={img:s,kind:l,tags:a,text:n}}}).to(e.value,{alpha:1,duration:.2,delay:.1}))}}}(),{listElm:m}=function(){const e=d(),t=d();return c((()=>{e.value&&(t.value=new B(e.value),t.value.init())})),{listElm:e}}();return{activeFilter:t,setActiveFilter:l,filterItems:a,itemsFiltered:n,total:s,setInfoElm:o,itemInfo:r,setItemInfo:u,listElm:m}}});const Le=h();x("data-v-1421e852");const Se={class:"lg:grid lg:grid-cols-2"},Fe={ref:"listElm",class:"list"};b();const De=Le(((e,t,l,a,n,s)=>{const i=_("list-item-info"),o=_("filter-element"),r=_("simplebar"),d=_("list-element"),c=_("btn-to-top");return y(),p("div",Se,[f(i,{kind:e.itemInfo.kind,tags:e.itemInfo.tags,image:e.itemInfo.img,text:e.itemInfo.text,"set-info-elm":e.setInfoElm},null,8,["kind","tags","image","text","set-info-elm"]),f("div",Fe,[f(r,null,{default:Le((()=>[f(o,{"filter-items":e.filterItems,"set-active-filter":e.setActiveFilter,"is-static":!0,"filter-name":"filter-dialog"},null,8,["filter-items","set-active-filter"])])),_:1}),f(d,{items:e.itemsFiltered,"set-item-info":e.setItemInfo},null,8,["items","set-item-info"])],512),f(c)])}));Te.render=De,Te.__scopeId="data-v-1421e852";var Oe=g({props:{dialogId:{type:String,required:!0},totalItems:{type:Number,required:!0}}});const qe={class:"link__text"},Ve=f("span",{class:"inline-block mb-2"},"все проекты",-1),je=f("br",null,null,-1),Me=f("span",{class:"\n        link__icon\n        opacity-10\n        !w-78px\n        !h-78px\n        !lg: !lg: !lg: !lg: !lg: !lg: !lg: !lg: !lg: !lg:ml-10\n        !xl:w-150px !xl: !xl: !xl: !xl: !xl: !xl: !xl: !xl: !xl:h-150px !xl: !xl: !xl: !xl: !xl: !xl: !xl: !xl: !xl:ml-14\n        !2xl:w-216px !2xl: !2xl: !2xl: !2xl: !2xl: !2xl: !2xl: !2xl: !2xl:h-216px\n      "},[f("svg",{class:"link__arrow !w-full !h-full",width:"12",height:"12","aria-hidden":"true"},[f("use",{"xlink:href":"#icon-arrow"})])],-1);Oe.render=function(e,t,l,a,n,s){return y(),p("button",{class:"\n      link link--btn\n      flex\n      justify-between\n      items-center\n      w-full\n      h-full\n      px-$base-page-gap\n      py-11\n      bg-sun\n      !text-black\n      text-1.5xl\n      leading-8\n      tracking-wide\n      font-semibold\n      text-left\n      uppercase\n      lg:justify-end lg: lg: lg: lg: lg: lg: lg:text-2xl lg:text-right\n      xl:text-32px xl: xl: xl: xl: xl: xl: xl:font-medium\n    ","aria-label":"Открыть модальное окно со всеми проектами.","data-a11y-dialog-show":e.dialogId},[f("span",qe,[Ve,je,f("span",{class:{"opacity-0":!e.totalItems}},w(`(${e.totalItems})`),3)]),Me],8,["data-a11y-dialog-show"])};var Pe=g({components:{DialogElement:K,DialogBtnOpen:Oe,DialogContent:Te},setup(){const e=d(0);return{total:e,setTotal:t=>{e.value=t},dialogId:"dialog-works"}}});Pe.render=function(e,t,l,a,n,s){const i=_("dialog-btn-open"),o=_("dialog-content"),r=_("dialog-element");return y(),p(S,null,[f(i,{"dialog-id":e.dialogId,"total-items":e.total},null,8,["dialog-id","total-items"]),(y(),p(A,{to:"body"},[f(r,{id:e.dialogId},{default:T((()=>[f(o,{"set-total":e.setTotal},null,8,["set-total"])])),_:1},8,["id"])]))],64)};const Ae=()=>{C(Pe).mount("#app-works-dialog")};export{J as H,Q as d,W as e,Ae as i};
