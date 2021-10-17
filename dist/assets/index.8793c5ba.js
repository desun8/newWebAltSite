var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,i=(e,t)=>{for(var l in t||(t={}))n.call(t,l)&&o(e,l,t[l]);if(a)for(var l of a(t))s.call(t,l)&&o(e,l,t[l]);return e};import{y as r,C as d,A as c,H as u,n as m,e as g,f as p,r as f,w as v,p as h,j as x,k as I,o as y,D as b,i as k,g as w,l as E,J as _,T,F as L,m as S,q as F,v as D,K as O,L as j,M as q,z as M,N as V,O as z,x as A}from"./vendor.14e0bc55.js";import{A as C,_ as P,m as H,l as N,S as $}from"./root.77d8b0d3.js";import{d as G,e as B}from"./scrollLock.2cdee8ed.js";import{_ as X}from"./Filter.78d37ac0.js";class J{static async get(e,t={method:"GET"}){try{const l=await fetch(e,t);if(!l.ok)throw new Error(`Ошибка HTTP: ${l.status}`);const a=await l.json();return console.log("🚀 ~ file: Https.ts ~ line 11 ~ Https ~ get ~ data",a),await a.results}catch(l){console.error(l)}}}var K=m({props:{id:{type:String,required:!0}},setup:()=>i({},function(){const e=r(),t=r();return u("dialogElm",e),d((()=>{e.value&&(t.value=new c(e.value),t.value.on("show",(()=>{G(e.value,C.scrollbar)})),t.value.on("hide",(()=>{B(e.value,C.scrollbar)})))})),{dialogElm:e,dialog:t,openDialog:()=>{var e;null==(e=t.value)||e.show()},closeDialog:()=>{var e;null==(e=t.value)||e.hide()}}}())});const R=v();h("data-v-2057787a");const W=p("div",{class:"dialog-overlay","data-a11y-dialog-hide":""},null,-1),Q={class:"dialog-content",role:"document"},U=p("div",{class:"dialog-close"},[p("button",{class:"page-menu__close",type:"button","aria-label":"Закрыть диалог.","data-a11y-dialog-hide":""},[p("span",{class:"icon-cross"}),x("close ")])],-1),Y=p("h2",{id:"dialog-works-title",class:"sr-only"},"Все работы.",-1);I();const Z=R(((e,t,l,a,n,s)=>(y(),g("div",{ref:"dialogElm",id:e.id,class:"dialog-container works-dialog","aria-labelledby":"dialog-works-title","aria-hidden":"true"},[W,p("div",Q,[U,Y,f(e.$slots,"default",{},void 0,!0)])],8,["id"]))));K.render=Z,K.__scopeId="data-v-2057787a";var ee=m({props:{id:{type:String,required:!0},title:{type:String,required:!0},kind:{type:String,required:!0},tags:{type:Array,required:!0},text:{type:String,required:!0},imgPath:{type:String,required:!0},href:{type:String,required:!0},setItemInfo:{type:Function,required:!0}},setup(e){const t=r(),{kind:l,tags:a,imgPath:n,text:s,setItemInfo:o}=b(e),i=`#${a.value.join(" #")}`,c=()=>{o.value(l.value,i,s.value,n.value)};return d((()=>{t.value&&t.value.addEventListener("mouseenter",c,{passive:!0})})),{item:t,formatedTags:i}}});const te=v();h("data-v-5994ca54");const le={class:"not-last:mb-5 lg:not-last:mb-9"},ae={ref:"item",class:"relative grid hover:text-sun"},ne={class:"\n          title\n          text-32px\n          leading-none\n          font-semibold\n          uppercase\n          transition-colors\n        "},se={class:"\n          mb-0.5\n          text-sun text-xs\n          leading-none\n          font-semibold\n          uppercase\n          lg:hidden\n        "},oe={class:"text-xs leading-none opacity-50 lg:hidden"};I();const ie=te(((e,t,l,a,n,s)=>(y(),g("li",le,[p("article",ae,[p("h3",ne,k(e.title),1),p("span",se,k(e.kind),1),p("span",oe,k(e.formatedTags),1),p("a",{class:"absolute top-0 left-0 w-full h-full",href:e.href},null,8,["href"])],512)]))));ee.render=ie,ee.__scopeId="data-v-5994ca54";var re=m({components:{ListItem:ee},props:{items:{type:Array,required:!0},setItemInfo:{type:Function,required:!0}},data:()=>({duration:.5}),methods:{enter(e,t){const{duration:l}=this,a=l;w.from(e,{y:50,alpha:0,duration:l,delay:a,onComplete(){t()}})},leave(e,t){const{duration:l}=this;w.to(e,{y:50,alpha:0,duration:l,onComplete(){t()}})}}});re.render=function(e,t,l,a,n,s){const o=E("list-item");return y(),g(T,{name:"works-list",tag:"ul",class:"pb-5",onEnter:e.enter,onLeave:e.leave},{default:_((()=>[(y(!0),g(L,null,S(e.items,(t=>(y(),g(o,{key:t.id,id:`${t.id}`,title:t.title,kind:t.kind,tags:t.tags,text:t.text,imgPath:t.img,href:t.href,"set-item-info":e.setItemInfo},null,8,["id","title","kind","tags","text","imgPath","href","set-item-info"])))),128))])),_:1},8,["onEnter","onLeave"])};var de=m({props:{setInfoElm:{type:Function,required:!0},kind:{type:String,required:!0},tags:{type:String,required:!0},image:String,text:String},setup(e){const t=r();return d((()=>{t.value&&e.setInfoElm(t.value)})),{infoElm:t}}});const ce=v();h("data-v-0402a828");const ue={ref:"infoElm",class:"\n      <lg:hidden\n      grid\n      items-center\n      content-center\n      justify-center\n      h-screen\n      p-$base-page-gap\n    ","data-a11y-dialog-hide":""};I();const me=ce(((e,t,l,a,n,s)=>(y(),g("div",ue,[F(p("img",{src:e.image,class:"max-h-70vh mb-3",alt:"",role:"presentation"},null,8,["src"]),[[D,e.image]]),p("span",{ref:"kind",class:"mb-1 text-2xl leading-none text-sun font-semibold uppercase"},k(e.kind),513),p("span",{ref:"tags",class:"text-xs"},k(e.tags),513),F(p("span",{innerHTML:e.text,class:"text"},null,8,["innerHTML"]),[[D,!e.image]])],512))));de.render=me,de.__scopeId="data-v-0402a828";var ge=m({setup(){const e=r();return d((()=>{e.value&&new O(e.value,{autoHide:!1})})),{simplebar:e}}});const pe=v();h("data-v-876fc152");const fe={ref:"simplebar",class:"simplebar"};I();const ve=pe(((e,t,l,a,n,s)=>(y(),g("div",fe,[f(e.$slots,"default",{},void 0,!0)],512))));ge.render=ve,ge.__scopeId="data-v-876fc152";var he=m({setup(){const e=r(),t=j("dialogElm");return d((()=>{!C.isDesktop&&e.value&&P((()=>import("./redirectFooter.136fbb47.js")),["/assets/redirectFooter.136fbb47.js","/assets/vendor.14e0bc55.js"]).then((({default:t})=>{const l=new t(e.value);H((()=>l.initMobile()),(()=>{}))}))})),{rootElm:e,goToTop:()=>{null==t||t.value.scrollTo(0,0)}}}});const xe={ref:"rootElm",class:"footer-redirect !py-24 lg:hidden"},Ie=p("div",{class:"footer-redirect__wrap","aria-hidden":"true"},[p("div",{class:"footer-redirect__title"},[p("svg",{class:"footer-redirect__name-svg","fill-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.414","clip-rule":"evenodd",version:"1.1",viewBox:"0 0 258 39","xml:space":"preserve"},[p("defs",null,[p("linearGradient",{id:"vue-a"},[p("stop",{id:"anim-grad-color-active-top",offset:"0%","stop-color":"#ff5000"}),p("stop",{offset:"0%","stop-color":"#c4c4c4"})])]),p("path",{fill:"url(#vue-a)","fill-rule":"nonzero",d:"M251.31 38.5h-2.323V9.315h-5.809L250.148 0l6.97 9.315h-5.808V38.5zm-17.535 0h-2.434V9.315h-6.085L232.558 0l7.301 9.315h-6.084V38.5zm-88.625 0h-28.912V.8h28.912v7.8h-20.02v6.604h18.928v7.852H125.13v7.592h20.02V38.5zm14.765 0h-8.892V.8h14.508c2.427 0 4.68.173 6.76.52 2.115.347 3.935.988 5.46 1.924 1.526.901 2.722 2.149 3.588 3.744.867 1.595 1.3 3.623 1.3 6.084 0 2.496-.433 4.541-1.3 6.136a9.93 9.93 0 01-3.588 3.796c-1.525.901-3.345 1.543-5.46 1.924-2.08.347-4.333.52-6.76.52h-5.616V38.5zm-64.35 0H78.457V.8h16.432c2.08 0 3.987.139 5.72.416 1.768.277 3.293.78 4.576 1.508a7.873 7.873 0 013.016 3.016c.728 1.248 1.092 2.86 1.092 4.836 0 1.733-.381 3.259-1.144 4.576-.763 1.283-1.872 2.375-3.328 3.276 1.768.624 3.207 1.629 4.316 3.016 1.109 1.352 1.664 3.172 1.664 5.46 0 2.115-.364 3.917-1.092 5.408a9.432 9.432 0 01-3.12 3.588c-1.317.901-2.912 1.56-4.784 1.976-1.872.416-3.952.624-6.24.624zm-86.673 0H0V.8h8.892v14.404h15.496V.8h8.892v37.7h-8.892V23.056H8.892V38.5zm66.101 0h-9.672l-2.288-6.708h-14.56L46.237 38.5h-9.464L50.969.8h9.776l14.248 37.7zm116.439 0h-10.244l14.144-19.188L181.812.8h10.452l8.32 11.388L208.956.8h10.296L205.68 19.156 219.876 38.5h-10.452l-8.996-12.22-8.996 12.22zM87.349 31.012h8.32c1.907 0 3.328-.381 4.264-1.144.971-.763 1.456-1.803 1.456-3.12 0-1.317-.485-2.357-1.456-3.12-.936-.763-2.357-1.144-4.264-1.144h-8.32v8.528zm-36.432-6.448h9.724l-4.836-14.352-4.888 14.352zM159.915 8.288v9.672h5.876c1.04 0 2.011-.069 2.912-.208.902-.139 1.682-.381 2.34-.728.694-.381 1.231-.884 1.612-1.508.382-.624.572-1.439.572-2.444 0-.971-.19-1.768-.572-2.392a3.864 3.864 0 00-1.612-1.456c-.658-.381-1.438-.624-2.34-.728a19.132 19.132 0 00-2.912-.208h-5.876zM87.349 15.88h7.852c1.56 0 2.756-.347 3.588-1.04.832-.693 1.248-1.629 1.248-2.808 0-1.179-.416-2.097-1.248-2.756-.832-.659-2.028-.988-3.588-.988h-7.852v7.592z"})])])],-1);var ye,be;he.render=function(e,t,l,a,n,s){return y(),g("div",xe,[p("a",{href:"#",class:"footer-redirect__link","aria-label":"Вернуться в начало страницы.",onClick:t[1]||(t[1]=q(((...t)=>e.goToTop&&e.goToTop(...t)),["prevent"]))}),Ie],512)},(be=ye||(ye={})).ALL="все",be.DEVELOPMENT="разработка",be.DESIGN="дизайн",be.CONTEXT="контекст",be.SMM="smm";function ke(e){N("Start useItems works-dialog");const a=r([]),n=M((()=>{let n;console.log("computed all-works items"),e.value===ye.ALL?(console.log("filter === all"),n=a.value):(console.log("filter !== all"),n=a.value.filter((t=>0!==t.types.filter((t=>t===e.value)).length)),console.log("🚀 ~ file: useItems.ts ~ line 39 ~ filteredItems=items.value.filter ~ filteredItems",n));const s=Date.now();return console.log("set random item id"),n=n.map((e=>{return a=i({},e),n={id:e.id+s},t(a,l(n));var a,n})),console.log("🚀 ~ file: useItems.ts ~ line 31 ~ filteredItems=filteredItems.map ~ filteredItems",n),N("End useItems works-dialog"),n})),s=M((()=>n.value.length));return d((async()=>{const e=await(async()=>await J.get("/api/works"))();console.log("🚀 ~ file: useItems.ts ~ line 14 ~ getWorksCards ~ cards",e),await a.value.push(...e)})),{itemsFiltered:n,total:s}}var we=m({components:{FilterElement:X,Simplebar:ge,ListElement:re,ListItemInfo:de,BtnToTop:he},props:{setTotal:{type:Function,required:!0}},setup(e){const{activeFilter:t,setActiveFilter:l,filterItems:a}=function(){const e=r(ye.ALL),t=[{value:ye.ALL,name:ye.ALL,checked:!0},{value:ye.DEVELOPMENT,name:ye.DEVELOPMENT,checked:!1},{value:ye.DESIGN,name:ye.DESIGN,checked:!1},{value:ye.CONTEXT,name:ye.CONTEXT,checked:!1},{value:ye.SMM,name:ye.SMM,checked:!1}];return{activeFilter:e,setActiveFilter:t=>{e.value=t},filterItems:t}}();console.log("🚀 ~ file: DialogContent.vue ~ line 55 ~ setup ~ filterItems",a),console.log("🚀 ~ file: DialogContent.vue ~ line 55 ~ setup ~ activeFilter",t);const{itemsFiltered:n,total:s}=ke(t);console.log("🚀 ~ file: DialogContent.vue ~ line 61 ~ setup ~ total",s),console.log("🚀 ~ file: DialogContent.vue ~ line 61 ~ setup ~ itemsFiltered",n);const o=e.setTotal;V(s,(e=>{o(e)}));const{setInfoElm:i,itemInfo:c,setItemInfo:u}=function(){const e=r(),t=r({img:"",kind:"",tags:"",text:""});return{setInfoElm:t=>{e.value=t},itemInfo:t,setItemInfo:(l,a,n,s)=>{e.value&&(w.killTweensOf(e.value),w.timeline().to(e.value,{alpha:0,duration:.1,onComplete(){console.log("text",n),t.value={img:s,kind:l,tags:a,text:n}}}).to(e.value,{alpha:1,duration:.2,delay:.1}))}}}(),{listElm:m}=function(){const e=r(),t=r();return d((()=>{e.value&&(t.value=new $(e.value),t.value.init())})),{listElm:e}}();return{activeFilter:t,setActiveFilter:l,filterItems:a,itemsFiltered:n,total:s,setInfoElm:i,itemInfo:c,setItemInfo:u,listElm:m}}});const Ee=v();h("data-v-1421e852");const _e={class:"lg:grid lg:grid-cols-2"},Te={ref:"listElm",class:"list"};I();const Le=Ee(((e,t,l,a,n,s)=>{const o=E("list-item-info"),i=E("filter-element"),r=E("simplebar"),d=E("list-element"),c=E("btn-to-top");return y(),g("div",_e,[p(o,{kind:e.itemInfo.kind,tags:e.itemInfo.tags,image:e.itemInfo.img,text:e.itemInfo.text,"set-info-elm":e.setInfoElm},null,8,["kind","tags","image","text","set-info-elm"]),p("div",Te,[p(r,null,{default:Ee((()=>[p(i,{"filter-items":e.filterItems,"set-active-filter":e.setActiveFilter,"is-static":!0,"filter-name":"filter-dialog"},null,8,["filter-items","set-active-filter"])])),_:1}),p(d,{items:e.itemsFiltered,"set-item-info":e.setItemInfo},null,8,["items","set-item-info"])],512),p(c)])}));we.render=Le,we.__scopeId="data-v-1421e852";var Se=m({props:{dialogId:{type:String,required:!0},totalItems:{type:Number,required:!0}}});const Fe=v();h("data-v-fa184ae6");const De={class:"link__text"},Oe=p("span",{class:"inline-block mb-2"},"все проекты",-1),je=p("br",null,null,-1),qe=p("span",{class:"\n        link__icon\n        opacity-10\n        !w-78px\n        !h-78px\n        !lg: !lg: !lg: !lg: !lg: !lg: !lg: !lg: !lg: !lg:ml-10\n        !xl:w-150px !xl: !xl: !xl: !xl: !xl: !xl: !xl: !xl: !xl:h-150px !xl: !xl: !xl: !xl: !xl: !xl: !xl: !xl: !xl:ml-14\n        !2xl:w-216px !2xl: !2xl: !2xl: !2xl: !2xl: !2xl: !2xl: !2xl: !2xl:h-216px\n      "},[p("svg",{class:"link__arrow !w-full !h-full",width:"12",height:"12","aria-hidden":"true"},[p("use",{"xlink:href":"#icon-arrow"})])],-1);I();const Me=Fe(((e,t,l,a,n,s)=>(y(),g("button",{class:"\n      link link--btn\n      flex\n      justify-between\n      items-center\n      w-full\n      h-full\n      px-$base-page-gap\n      py-11\n      bg-sun\n      !text-black\n      text-1.5xl\n      leading-8\n      tracking-wide\n      font-semibold\n      text-left\n      uppercase\n      lg:justify-end lg: lg: lg: lg: lg: lg: lg:text-2xl lg:text-right\n      xl:text-32px xl: xl: xl: xl: xl: xl: xl:font-medium\n    ","aria-label":"Открыть модальное окно со всеми проектами.","data-a11y-dialog-show":e.dialogId},[p("span",De,[Oe,je,p("span",{class:{"opacity-0":!e.totalItems}},k(`(${e.totalItems})`),3)]),qe],8,["data-a11y-dialog-show"]))));Se.render=Me,Se.__scopeId="data-v-fa184ae6";var Ve=m({components:{DialogElement:K,DialogBtnOpen:Se,DialogContent:we},setup(){const e=r(0);return{total:e,setTotal:t=>{e.value=t},dialogId:"dialog-works"}}});Ve.render=function(e,t,l,a,n,s){const o=E("dialog-btn-open"),i=E("dialog-content"),r=E("dialog-element");return y(),g(L,null,[p(o,{"dialog-id":e.dialogId,"total-items":e.total},null,8,["dialog-id","total-items"]),(y(),g(z,{to:"body"},[p(r,{id:e.dialogId},{default:_((()=>[p(i,{"set-total":e.setTotal},null,8,["set-total"])])),_:1},8,["id"])]))],64)};const ze=()=>{A(Ve).mount("#app-works-dialog")};export{J as H,ze as i};
