import{o as e,e as t,f as l,i,y as n,t as a,a as r,g as o,n as s,z as u,B as c,l as d,h as v,F as p,m as h}from"./vendor.js";import{l as f,r as m,A as g}from"./root.js";const y={name:"FilterItem",props:{value:{type:String,required:!0},text:{type:String,required:!0},name:{type:String,required:!0},checked:{type:Boolean,required:!0},handleChange:{type:Function,required:!0}},computed:{id:function(){return`filter-id-${this.value}-${Date.now()*Math.random()}`}},methods:{onChange(e){const{currentTarget:t}=e;t.checked&&(console.log(t.value,t.checked),this.handleChange(t.value))}}},k={class:"filter__radio-wrapper"};function b(e,t){const l=n({widthShrink:0,widthExpand:0,posLeft:0,duration:.3}),i=n(!1),s=n(!1),u=n(),c=(t=!1)=>{e.value&&(0===l.value.widthExpand||t)&&(l.value.widthExpand=e.value.offsetWidth+10)},d=(e=!1)=>{t.value&&(e?o.set(t.value,{width:l.value.widthExpand}):(o.set(t.value,{clearProps:"width"}),setTimeout((()=>{c(),o.timeline().set(t.value,{width:l.value.widthExpand}).to(t.value,{background:"#131313",duration:l.value.duration})}),100)))},v=()=>{t.value&&(o.to(t.value,{background:"transparent",duration:l.value.duration}),i.value&&setTimeout((()=>{t.value&&0===l.value.widthShrink&&(l.value.widthShrink=+getComputedStyle(t.value).getPropertyValue("--width-shrink")),o.set(t.value,{width:l.value.widthShrink})}),500))},p=(e=!1)=>{t.value&&(e?o.set(t.value,{x:l.value.posLeft}):o.to(t.value,{x:l.value.posLeft,duration:l.value.duration}))},h=a((()=>{console.log("click btn"),s.value=!s.value,s.value?d():v()}),600);return{root:e,pinContainer:t,btnToggle:u,isActive:s,isPinned:i,scrollPin:()=>{t.value&&r.create({trigger:t.value,start:"top 90",end:99999,pin:!0,pinSpacing:!1,onToggle:({isActive:e})=>{if(e)i.value=!0,p(),v();else{let e=s.value;u.value&&u.value.blur(),i.value=!1,s.value=!1,((e=!0)=>{t.value&&o.to(t.value,{x:0,background:"transparent",duration:l.value.duration,onStart:()=>{e&&o.set(t.value,{clearProps:"width"})}})})(!e)}},onRefresh:({isActive:e})=>{t.value&&(l.value.posLeft=-1*t.value.getBoundingClientRect().left),e&&p(!0),s.value&&(c(!0),d(!0)),e&&!s.value&&v()}})},handleClickOutside:e=>{!e.target.closest("div.filter")&&(s.value=!1,v())},throttleClick:h}}y.render=function(n,a,r,o,s,u){return e(),t("div",k,[l("input",{onChange:a[1]||(a[1]=(...e)=>u.onChange&&u.onChange(...e)),id:u.id,value:r.value,checked:r.checked,type:"radio",name:r.name,class:"filter__radio"},null,40,["id","value","checked","name"]),l("label",{for:u.id,class:"filter__item"},i(r.text),9,["for"])])};var C=s({name:"FilterElm",components:{FilterItem:y},props:{filterItems:{type:Array,required:!0},setActiveFilter:{type:Function,required:!0},filterName:{type:String,default:"filter"},isStatic:{type:Boolean,default:!1},staticElms:{type:Object},contentList:{type:Object,required:!0}},setup(e){const t=e.isStatic,l=n(),i=n(),s=u((()=>e.contentList)),d=u((()=>{var t;return null==(t=e.staticElms)?void 0:t.simplebar})),v=u((()=>{var t,l;if(null==(t=e.staticElms)?void 0:t.simplebar)return null==(l=e.staticElms)?void 0:l.scrollbar.getInstance()})),{btnToggle:p,isActive:h,isPinned:y,scrollPin:k,handleClickOutside:C,throttleClick:w}=b(l,i),{scrollPinMobile:S}=function(e,t,l){const i=document.querySelector(".page-header-pin");return{scrollPinMobile:()=>{t.value&&i&&l.value?((()=>{if(f("Закрепление хедера"),console.log("🚀 ~ file: usePinFilterMobile.ts ~ line 24 ~ pinHeader ~ root.value",e.value),e.value){console.log("условие root.value == true",!!e.value);const t=-i.offsetHeight;o.set(i,{y:t});const n=.5;let a=!1,s=document.documentElement.clientHeight+200;m(document.documentElement,(()=>{s=document.documentElement.clientHeight+200}));const u=o.timeline({onStart(){a=!0},paused:!0}).to(i,{y:0,duration:n},"one").to(e.value,{y:i.offsetHeight,duration:n},"one"),c=o.timeline({onComplete(){a=!1},paused:!0}).to(i,{y:t,duration:n},"one").to(e.value,{y:0,duration:n},"one"),d=()=>{a=!1,o.set(i,{y:t}),o.set(e.value,{y:0})};let v=()=>u.isActive()||c.isActive(),p=!1;r.create({trigger:document.documentElement,end:()=>`${l.value.offsetHeight} top`,onUpdate({direction:e}){const t=document.documentElement.scrollTop>=s;0!==document.documentElement.scrollTop?(setTimeout((()=>{p=-1===e}),100),v()||(p&&t?a||u.restart():a&&c.restart())):d()}})}else console.log("условие root.value == true",!!e.value);f("Закрепление хедера КОНЕЦ")})(),(()=>{if(e.value&&t.value){let i=e.value.scrollLeft;e.value.addEventListener("scroll",a((()=>{i=e.value.scrollLeft}),200),{passive:!0}),r.create({id:"filter-pin",trigger:t.value,start:"top top",end:()=>l.value.offsetHeight-(window.screen.height-10*t.value.offsetHeight)+" top",pin:!0,pinSpacing:!1,onRefresh(){e.value.scrollLeft=i}})}})()):f("scrollPinMobile -> missed required elms","error")}}}(l,i,s),{scrollPinStatic:E}={scrollPinStatic:(e,t)=>{if(e&&t){const l=o.quickSetter(e,"y","px");t.addListener((e=>{l(e.offset.y)}))}}},P=e=>{let t=0;const l=setInterval((()=>{t>30&&(f("clear interval...","warn"),clearInterval(l)),e(l),t++}),100)};return c((()=>{t?P((e=>{d.value&&v.value&&(clearInterval(e),E(d.value,v.value))})):g.isDesktop?(g.scrollbar&&k(),document.addEventListener("pointerup",C)):(f("Запуск интервала закрепления фильтра"),P((e=>{console.log("🚀 ~ file: Filter.vue ~ line 154 ~ runInterval ~ contentElm.value",s.value),s.value&&(clearInterval(e),f("run filter pin mobile"),S(),m(s.value,(()=>{var e;null==(e=r.getById("filter-pin"))||e.refresh()})))})))})),{root:l,pinContainer:i,btnToggle:p,isActive:h,isPinned:y,throttleClick:w,scrollPin:k,handleClickOutside:C,scrollPinMobile:S}}});const w={key:1,class:"filter__icon"},S=l("svg",{viewBox:"0 0 14 12",width:"14",height:"12"},[l("path",{d:"M.938.5L7 11 13.062.5H.938z"})],-1),E=l("span",{class:"icon-text"},"filter",-1),P={class:"filter__group"},x=l("legend",{class:"visually-hidden"},"Фильтр статей",-1);C.render=function(i,n,a,r,o,s){const u=d("filter-item");return e(),t("div",{ref:"pinContainer",class:[{"is-active":i.isPinned&&i.isActive},"pin-filter-container"]},[l("div",{ref:"root",class:[{"is-pinned":i.isPinned,"is-active":i.isPinned&&i.isActive},"filter"]},[i.isStatic?v("",!0):(e(),t("button",{key:0,ref:"btnToggle",onClick:n[1]||(n[1]=(...e)=>i.throttleClick&&i.throttleClick(...e)),class:"filter__collapse",type:"button"}," Переключить видимость фильтра ",512)),i.isStatic?v("",!0):(e(),t("div",w,[S,E])),l("fieldset",P,[x,(e(!0),t(p,null,h(i.filterItems,(l=>(e(),t(u,{key:l.type,value:l.value,text:l.name,checked:l.checked,handleChange:i.setActiveFilter,name:i.filterName},null,8,["value","text","checked","handleChange","name"])))),128))])],2)],2)};export{C as _};