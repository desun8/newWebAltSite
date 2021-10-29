import{g as e,t,S as s,a as i,b as o,s as n,I as l,A as r,c as a}from"./vendor.d00778cb.js";const c=e=>{const t={padding:e.padding?e.padding:"1em",color:e.color?e.color:"inherit",background:e.background?e.background:"inherit","font-size":e.fontSize?e.fontSize:"inherit","font-weight":e.fontWeight?e.fontWeight:"inherit"};return s=t,Object.entries(s).map((([e,t])=>`${e}: ${t}`)).join("; ");var s},h=(e,t="default")=>{((e,t)=>{console.log("%c%s",t,e)})(e,c({background:"cornflowerblue"}))},d=window.matchMedia("(max-width: 60em)"),u=!window.matchMedia("(max-width: 60em)").matches,m=(e,t,s)=>{let i=!1;const o=i=>{i.matches?(h("IS SMALL SCREEN"),e()):(h("IS LARGE SCREEN"),t()),s&&s()};d.addEventListener("change",o),i||(o(d),i=!0)},p=(e,t)=>{new ResizeObserver((e=>{for(let s of e){const e=s.contentRect;console.log("Element:",s.target),console.log(`Element size: ${e.width}px x ${e.height}px`),console.log(`Element padding: ${e.top}px ; ${e.left}px`),t()}})).observe(e)},g={os:(()=>{let e="Unknown OS";return-1!==navigator.appVersion.indexOf("Win")&&(e="Windows"),-1!==navigator.appVersion.indexOf("Mac")&&(e="MacOS"),-1!==navigator.appVersion.indexOf("Linux")&&(e="Linux"),-1!==navigator.appVersion.indexOf("Android")&&(e="Android"),e})(),isDesktop:u,scrollbar:void 0,isTouchScreen:!!window.navigator.maxTouchPoints&&(document.documentElement.classList.add("js-touch-screen"),!0)};p(document.documentElement,(()=>{g.isDesktop=!window.matchMedia("(max-width: 60em)").matches}));var b,v;(v=b||(b={})).lossy="lossy",v.lossless="lossless",v.alpha="alpha",v.animation="animation";let f;const A={},y=function(e,t){if(!t)return e();if(void 0===f){const e=document.createElement("link").relList;f=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in A)return;A[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const i=document.createElement("link");return i.rel=t?"stylesheet":f,t||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),t?new Promise(((e,t)=>{i.addEventListener("load",e),i.addEventListener("error",t)})):void 0}))).then((()=>e()))};var w,S;(S=w||(w={}))[S.Up=0]="Up",S[S.Down=1]="Down";class x extends s{transformDelta(e){return this.options.open?{x:0,y:0}:e}}x.pluginName="modal",x.defaultOptions={open:!1};const E=e=>{e.updatePluginOptions("modal",{open:!0})},k=e=>{e.updatePluginOptions("modal",{open:!1})};class L extends s{constructor(){super(...arguments),this.onHashChange=()=>{this.handleHash(location.hash)},this.onClick=e=>{const t=e.target;if("A"!==t.tagName)return;const s=t.getAttribute("href");s&&"#"===s.charAt(0)&&this.handleHash(s)},this.handleHash=e=>{e&&("#top"===e?this.scrollbar.setMomentum(0,-this.scrollbar.scrollTop):this.scrollbar.scrollIntoView(document.querySelector(e),{offsetTop:-this.scrollbar.containerEl.scrollTop}))}}onInit(){this.handleHash(location.hash),window.addEventListener("hashchange",this.onHashChange),document.body.addEventListener("click",this.onClick)}onDestory(){window.removeEventListener("hashchange",this.onHashChange),document.body.removeEventListener("click",this.onClick)}}L.pluginName="anchor",e.registerPlugin(i);class C{constructor(e,t=!1){this.element=e,this.isGlobal=t,this.options={damping:.1,delegateTo:document,alwaysShowTracks:g.isDesktop}}addPlugins(){o.use(x,L)}addStyles(){this.isGlobal&&(document.body.style.overflow="hidden"),this.element.style.height="100vh";const e=this.element.querySelector(".scroll-content");e&&(e.style.willChange="transform")}addToGlobal(){g.scrollbar=this.smoothScrollInstance}setupScrollTrigger(){const e=this.smoothScrollInstance;i.scrollerProxy(this.element,{scrollTop(t){return arguments.length&&"number"==typeof t&&(e.scrollTop=t),e.scrollTop}}),e.addListener(i.update),i.defaults({scroller:this.element})}setup(){this.addStyles(),this.isGlobal&&(this.addToGlobal(),this.setupScrollTrigger())}getInstance(){return this.smoothScrollInstance}destroy(){this.smoothScrollInstance&&this.smoothScrollInstance.destroy()}init(){this.element?g.isTouchScreen||(this.addPlugins(),this.smoothScrollInstance=o.init(this.element,this.options),this.setup()):console.warn("Не удалось инициализировать плавный скролл.")}}const I=(e,t)=>{t?E(t):n.exports.disablePageScroll(e)},T=(e,t)=>{t?k(t):n.exports.enablePageScroll(e)},q=e=>e.value.trim().length>1,_=e=>e.value.trim().length==="+7 (999) 999 99 99".length,O=e=>null!==e.value.trim().match(/^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]+)])$/i),D=e=>{const t=e.files;let s=0;if(t)for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)){s+=Math.floor(t[i].size/1024/1024)}return s<=15},z=(e,t)=>{((e,t)=>{e.dataset.valid=`${t}`})(e,t(e))};var P,M;(M=P||(P={})).TEXT="text",M.TEL="tel",M.EMAIL="email";const R=(e,t)=>{let s;switch(t){case P.TEXT:s=q;break;case P.TEL:s=_;break;case P.EMAIL:s=O}s&&z(e,s)},H=e=>{""!==e.value?e.classList.add("has-value"):e.classList.remove("has-value")};function B(e,t,s){const i=s.value;return{configurable:!0,get(){return i.bind(this)}}}var $=Object.defineProperty,V=Object.getOwnPropertyDescriptor,j=(e,t,s,i)=>{for(var o,n=i>1?void 0:i?V(t,s):t,l=e.length-1;l>=0;l--)(o=e[l])&&(n=(i?o(t,s,n):o(n))||n);return i&&n&&$(t,s,n),n};class W{constructor(e){this.scrollbar=e,this.elm=this.getTemplate(),this.dialogContent=this.elm.querySelector(".dialog-content"),this.title=this.elm.querySelector("#delete-dialog-title"),this.btnReject=this.elm.querySelector("#reject-dialog-btn"),this.btnRemove=this.elm.querySelector("#delete-dialog-btn"),this.dialog=new r(this.elm),this.dialog.on("show",(()=>{I(this.elm,this.scrollbar)})),this.dialog.on("hide",(()=>{T(this.elm,this.scrollbar)})),this.addHoverEvent()}getTemplate(){const e=document.createElement("div");return e.id="delete-dialog",e.classList.add("dialog-container"),e.setAttribute("aria-labelledby","delete-dialog-title"),e.setAttribute("aria-hidden","true"),e.dataset.testid="dialog",e.innerHTML='\n      \x3c!-- 2. The dialog overlay --\x3e\n      <div class="dialog-overlay  bg-true-black bg-opacity-50" data-a11y-dialog-hide></div>\n      \x3c!-- 3. The actual dialog --\x3e\n      <div class="dialog-content  grid grid-cols-2 gap-5 w-11/12 max-w-334px py-8 px-6 bg-sun uppercase" role="document">\n        \x3c!-- 5. The dialog title --\x3e\n        <h1 id="delete-dialog-title" class="sr-only" data-title="Подтвердите удаление файла -"></h1>\n        \x3c!-- 6. Dialog content --\x3e\n        <h2 class="col-span-full text-lg font-semibold text-center tracking-wide" aria-hidden="true">Точно удалить?</h2>\n        <button id="reject-dialog-btn" class="py-2 px-4 text-lg text-white font-semibold bg-black transition-colors focus:outline-none focus-visible:bg-black" type="button" aria-label="Не удалять" data-a11y-dialog-hide data-testid="dialog-no">не точно</button>\n        <button id="delete-dialog-btn" class="py-2 px-4 text-lg text-white font-semibold transition-colors focus:outline-none focus-visible:bg-black" type="button" aria-label="Удалить" data-a11y-dialog-hide data-testid="dialog-yes">точно</button>\n  </div>\n',e}handleHover(e){e.target===this.btnRemove?(this.btnRemove.focus(),this.btnReject.style.backgroundColor="transparent",this.btnRemove.style.backgroundColor="#131313"):(this.btnReject.focus(),this.btnReject.style.backgroundColor="",this.btnRemove.style.backgroundColor="")}addHoverEvent(){const e=t(this.handleHover,100).bind(this);this.dialogContent.addEventListener("focusin",e,{passive:!0}),this.dialogContent.addEventListener("mouseover",e,{passive:!0}),this.dialogContent.addEventListener("mouseleave",e,{passive:!0})}addToDOM(){document.getElementById(this.elm.id)||document.body.appendChild(this.elm)}setTitle(e){this.title.textContent=`${this.title.dataset.title} ${e}`}setBtnClick(e){this.btnRemove.onclick=()=>e()}}class Q{constructor(e,t){this.parentElm=e,this.scrollbar=t,this.store=new Map,this.lastTimeFireChange=0,this.maxLengthName=16,this.inputElm=this.parentElm.querySelector("input[type='file']"),this.listElm=this.parentElm.querySelector("ul"),this.inputElm.addEventListener("change",this.handleChange),this.dialog=new W(this.scrollbar),this.dialog.addToDOM()}addStoreItem(e,t){this.store.set(e,t)}hasStoreItem(e){return this.store.has(e)}removeStoreItem(e){this.store.has(e)&&this.store.delete(e)}updateStore(){this.lastTimeFireChange=Date.now(),this.updateInputFiles(),this.validation()}updateInputFiles(){let e=new DataTransfer;this.store.forEach((t=>{let s=new File([t],t.name,{type:t.type,lastModified:t.lastModified});e.items.add(s)})),this.inputElm.files=e.files}resetInputFiles(){this.inputElm.files=(new DataTransfer).files}trimFileName(e){if(e.length<=this.maxLengthName)return e;const t=e.match(/([\s\S]+)(\.\D+)$/);if(null===t)return e;const s=t[1],i=t[2],o=this.maxLengthName-i.length;return`${s.slice(0,o-2)}...${s.slice(-2)}${i}`}createListItem(e,t){const s=document.createElement("li"),i=document.createElement("button");return i.type="button",i.id=e,i.dataset.testid=e,i.classList.add("js-file-input","flex","items-center","w-full","hover:text-sun","focus-visible:text-sun","lg:w-auto"),i.innerHTML=`\n    <span class="icon-file  flex-shrink-0 w-4 h-5 mr-5 lg:w-6 lg:h-7">\n      <svg fill="none" viewBox="0 0 17 20" aria-hidden="true">\n        <g clip-path="url(#clip0)">\n          <path\n            fill="#131313"\n            d="M9.056 10.335v9.523l8.132-4.761V5.574l-8.132 4.761zm-.925 0L0 5.574v9.523l8.131 4.76v-9.522zM.463 4.762L8.593 0l8.132 4.762-8.131 4.76-8.131-4.76z"/>\n        </g>\n        <defs>\n          <clipPath id="clip0">\n            <path fill="#fff" d="M0 0h17v20H0z" />\n          </clipPath>\n        </defs>\n      </svg>\n    </span>\n    <span class="name flex-grow text-left text-dark-grey break-all lg:text-lg" title="${t}" aria-label="Файл — ${t}">\n      ${this.trimFileName(t)}\n    </span>\n    <span class="icon-cross  flex-shrink-0 w-3 h-3 ml-5 transition-colors">\n      <svg fill="none" viewBox="0 0 11 11" aria-hidden="true">\n        <path\n          fill="currentColor"\n          d="M11 8.8L7.698 5.5 11 2.2 8.8 0 5.5 3.3 2.2 0 0 2.2l3.3 3.3L0 8.8 2.2 11l3.3-3.3L8.8 11 11 8.8z"\n        />\n      </svg>\n    </span>\n    `,i.addEventListener("click",this.handleClick),s.appendChild(i),s}addItemToList(e,t){this.listElm.appendChild(this.createListItem(e,t))}validation(){z(this.inputElm,D);"true"===this.inputElm.dataset.valid?this.inputElm.classList.remove("has-error"):this.inputElm.classList.add("has-error")}showWarnMsg(){const e=this.parentElm.querySelector(".js-error-msg"),t=e.textContent;e.textContent="*такой файл уже добавлен",this.inputElm.classList.add("has-error"),setTimeout((()=>{this.inputElm.classList.remove("has-error"),setTimeout((()=>{e.textContent=t}),500)}),2e3)}handleChange(e){if(Date.now()-this.lastTimeFireChange<100)return void e.preventDefault();const t=e.target;if(t.files&&t.files[0]){const e=t.files[0],s=`${e.name}-${e.lastModified}-${e.size}`;this.hasStoreItem(s)?(this.showWarnMsg(),this.resetInputFiles()):(this.addStoreItem(s,e),this.addItemToList(s,e.name),this.updateStore())}}handleClick(e){const t=e.currentTarget;this.dialog.setTitle(t.id),this.dialog.setBtnClick((()=>this.removeFile(t))),this.dialog.dialog.show()}removeFile(e){var t;this.removeStoreItem(e.id),null==(t=e.parentElement)||t.remove(),this.updateStore()}clear(){document.querySelectorAll(".js-file-input").forEach((e=>{this.removeFile(e)}))}}j([B],Q.prototype,"handleChange",1),j([B],Q.prototype,"handleClick",1);const F=window.RECAPTCHA_KEY;let U=!1;const G=(e,t)=>{if(e.preventDefault(),U)return;const s=e.currentTarget,i=s.querySelector("button[type='submit']"),o=i.querySelector(".link__text"),n=s.action,l=F,r=e=>{((e,t,s)=>{const i=t.textContent||"отправить";if(e.disabled)return;const o=s=>{a.to(e,{x:20,alpha:0,duration:.4,onComplete(){e.disabled=s.disabled,t.textContent=s.text,a.to(e,{x:0,alpha:1,duration:.4})}})};o({disabled:!0,text:s}),setTimeout((()=>{o({disabled:!1,text:i})}),3e3)})(i,o,"ok"===e?"спасибо":"ошибка")};if(null===(e=>e.querySelector("[required][data-valid='false']")||e.querySelector("[required]:not([data-valid])"))(s)){if(!1===(e=>"false"!==e.querySelector("input[type='file'").dataset.valid)(s))return void console.warn("Размер прикрепленных файлов больше 15мб! Форма не отправилась.");try{U=!0;const e=new FormData(s);window.grecaptcha.ready((()=>{window.grecaptcha.execute(l,{action:"form"}).then((t=>(e.append("recaptcha_response",t),fetch(n,{method:"POST",body:e}).then((e=>{if(!e.ok)throw Error(e.statusText);return e.json()})).catch((e=>{console.error("Форма не отправилась",e)}))))).then((e=>{const s=e.status.toLowerCase();return r(s),setTimeout((()=>{t()}),500),e}))}))}catch(h){console.error("Что-то не так с рекаптчей.",h),r("error")}finally{U=!1}}else c=s,Array.from(c.querySelectorAll("input")).forEach((e=>{const t=e.hasAttribute("required"),s=e.dataset.validation;s&&R(e,s),t&&void 0!==e.dataset.valid&&("true"===e.dataset.valid?e.classList.remove("has-error"):e.classList.add("has-error"))})),r("error"),console.warn("Возникла проблема с отправкой формы 😿\nЗаполните обязательные поля.");var c},N=(e,s)=>{if(!e)return void console.error("Ошибка инициализации формы!");const i=e.querySelector("#types-data"),o=e.querySelector("#contacts-data");var n;(e=>{const t=Array.from(e.querySelectorAll("input[type='checkbox']:not(#all)")),s=e.querySelector("input[type='checkbox']#all");t.forEach((e=>{e.addEventListener("change",(()=>{s.checked&&(s.checked=!1)}))})),s.addEventListener("change",(()=>{t.forEach((e=>{e.checked&&(e.checked=!1)}))}))})(i),n=o,Array.from(n.querySelectorAll("input")).forEach((e=>{const t=e.hasAttribute("required"),s=e.dataset.validation;e.addEventListener("change",(()=>{H(e)})),s&&e.addEventListener("change",(()=>{R(e,s)})),t&&e.addEventListener("change",(()=>{void 0!==e.dataset.valid&&("true"===e.dataset.valid?e.classList.remove("has-error"):e.classList.add("has-error"))})),"tel"===e.id&&l(e,{mask:"+{7} (000) 000 00 00"})}));const r=new Q(e.querySelector(".form__input-file"),s),a=()=>{const t=Array.from(o.querySelectorAll("input"));e.reset(),r.clear(),t.forEach((e=>{H(e),e.removeAttribute("data-valid")}))},c=t(G,500);e.onsubmit=e=>{e.preventDefault(),c(e,a)}},J=()=>{const e=document.querySelector("#dialog-form"),t=e.querySelector("form.form");let s;const i=()=>{const t=document.querySelectorAll(".js-dialog-form-open"),i=e.querySelector(".dialog-close");if(!e||!t.length||!i)return void console.warn("Отсутствует элемент диалога формы или кнопка открытия!");if(g.isDesktop){const e=t[0];p(e,(()=>{i.style.width=`${e.offsetWidth}px`}))}const o=new r(e);(()=>{const t=e.querySelector("#dialog-form-scroll-container"),i=e.querySelector(".page-header");t&&g.isDesktop&&i&&(s=new C(t),m((()=>null==s?void 0:s.destroy()),(()=>{var e;null==s||s.init(),null==(e=null==s?void 0:s.getInstance())||e.addListener((e=>{e.offset.y>10?i.classList.add("is-fixed"):i.classList.remove("is-fixed")}))})))})();let n=!1;o.on("show",(()=>{n||(n=!0,(()=>{if(void 0===window.grecaptcha){const e=F,t="https://www.google.com/recaptcha/api.js?render=",s=document.createElement("script");s.src=`${t}${e}`,document.head.appendChild(s)}})()),I(e,g.scrollbar)})),o.on("hide",(()=>{var t;T(e,g.scrollbar),null==(t=null==s?void 0:s.getInstance())||t.scrollTo(0,0)})),t.forEach((e=>{e.addEventListener("click",(()=>{o.show()}))}))};e&&t&&(i(),N(t,null==s?void 0:s.getInstance()))};class X{constructor(e,t=2){this.elm=e,this.wrap=this.elm.querySelector(".ticker__wrap"),this.text=this.wrap.querySelector(".ticker__item"),this.textCount=this.wrap.childElementCount,this.duration=t,this.movePos=this.getTextSize(),this.tween=this.ticker().pause(),this.observer=null,this.init()}getTextSize(){return(this.text.offsetWidth+parseInt(window.getComputedStyle(this.text).getPropertyValue("margin-right")))*(this.textCount-1)}ticker(){return e.fromTo(this.wrap,{x:0},{x:-this.movePos,duration:this.duration,ease:"none",repeat:-1})}update(){this.movePos=this.getTextSize(),null!==this.tween&&this.tween.kill(),this.tween=this.ticker()}intersectionObserver(){return new IntersectionObserver(((e,t)=>{e.forEach((e=>{const{isIntersecting:t}=e;t?this.tween.play():this.tween.pause()}))}),{threshold:.5})}init(){this.observer=this.intersectionObserver(),this.observer.observe(this.elm);const e=t(this.update,200);window.addEventListener("resize",e.bind(this))}}class Y extends class{constructor(e,t,s=3e3){this.speed=s,this.root=e,this.items=this.root.querySelectorAll(`.${t}`),this.size=this.items.length-1,this.curr=0,this.prev=null,this.intervalId=null,this.duration=.2,this.init()}changeSlide(){const t=this.items[this.curr],{duration:s}=this;if(null===this.prev)return e.to(t,{alpha:1,zIndex:1,duration:s}),null;const i=this.items[this.prev],o=e.timeline({duration:s});o.to(i,{alpha:0,zIndex:0}),o.to(t,{alpha:1,zIndex:1})}next(){this.changeSlide(),this.prev=this.curr,this.curr+=1,this.curr>this.size&&(this.curr=0)}autoplay(){null!==this.intervalId&&clearInterval(this.intervalId),this.intervalId=setInterval((()=>{this.next()}),this.speed)}init(){this.items.forEach(((e,t)=>{t!==this.curr&&(e.style.opacity="0")}))}}{constructor(...e){super(...e)}changeSlide(){const t=this.items[this.curr],{duration:s}=this;if(null===this.prev)return e.to(t,{alpha:1,zIndex:1,duration:s}),null;const i=this.items[this.prev],o=e.timeline({duration:s});o.to(i,{alpha:0,x:-20,zIndex:0}),o.fromTo(t,{alpha:0,x:-20,zIndex:0},{alpha:1,x:0,zIndex:1})}intersectionObserver(){return new IntersectionObserver((e=>{e.forEach((e=>{const{isIntersecting:t}=e;t?(clearInterval(this.intervalId),this.autoplay()):clearInterval(this.intervalId)}))}),{threshold:.5})}init(){super.init(),this.observer=this.intersectionObserver(),this.observer.observe(this.root)}}class K{constructor(e){this.elm=e,this.imageBg=this.elm.querySelector(".page-footer__bg"),this.showImage=!0}ticker(){const e=this.elm.querySelectorAll(".ticker");e&&e.forEach((e=>new X(e,4)))}slider(){const e=this.elm.querySelector(".footer-feedback__slider");e&&new Y(e,"footer-feedback__link",2e3)}toggleImageVisible(){this.showImage?this.imageBg.style.opacity="1":this.imageBg.style.opacity="0"}intersectionObserver(){return new IntersectionObserver((e=>{e.forEach((e=>{const{isIntersecting:t}=e;this.showImage=!!t,this.toggleImageVisible()}))}),{threshold:.5})}observeMenuBtnTheme(){new IntersectionObserver((e=>{e.forEach((e=>{const{isIntersecting:t}=e;t?(document.body.classList.add("menu-btn-white"),document.body.classList.add("header-feedback-white")):(document.body.classList.remove("menu-btn-white"),document.body.classList.remove("header-feedback-white"))}))}),{root:null,rootMargin:"0px 0px -60.5% 0px",threshold:.5}).observe(this.elm)}observeBtnTopTheme(){new IntersectionObserver((e=>{e.forEach((e=>{const{isIntersecting:t}=e;t?document.body.classList.add("btn-to-top-white"):document.body.classList.remove("btn-to-top-white")}))}),{root:null,rootMargin:"0px 0px 0px 0px",threshold:.2}).observe(this.elm)}init(){this.ticker(),this.slider(),this.observer=this.intersectionObserver(),this.observer.observe(this.elm),this.observeMenuBtnTheme(),this.observeBtnTopTheme()}}class Z{constructor(e,t){this.elm=e,this.btn=t,this.elmChild={count:this.elm.childElementCount,children:this.elm.querySelector("li")},this.elmHeight=this.findListHeight(),this.isShow=!1,this.init()}findListHeight(){return(this.elmChild.children.offsetHeight+parseInt(window.getComputedStyle(this.elmChild.children).getPropertyValue("margin-bottom")))*this.elmChild.count}handleClick(){this.elm.style.willChange="max-height, margin-bottom",this.isShow?(this.isShow=!1,this.btn.dataset.hidden="true"):(this.isShow=!0,this.btn.dataset.hidden="false"),setTimeout((()=>e.to(this.elm,{maxHeight:this.isShow?this.elmHeight:0,duration:.3,onComplete:()=>{this.elm.style.willChange=null}})),100)}handleResize(){this.elmHeight=this.findListHeight(),parseInt(this.elm.style.maxHeight)>0&&(this.elm.style.maxHeight=`${this.elmHeight}px`)}init(){this.btn.addEventListener("click",this.handleClick.bind(this));const e=t(this.handleResize,200);window.addEventListener("resize",e.bind(this))}}class ee{constructor(e,t,s,i,o=null){this.elm=e,this.elmSelector=this.elm.tagName.toLowerCase()+"."+Array.from(this.elm.classList).join("."),this.btnsOpen=t,this.btnClose=s,this.nav=i,this.isVisible=!1,this.appConfig=o,this.pageMain=document.querySelector("main"),this.pageHeader=document.querySelector("header"),this.pageFooter=document.querySelector("footer"),this.progressBar=document.querySelector(".progress-bar"),this.footerRedirect=document.querySelector(".footer-redirect"),this.blogTopElm=document.querySelector(".blog-deco-top"),this.blogSideElm=document.querySelector(".blog-deco-side"),this.moveTargets=[this.pageHeader,this.pageMain,this.progressBar,this.pageFooter,this.footerRedirect,this.blogTopElm,this.blogSideElm],this.moveTargets=this.moveTargets.filter((e=>null!==e)),this.elmWidth=this.elm.offsetWidth,this.scrollbarInstance=null,this.update=this.update.bind(this),this.handleClick=this.handleClick.bind(this),this.handleClickOutside=this.handleClickOutside.bind(this)}collapseSubMenu(){const e=this.nav.querySelectorAll(".page-nav__sub-list"),t=this.nav.querySelector(".page-nav__elm--selected");e.forEach((e=>{const s=e.previousElementSibling,i=new Z(e,s),o=e.parentElement;s.addEventListener("click",(()=>{if(o===t)return null;i.isShow?(o.classList.add("page-nav__elm--active"),t.classList.add("page-nav__elm--disable")):(o.classList.remove("page-nav__elm--active"),t.classList.remove("page-nav__elm--disable"))}))}))}initScrollbar(){this.scrollbarInstance=new C(this.elm.querySelector(".page-menu__wrap")),this.scrollbarInstance.init()}destroyScrollbar(){this.scrollbarInstance&&this.scrollbarInstance.instance.destroy()}toggleView(t){const s=this.moveTargets,i=g.isDesktop?.1:.15,o=()=>e.to(this.elm,{x:t?0:-this.elmWidth,duration:.3,delay:i,onStart:()=>{this.elm.style.willChange="transform"},onComplete:()=>{this.elm.style.willChange=""}});g.isDesktop?e.timeline().add(o()).to(s,{x:t?this.elmWidth:0,duration:.3,delay:i,onStart:()=>{s.forEach((e=>{e.style.willChange="transform"}))},onComplete:()=>{t||(this.pageHeader.style.transform=null,this.elm.style.transform=null),s.forEach((e=>{e.style.willChange=null}))}},0).to(this.pageHeader,{alpha:t?0:1,duration:.3,delay:i,onStart(){const e=this.targets()[0];t?e.classList.add("is-menu-show"):e.classList.remove("is-menu-show")}},0):o().play()}handleClick(){this.isVisible=!this.isVisible,this.isVisible?g.scrollbar?E(g.scrollbar):n.exports.disablePageScroll(this.elm):g.scrollbar?k(g.scrollbar):n.exports.enablePageScroll(this.elm),this.toggleView(this.isVisible)}handleClickOutside(e){const t=this.btnsOpen[0];if(!this.isVisible||e.target===t||e.target.parentElement===t)return;!e.target.closest(this.elmSelector)&&this.handleClick()}addEvents(){this.btnsOpen.forEach((e=>{null==e||e.addEventListener("click",this.handleClick)})),this.btnClose.addEventListener("click",this.handleClick),g.isDesktop&&document.body.addEventListener("click",this.handleClickOutside)}update(){this.elmWidth=this.elm.offsetWidth,this.isVisible||e.set(this.elm,{x:-this.elmWidth})}desktop(){console.log("Menu - init desktop")}mobile(){}init(){this.collapseSubMenu(),this.addEvents(),this.initScrollbar()}}const te=()=>{const t=document.querySelector(".progress-bar");t&&(t=>{let s;s=void 0===g.scrollbar?document.body:g.scrollbar.contentEl,e.to(t,{scale:1,ease:"none",scrollTrigger:{trigger:s,start:"top top",end:"bottom bottom",scrub:!0}})})(t)},se=()=>{m((()=>{"Android"===g.os&&document.body.classList.add("os-android")}),(()=>{"MacOS"===g.os&&document.body.classList.add("os-mac")})),(()=>{const e=document.querySelector(".page-menu"),t=document.querySelector(".page-nav"),s=document.querySelectorAll(".js-menu-btn-open"),i=document.querySelector(".page-menu__close"),o=document.querySelectorAll(".page-menu .ticker"),n={isDesktop:g.isDesktop},l=new ee(e,s,i,t,n);l.init(),o.length&&o.forEach((e=>{new X(e)})),m(l.mobile,l.desktop),p(e,l.update)})(),(()=>{const s=!(g.isDesktop&&g.scrollbar),i=document.querySelector(".page-header-fixed");if(s&&i){let s=document.documentElement.clientHeight+200,o=0,n=0,l=!1;const r=-100;i.setAttribute("aria-hidden","true"),e.set(i,{y:r,display:"block"});const a=()=>{l||(e.killTweensOf(i),l=!0,e.to(i,{y:0,force3D:!0,onStart(){e.set(i,{willChange:"transform"})}}))},c=()=>{l=!1},h=()=>{l&&(e.killTweensOf(i),e.to(i,{y:r,force3D:!0,onStart(){e.set(i,{willChange:"transform"})},onComplete(){e.set(i,{willChange:""}),c()}}))},d=e=>{n=e,0==(n>o?1:0)&&n>s?a():h(),o=n},u=t((()=>{d(document.documentElement.scrollTop)}),200);document.addEventListener("scroll",u,{passive:!0})}})(),(()=>{const e=document.querySelector(".page-footer");e&&new K(e).init()})(),(()=>{const e=document.querySelector("#scroll-container"),t=new C(e,!0);t.init();const s=t.getInstance();if(s){const e=document.querySelector(".page-header"),t=document.querySelector("#go-to-top"),i=document.querySelector(".page-blog");let o;i&&(async()=>{const e=await y((()=>import("./blogOnScrollAnimation.8b2ff8f6.js")),["/assets/blogOnScrollAnimation.8b2ff8f6.js","/assets/vendor.d00778cb.js"]);o=await e.default})(),s.addListener((s=>{const n=s.offset.y;n>10?e.classList.add("is-fixed"):e.classList.remove("is-fixed"),t&&(n>200?t.classList.add("is-show"):t.classList.remove("is-show")),i&&o&&o(n)}))}})(),te(),J(),g.isDesktop?y((()=>import("./invertTheme.e99c711e.js")),["/assets/invertTheme.e99c711e.js","/assets/vendor.d00778cb.js"]).then((({invertTheme:e})=>{e()})):y((()=>import("./scrollToTop.734534f2.js")),["/assets/scrollToTop.734534f2.js","/assets/vendor.d00778cb.js"]).then((({scrollToTop:e})=>{e()}))};!function(){if(se(),((e,t)=>{const s=new Image;s.onload=function(){const i=s.width>0&&s.height>0;t(e,i)},s.onerror=function(){t(e,!1)},s.src="data:image/webp;base64,"+{lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"}[e]})(b.lossy,((e,t)=>{t?document.documentElement.classList.add("webp"):document.documentElement.classList.add("no-webp")})),void 0===window.APP&&(window.APP=g),g.isDesktop)(()=>{const e=document.querySelector(".header-feedback"),t=e.querySelector(".header-feedback__bg");t.style.transform="translate(100%, -50%)";const s=new IntersectionObserver((e=>{e.forEach((e=>{const{isIntersecting:i}=e;i&&(t.style.transform="translate(0, -50%)",s.disconnect())}))}),{rootMargin:"0px",threshold:[.1,.5,1]});s.observe(e)})();else{window.addEventListener("resize",function(e){let t;function s(){let s=e.clientHeight;s!==t&&requestAnimationFrame((function(){e.style.setProperty("--vh",.01*s+"px"),t=s}))}return s(),s}(document.documentElement));-1!==navigator.appVersion.indexOf("CriOS")&&document.body.classList.add("ios-chrome")}"Windows"===g.os&&document.documentElement.classList.add("os-windows")}();export{p as r};