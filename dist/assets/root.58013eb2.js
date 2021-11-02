var e=Object.defineProperty,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(t,s,i)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,o=(e,o)=>{for(var r in o||(o={}))s.call(o,r)&&n(e,r,o[r]);if(t)for(var r of t(o))i.call(o,r)&&n(e,r,o[r]);return e};import{g as r,t as a,c as l,b as c,d,s as h,I as m,A as u,a as p}from"./vendor.5d6f67ed.js";let g;const f={},b=function(e,t){if(!t)return e();if(void 0===g){const e=document.createElement("link").relList;g=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in f)return;f[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const i=document.createElement("link");return i.rel=t?"stylesheet":g,t||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),t?new Promise(((e,t)=>{i.addEventListener("load",e),i.addEventListener("error",t)})):void 0}))).then((()=>e()))};const y=e=>{const t={padding:e.padding?e.padding:"1em",color:e.color?e.color:"inherit",background:e.background?e.background:"inherit","font-size":e.fontSize?e.fontSize:"inherit","font-weight":e.fontWeight?e.fontWeight:"inherit"};return s=t,Object.entries(s).map((([e,t])=>`${e}: ${t}`)).join("; ");var s},v=(e,t)=>{console.log("%c%s",t,e)},A=(e,t="default")=>{switch(t){case"error":v(e,y({background:"indianred"}));break;case"warn":v(e,y({background:"chocolate"}));break;default:v(e,y({background:"cornflowerblue"}))}},w=window.matchMedia("(max-width: 60em)"),S=!window.matchMedia("(max-width: 60em)").matches,E=(e,t,s)=>{let i=!1;const n=i=>{i.matches?(A("IS SMALL SCREEN"),e()):(A("IS LARGE SCREEN"),t()),s&&s()};w.addEventListener("change",n),i||(n(w),i=!0)},x=(e,t)=>{new ResizeObserver((e=>{for(let s of e){const e=s.contentRect;console.log("Element:",s.target),console.log(`Element size: ${e.width}px x ${e.height}px`),console.log(`Element padding: ${e.top}px ; ${e.left}px`),t()}})).observe(e)},k={os:(()=>{let e="Unknown OS";return-1!==navigator.appVersion.indexOf("Win")&&(e="Windows"),-1!==navigator.appVersion.indexOf("Mac")&&(e="MacOS"),-1!==navigator.appVersion.indexOf("Linux")&&(e="Linux"),-1!==navigator.appVersion.indexOf("Android")&&(e="Android"),e})(),isDesktop:S,scrollbar:void 0,isTouchScreen:!!window.navigator.maxTouchPoints&&(document.documentElement.classList.add("js-touch-screen"),!0)};x(document.documentElement,(()=>{k.isDesktop=!window.matchMedia("(max-width: 60em)").matches}));var L,C;(C=L||(L={})).lossy="lossy",C.lossless="lossless",C.alpha="alpha",C.animation="animation";var I,T,q=(e,t)=>{const s=new Image;s.onload=function(){const i=s.width>0&&s.height>0;t(e,i)},s.onerror=function(){t(e,!1)},s.src="data:image/webp;base64,"+{lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"}[e]};(T=I||(I={}))[T.Up=0]="Up",T[T.Down=1]="Down";class O extends l{transformDelta(e){return this.options.open?{x:0,y:0}:e}}O.pluginName="modal",O.defaultOptions={open:!1};const _=e=>{e.updatePluginOptions("modal",{open:!0})},D=e=>{e.updatePluginOptions("modal",{open:!1})};class R extends l{constructor(){super(...arguments),this.onHashChange=()=>{this.handleHash(location.hash)},this.onClick=e=>{const t=e.target;if("A"!==t.tagName)return;const s=t.getAttribute("href");s&&"#"===s.charAt(0)&&this.handleHash(s)},this.handleHash=e=>{e&&("#top"===e?this.scrollbar.setMomentum(0,-this.scrollbar.scrollTop):this.scrollbar.scrollIntoView(document.querySelector(e),{offsetTop:-this.scrollbar.containerEl.scrollTop}))}}onInit(){this.handleHash(location.hash),window.addEventListener("hashchange",this.onHashChange),document.body.addEventListener("click",this.onClick)}onDestory(){window.removeEventListener("hashchange",this.onHashChange),document.body.removeEventListener("click",this.onClick)}}R.pluginName="anchor",r.registerPlugin(c);class ${constructor(e,t=!1){this.element=e,this.isGlobal=t,this.options={damping:.1,delegateTo:document,alwaysShowTracks:k.isDesktop}}addPlugins(){d.use(O,R)}addStyles(){this.isGlobal&&(document.body.style.overflow="hidden"),this.element.style.height="100vh";const e=this.element.querySelector(".scroll-content");e&&(e.style.willChange="transform")}addToGlobal(){k.scrollbar=this.smoothScrollInstance}setupScrollTrigger(){const e=this.smoothScrollInstance;c.scrollerProxy(this.element,{scrollTop(t){return arguments.length&&"number"==typeof t&&(e.scrollTop=t),e.scrollTop}}),e.addListener(c.update),c.defaults({scroller:this.element})}setup(){this.addStyles(),this.isGlobal&&(this.addToGlobal(),this.setupScrollTrigger())}getInstance(){return this.smoothScrollInstance}destroy(){this.smoothScrollInstance&&this.smoothScrollInstance.destroy()}init(){this.element?k.isTouchScreen||(this.addPlugins(),this.smoothScrollInstance=d.init(this.element,this.options),this.setup()):console.warn("Не удалось инициализировать плавный скролл.")}}const P=(e,t)=>{t?_(t):h.exports.disablePageScroll(e)},H=(e,t)=>{t?D(t):h.exports.enablePageScroll(e)},z=e=>e.value.trim().length>1,M=e=>e.value.trim().length==="+7 (999) 999 99 99".length,j=e=>null!==e.value.trim().match(/^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]+)])$/i),B=e=>{const t=e.files;let s=0;if(t)for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)){s+=Math.floor(t[i].size/1024/1024)}return s<=15},V=(e,t)=>{((e,t)=>{e.dataset.valid=`${t}`})(e,t(e))};var W,Q;(Q=W||(W={})).TEXT="text",Q.TEL="tel",Q.EMAIL="email";const F=(e,t)=>{let s;switch(t){case W.TEXT:s=z;break;case W.TEL:s=M;break;case W.EMAIL:s=j}s&&V(e,s)},N=e=>{""!==e.value?e.classList.add("has-value"):e.classList.remove("has-value")};function U(e,t,s){const i=s.value;return{configurable:!0,get(){return i.bind(this)}}}var G=Object.defineProperty,J=Object.getOwnPropertyDescriptor,X=(e,t,s,i)=>{for(var n,o=i>1?void 0:i?J(t,s):t,r=e.length-1;r>=0;r--)(n=e[r])&&(o=(i?n(t,s,o):n(o))||o);return i&&o&&G(t,s,o),o};class Y{constructor(e){this.scrollbar=e,this.elm=this.getTemplate(),this.dialogContent=this.elm.querySelector(".dialog-content"),this.title=this.elm.querySelector("#delete-dialog-title"),this.btnReject=this.elm.querySelector("#reject-dialog-btn"),this.btnRemove=this.elm.querySelector("#delete-dialog-btn"),this.dialog=new u(this.elm),this.dialog.on("show",(()=>{P(this.elm,this.scrollbar)})),this.dialog.on("hide",(()=>{H(this.elm,this.scrollbar)})),this.addHoverEvent()}getTemplate(){const e=document.createElement("div");return e.id="delete-dialog",e.classList.add("dialog-container"),e.setAttribute("aria-labelledby","delete-dialog-title"),e.setAttribute("aria-hidden","true"),e.dataset.testid="dialog",e.innerHTML='\n      \x3c!-- 2. The dialog overlay --\x3e\n      <div class="dialog-overlay  bg-true-black bg-opacity-50" data-a11y-dialog-hide></div>\n      \x3c!-- 3. The actual dialog --\x3e\n      <div class="dialog-content  grid grid-cols-2 gap-5 w-11/12 max-w-334px py-8 px-6 bg-sun uppercase" role="document">\n        \x3c!-- 5. The dialog title --\x3e\n        <h1 id="delete-dialog-title" class="sr-only" data-title="Подтвердите удаление файла -"></h1>\n        \x3c!-- 6. Dialog content --\x3e\n        <h2 class="col-span-full text-lg font-semibold text-center tracking-wide" aria-hidden="true">Точно удалить?</h2>\n        <button id="reject-dialog-btn" class="py-2 px-4 text-lg text-white font-semibold bg-black transition-colors focus:outline-none focus-visible:bg-black" type="button" aria-label="Не удалять" data-a11y-dialog-hide data-testid="dialog-no">не точно</button>\n        <button id="delete-dialog-btn" class="py-2 px-4 text-lg text-white font-semibold transition-colors focus:outline-none focus-visible:bg-black" type="button" aria-label="Удалить" data-a11y-dialog-hide data-testid="dialog-yes">точно</button>\n  </div>\n',e}handleHover(e){e.target===this.btnRemove?(this.btnRemove.focus(),this.btnReject.style.backgroundColor="transparent",this.btnRemove.style.backgroundColor="#131313"):(this.btnReject.focus(),this.btnReject.style.backgroundColor="",this.btnRemove.style.backgroundColor="")}addHoverEvent(){const e=a(this.handleHover,100).bind(this);this.dialogContent.addEventListener("focusin",e,{passive:!0}),this.dialogContent.addEventListener("mouseover",e,{passive:!0}),this.dialogContent.addEventListener("mouseleave",e,{passive:!0})}addToDOM(){document.getElementById(this.elm.id)||document.body.appendChild(this.elm)}setTitle(e){this.title.textContent=`${this.title.dataset.title} ${e}`}setBtnClick(e){this.btnRemove.onclick=()=>e()}}class K{constructor(e,t){this.parentElm=e,this.scrollbar=t,this.store=new Map,this.lastTimeFireChange=0,this.maxLengthName=16,this.inputElm=this.parentElm.querySelector("input[type='file']"),this.listElm=this.parentElm.querySelector("ul"),this.inputElm.addEventListener("change",this.handleChange),this.dialog=new Y(this.scrollbar),this.dialog.addToDOM()}addStoreItem(e,t){this.store.set(e,t)}hasStoreItem(e){return this.store.has(e)}removeStoreItem(e){this.store.has(e)&&this.store.delete(e)}updateStore(){this.lastTimeFireChange=Date.now(),this.updateInputFiles(),this.validation()}updateInputFiles(){let e=new DataTransfer;this.store.forEach((t=>{let s=new File([t],t.name,{type:t.type,lastModified:t.lastModified});e.items.add(s)})),this.inputElm.files=e.files}resetInputFiles(){this.inputElm.files=(new DataTransfer).files}trimFileName(e){if(e.length<=this.maxLengthName)return e;const t=e.match(/([\s\S]+)(\.\D+)$/);if(null===t)return e;const s=t[1],i=t[2],n=this.maxLengthName-i.length;return`${s.slice(0,n-2)}...${s.slice(-2)}${i}`}createListItem(e,t){const s=document.createElement("li"),i=document.createElement("button");return i.type="button",i.id=e,i.dataset.testid=e,i.classList.add("js-file-input","flex","items-center","w-full","hover:text-sun","focus-visible:text-sun","lg:w-auto"),i.innerHTML=`\n    <span class="icon-file  flex-shrink-0 w-4 h-5 mr-5 lg:w-6 lg:h-7">\n      <svg fill="none" viewBox="0 0 17 20" aria-hidden="true">\n        <g clip-path="url(#clip0)">\n          <path\n            fill="#131313"\n            d="M9.056 10.335v9.523l8.132-4.761V5.574l-8.132 4.761zm-.925 0L0 5.574v9.523l8.131 4.76v-9.522zM.463 4.762L8.593 0l8.132 4.762-8.131 4.76-8.131-4.76z"/>\n        </g>\n        <defs>\n          <clipPath id="clip0">\n            <path fill="#fff" d="M0 0h17v20H0z" />\n          </clipPath>\n        </defs>\n      </svg>\n    </span>\n    <span class="name flex-grow text-left text-dark-grey break-all lg:text-lg" title="${t}" aria-label="Файл — ${t}">\n      ${this.trimFileName(t)}\n    </span>\n    <span class="icon-cross  flex-shrink-0 w-3 h-3 ml-5 transition-colors">\n      <svg fill="none" viewBox="0 0 11 11" aria-hidden="true">\n        <path\n          fill="currentColor"\n          d="M11 8.8L7.698 5.5 11 2.2 8.8 0 5.5 3.3 2.2 0 0 2.2l3.3 3.3L0 8.8 2.2 11l3.3-3.3L8.8 11 11 8.8z"\n        />\n      </svg>\n    </span>\n    `,i.addEventListener("click",this.handleClick),s.appendChild(i),s}addItemToList(e,t){this.listElm.appendChild(this.createListItem(e,t))}validation(){V(this.inputElm,B);"true"===this.inputElm.dataset.valid?this.inputElm.classList.remove("has-error"):this.inputElm.classList.add("has-error")}showWarnMsg(){const e=this.parentElm.querySelector(".js-error-msg"),t=e.textContent;e.textContent="*такой файл уже добавлен",this.inputElm.classList.add("has-error"),setTimeout((()=>{this.inputElm.classList.remove("has-error"),setTimeout((()=>{e.textContent=t}),500)}),2e3)}handleChange(e){if(Date.now()-this.lastTimeFireChange<100)return void e.preventDefault();const t=e.target;if(t.files&&t.files[0]){const e=t.files[0],s=`${e.name}-${e.lastModified}-${e.size}`;this.hasStoreItem(s)?(this.showWarnMsg(),this.resetInputFiles()):(this.addStoreItem(s,e),this.addItemToList(s,e.name),this.updateStore())}}handleClick(e){const t=e.currentTarget;this.dialog.setTitle(t.id),this.dialog.setBtnClick((()=>this.removeFile(t))),this.dialog.dialog.show()}removeFile(e){var t;this.removeStoreItem(e.id),null==(t=e.parentElement)||t.remove(),this.updateStore()}clear(){document.querySelectorAll(".js-file-input").forEach((e=>{this.removeFile(e)}))}}X([U],K.prototype,"handleChange",1),X([U],K.prototype,"handleClick",1);const Z=window.RECAPTCHA_KEY,ee="141be02a-bcf9-4842-909e-6a9eb300d4cf";let te=!1;const se=(e,t)=>{if(e.preventDefault(),te)return;const s=e.currentTarget,i=s.querySelector("button[type='submit']"),n=i.querySelector(".link__text"),o=s.action,r=Z,a=e=>{((e,t,s)=>{const i=t.textContent||"отправить";if(e.disabled)return;const n=s=>{p.to(e,{x:20,alpha:0,duration:.4,onComplete(){e.disabled=s.disabled,t.textContent=s.text,p.to(e,{x:0,alpha:1,duration:.4})}})};n({disabled:!0,text:s}),setTimeout((()=>{n({disabled:!1,text:i})}),3e3)})(i,n,"ok"===e?"спасибо":"ошибка")};if(null===(e=>e.querySelector("[required][data-valid='false']")||e.querySelector("[required]:not([data-valid])"))(s)){if(!1===(e=>"false"!==e.querySelector("input[type='file'").dataset.valid)(s))return void console.warn("Размер прикрепленных файлов больше 15мб! Форма не отправилась.");try{te=!0;const e=new FormData(s);window.grecaptcha.ready((()=>{window.grecaptcha.execute(r,{action:"form"}).then((t=>(e.append("recaptcha_response",t),fetch(o,{method:"POST",body:e}).then((e=>{if(!e.ok)throw Error(e.statusText);return e.json()})).catch((e=>{console.error("Форма не отправилась",e)}))))).then((e=>{const s=e.status.toLowerCase();return a(s),setTimeout((()=>{t()}),500),e}))}))}catch(c){console.error("Что-то не так с рекаптчей.",c),a("error")}finally{te=!1}}else l=s,Array.from(l.querySelectorAll("input")).forEach((e=>{const t=e.hasAttribute("required"),s=e.dataset.validation;s&&F(e,s),t&&void 0!==e.dataset.valid&&("true"===e.dataset.valid?e.classList.remove("has-error"):e.classList.add("has-error"))})),a("error"),console.warn("Возникла проблема с отправкой формы 😿\nЗаполните обязательные поля.");var l},ie=(e,t)=>{if(!e)return void console.error("Ошибка инициализации формы!");const s=e.querySelector("#types-data"),i=e.querySelector("#contacts-data");var n;(e=>{const t=Array.from(e.querySelectorAll("input[type='checkbox']:not(#all)")),s=e.querySelector("input[type='checkbox']#all");t.forEach((e=>{e.addEventListener("change",(()=>{s.checked&&(s.checked=!1)}))})),s.addEventListener("change",(()=>{t.forEach((e=>{e.checked&&(e.checked=!1)}))}))})(s),n=i,Array.from(n.querySelectorAll("input")).forEach((e=>{const t=e.hasAttribute("required"),s=e.dataset.validation;e.addEventListener("change",(()=>{N(e)})),s&&e.addEventListener("change",(()=>{F(e,s)})),t&&e.addEventListener("change",(()=>{void 0!==e.dataset.valid&&("true"===e.dataset.valid?e.classList.remove("has-error"):e.classList.add("has-error"))})),"tel"===e.id&&m(e,{mask:"+{7} (000) 000 00 00"})}));const o=new K(e.querySelector(".form__input-file"),t),r=()=>{const t=Array.from(i.querySelectorAll("input"));e.reset(),o.clear(),t.forEach((e=>{N(e),e.removeAttribute("data-valid")}))},l=a(se,500);e.onsubmit=e=>{e.preventDefault(),l(e,r)}},ne=()=>{if(void 0===window.grecaptcha){const e=Z,t="https://www.google.com/recaptcha/api.js?render=",s=document.createElement("script");s.src=`${t}${e}`,document.head.appendChild(s)}},oe=()=>{const e=document.querySelector("#dialog-form");if(!e)return void console.warn("Диалог формы не инициализировался. Отсутствует элемент #dialog-form");const t=e.querySelector("form.form");let s;const i=()=>{const t=document.querySelectorAll(".js-dialog-form-open"),i=e.querySelector(".dialog-close");if(!e||!t.length||!i)return void console.warn("Отсутствует элемент диалога формы или кнопка открытия!");if(k.isDesktop){const e=t[0];x(e,(()=>{i.style.width=`${e.offsetWidth}px`}))}const n=new u(e);(()=>{const t=e.querySelector("#dialog-form-scroll-container"),i=e.querySelector(".page-header");t&&k.isDesktop&&i&&(s=new $(t),E((()=>null==s?void 0:s.destroy()),(()=>{var e;null==s||s.init(),null==(e=null==s?void 0:s.getInstance())||e.addListener((e=>{e.offset.y>10?i.classList.add("is-fixed"):i.classList.remove("is-fixed")}))})))})();let o=!1;n.on("show",(()=>{o||(o=!0,ne()),P(e,k.scrollbar)})),n.on("hide",(()=>{var t;H(e,k.scrollbar),null==(t=null==s?void 0:s.getInstance())||t.scrollTo(0,0)})),t.forEach((e=>{e.addEventListener("click",(()=>{n.show()}))}))};e&&t&&(i(),ie(t,null==s?void 0:s.getInstance()))};class re{constructor(e,t=2){this.elm=e,this.wrap=this.elm.querySelector(".ticker__wrap"),this.items=this.wrap.querySelectorAll(".ticker__item"),this.duration=t,this.movePos=this.getTextSize(),this.tween=this.ticker().pause(),this.observer=null,this.init()}getTextSize(){if(0===this.items.length)return 0;const e=this.items[0],t=parseInt(window.getComputedStyle(e).getPropertyValue("margin-right"));return e.offsetWidth+t}ticker(){return r.set(this.items,{left:e=>e*this.movePos}),r.fromTo(this.items,{x:0},{x:-this.movePos,duration:this.duration,ease:"none",repeat:-1})}update(){this.movePos=this.getTextSize(),null!==this.tween&&this.tween.kill(),this.tween=this.ticker()}intersectionObserver(){return new IntersectionObserver(((e,t)=>{e.forEach((e=>{const{isIntersecting:t}=e;t?this.tween.play():this.tween.pause()}))}),{threshold:.5})}init(){this.observer=this.intersectionObserver(),this.observer.observe(this.elm);const e=a(this.update,200);window.addEventListener("resize",e.bind(this))}}class ae{constructor(e,t,s=3e3){this.speed=s,this.root=e,this.items=this.root.querySelectorAll(`.${t}`),this.size=this.items.length-1,this.curr=0,this.prev=null,this.intervalId=null,this.duration=.2,this.init()}changeSlide(){const e=this.items[this.curr],{duration:t}=this;if(null===this.prev)return r.to(e,{alpha:1,zIndex:1,duration:t}),null;const s=this.items[this.prev],i=r.timeline({duration:t});i.to(s,{alpha:0,zIndex:0}),i.to(e,{alpha:1,zIndex:1})}next(){this.changeSlide(),this.prev=this.curr,this.curr+=1,this.curr>this.size&&(this.curr=0)}autoplay(){null!==this.intervalId&&clearInterval(this.intervalId),this.intervalId=setInterval((()=>{this.next()}),this.speed)}init(){this.items.forEach(((e,t)=>{t!==this.curr&&(e.style.opacity="0")}))}}class le extends ae{constructor(...e){super(...e)}changeSlide(){const e=this.items[this.curr],{duration:t}=this;if(null===this.prev)return r.to(e,{alpha:1,zIndex:1,duration:t}),null;const s=this.items[this.prev],i=r.timeline({duration:t});i.to(s,{alpha:0,x:-20,zIndex:0}),i.fromTo(e,{alpha:0,x:-20,zIndex:0},{alpha:1,x:0,zIndex:1})}intersectionObserver(){return new IntersectionObserver((e=>{e.forEach((e=>{const{isIntersecting:t}=e;t?(clearInterval(this.intervalId),this.autoplay()):clearInterval(this.intervalId)}))}),{threshold:.5})}init(){super.init(),this.observer=this.intersectionObserver(),this.observer.observe(this.root)}}class ce{constructor(e){this.elm=e,this.imageBg=this.elm.querySelector(".page-footer__bg"),this.showImage=!0}ticker(){const e=this.elm.querySelectorAll(".ticker");e&&e.forEach((e=>new re(e,4)))}slider(){const e=this.elm.querySelector(".footer-feedback__slider");e&&new le(e,"footer-feedback__link",2e3)}toggleImageVisible(){this.showImage?this.imageBg.style.opacity="1":this.imageBg.style.opacity="0"}intersectionObserver(){return new IntersectionObserver((e=>{e.forEach((e=>{const{isIntersecting:t}=e;this.showImage=!!t,this.toggleImageVisible()}))}),{threshold:.5})}observeMenuBtnTheme(){new IntersectionObserver((e=>{e.forEach((e=>{const{isIntersecting:t}=e;t?(document.body.classList.add("menu-btn-white"),document.body.classList.add("header-feedback-white")):(document.body.classList.remove("menu-btn-white"),document.body.classList.remove("header-feedback-white"))}))}),{root:null,rootMargin:"0px 0px -60.5% 0px",threshold:.5}).observe(this.elm)}observeBtnTopTheme(){new IntersectionObserver((e=>{e.forEach((e=>{const{isIntersecting:t}=e;t?document.body.classList.add("btn-to-top-white"):document.body.classList.remove("btn-to-top-white")}))}),{root:null,rootMargin:"0px 0px 0px 0px",threshold:.2}).observe(this.elm)}init(){this.ticker(),this.slider(),this.observer=this.intersectionObserver(),this.observer.observe(this.elm),this.observeMenuBtnTheme(),this.observeBtnTopTheme()}}class de{constructor(e,t){this.elm=e,this.btn=t,this.elmChild={count:this.elm.childElementCount,children:this.elm.querySelector("li")},this.elmHeight=this.findListHeight(),this.isShow=!1,this.init()}findListHeight(){return(this.elmChild.children.offsetHeight+parseInt(window.getComputedStyle(this.elmChild.children).getPropertyValue("margin-bottom")))*this.elmChild.count}handleClick(){this.elm.style.willChange="max-height, margin-bottom",this.isShow?(this.isShow=!1,this.btn.dataset.hidden="true"):(this.isShow=!0,this.btn.dataset.hidden="false"),setTimeout((()=>r.to(this.elm,{maxHeight:this.isShow?this.elmHeight:0,duration:.3,onComplete:()=>{this.elm.style.willChange=null}})),100)}handleResize(){this.elmHeight=this.findListHeight(),parseInt(this.elm.style.maxHeight)>0&&(this.elm.style.maxHeight=`${this.elmHeight}px`)}init(){this.btn.addEventListener("click",this.handleClick.bind(this));const e=a(this.handleResize,200);window.addEventListener("resize",e.bind(this))}}class he{constructor(e,t,s,i,n=null){this.elm=e,this.elmSelector=this.elm.tagName.toLowerCase()+"."+Array.from(this.elm.classList).join("."),this.btnsOpen=t,this.btnClose=s,this.nav=i,this.isVisible=!1,this.appConfig=n,this.pageMain=document.querySelector("main"),this.pageHeader=document.querySelector(".page-header:not(.page-header--preloader)"),this.pageFooter=document.querySelector(".page-footer"),this.progressBar=document.querySelector(".progress-bar"),this.footerRedirect=document.querySelector(".footer-redirect"),this.blogTopElm=document.querySelector(".blog-deco-top"),this.blogSideElm=document.querySelector(".blog-deco-side"),this.moveTargets=[this.pageHeader,this.pageMain,this.progressBar,this.pageFooter,this.footerRedirect,this.blogTopElm,this.blogSideElm],this.moveTargets=this.moveTargets.filter((e=>null!==e)),this.elmWidth=this.elm.offsetWidth,this.scrollbarInstance=null,this.update=this.update.bind(this),this.handleClick=this.handleClick.bind(this),this.handleClickOutside=this.handleClickOutside.bind(this)}collapseSubMenu(){const e=this.nav.querySelectorAll(".page-nav__sub-list"),t=this.nav.querySelector(".page-nav__elm--selected");e.forEach((e=>{const s=e.previousElementSibling,i=new de(e,s),n=e.parentElement;s.addEventListener("click",(()=>{if(n===t)return null;i.isShow?(n.classList.add("page-nav__elm--active"),t.classList.add("page-nav__elm--disable")):(n.classList.remove("page-nav__elm--active"),t.classList.remove("page-nav__elm--disable"))}))}))}initScrollbar(){this.scrollbarInstance=new $(this.elm.querySelector(".page-menu__wrap")),this.scrollbarInstance.init()}destroyScrollbar(){this.scrollbarInstance&&this.scrollbarInstance.instance.destroy()}toggleView(e){const t=this.moveTargets,s=k.isDesktop?.1:.15,i=()=>r.to(this.elm,{x:e?0:-this.elmWidth,duration:.3,delay:s,onStart:()=>{this.elm.style.willChange="transform"},onComplete:()=>{this.elm.style.willChange=""}});k.isDesktop?r.timeline().add(i()).to(t,{x:e?this.elmWidth:0,duration:.3,delay:s,onStart:()=>{t.forEach((e=>{e.style.willChange="transform"}))},onComplete:()=>{e||(this.pageHeader.style.transform=null,this.elm.style.transform=null),t.forEach((e=>{e.style.willChange=null}))}},0).to(this.pageHeader,{alpha:e?0:1,duration:.3,delay:s,onStart(){const t=this.targets()[0];e?t.classList.add("is-menu-show"):t.classList.remove("is-menu-show")}},0):i().play()}handleClick(){this.isVisible=!this.isVisible,this.isVisible?k.scrollbar?_(k.scrollbar):h.exports.disablePageScroll(this.elm):k.scrollbar?D(k.scrollbar):h.exports.enablePageScroll(this.elm),this.toggleView(this.isVisible)}handleClickOutside(e){const t=this.btnsOpen[0];if(!this.isVisible||e.target===t||e.target.parentElement===t)return;!e.target.closest(this.elmSelector)&&this.handleClick()}addEvents(){this.btnsOpen.forEach((e=>{null==e||e.addEventListener("click",this.handleClick)})),this.btnClose.addEventListener("click",this.handleClick),k.isDesktop&&document.body.addEventListener("click",this.handleClickOutside)}update(){this.elmWidth=this.elm.offsetWidth,this.isVisible||r.set(this.elm,{x:-this.elmWidth})}desktop(){console.log("Menu - init desktop")}mobile(){}init(){this.collapseSubMenu(),this.addEvents(),this.initScrollbar()}}const me={animate:!0,patternWidth:100,patternHeight:100,grainOpacity:.1,grainDensity:1,grainWidth:1,grainHeight:1,grainChaos:.5,grainSpeed:20};class ue{constructor(e,t){try{if(this.element=e.tagName?e:void 0,!this.element)throw new Error(`Grained: cannot find the element with id ${e}`);this.elementSelector=this.getElementName(),this.options=t?o(o({},me),t):me,this.noise=this.generateNoise(),this.animation=this.createAnimation(),this.setStyle(),this.createStyleAnimation(),this.createStyleRules()}catch(s){console.error(s)}}getElementName(){const{element:e}=this,{id:t,className:s}=e;if(t)return`#${t}`;if(s)return`${e.tagName.toLowerCase()}.${s.split(" ")[0]}`;throw new Error("Can't get selector from element")}setStyle(){var e,t;"static"===(e=this.element,t="position",getComputedStyle(e).getPropertyValue(t))&&(this.element.style.position="relative"),this.element.style.overflow="hidden"}generateNoise(){const{options:e}=this,t=document.createElement("canvas"),s=t.getContext("2d");t.width=e.patternWidth,t.height=e.patternHeight;for(let i=0;i<e.patternWidth;i+=e.grainDensity)for(let t=0;t<e.patternHeight;t+=e.grainDensity){const n=256*Math.random()|0;s.fillStyle=`rgba(${[n,n,n,e.grainOpacity].join()})`,s.fillRect(i,t,e.grainWidth,e.grainHeight)}return t.toDataURL("image/png")}addCSSRule(e,t,s,i){let n="";n=t.length?`${t}{${s}}`:s,"insertRule"in e?e.insertRule(n,i):"addRule"in e&&e.addRule(t,s,i)}createAnimation(){let e="";return[{step:"0%",property:"transform:translate(-10%,10%)"},{step:"10%",property:"transform:translate(-25%,0%)"},{step:"20%",property:"transform:translate(-30%,10%)"},{step:"30%",property:"transform:translate(-30%,30%)"},{step:"40%",property:"transform:translate(-20%,20%)"},{step:"50%",property:"transform:translate(-15%,10%)"},{step:"60%",property:"transform:translate(-20%,20%)"},{step:"70%",property:"transform:translate(-5%,20%)"},{step:"80%",property:"transform:translate(-25%,5%)"},{step:"90%",property:"transform:translate(-30%,25%)"},{step:"10%",property:"transform:translate(-10%,10%)"}].forEach((t=>{e+=`${t.step}{${t.property};}`})),`@keyframes grained{${e}`}createStyleAnimation(){if(document.getElementById("grained-animation"))return;const e=document.createElement("style");e.id="grained-animation",e.innerHTML=this.animation,document.body.appendChild(e)}createStyleRules(){const{noise:e,options:t}=this,s=`\n      content: "";\n      position: absolute;\n      top: -100%;\n      left: -100%;\n      width: 300%;\n      height: 300%;\n      background-image: url(${e});\n      animation-name:grained;\n      animation-duration: ${t.grainChaos}s;\n      animation-iteration-count: infinite;\n      animation-timing-function: steps(${t.grainSpeed}, end);\n    `,i=`${this.elementSelector}::before`,n=document.createElement("style");n.id=`grained-animation-${this.elementSelector}`,document.body.appendChild(n),this.addCSSRule(n.sheet,i,s)}}const pe={animate:!0,patternWidth:145,patternHeight:118,grainOpacity:.04,grainDensity:1,grainWidth:1,grainHeight:1},ge=()=>{const e=document.querySelector(".page-preloader");let t=Array.from(document.querySelectorAll("a"));t=t.filter((e=>{const t=e.getAttribute("href"),s=e.rel;return"#"!==t.charAt(0)&&-1===t.search("mailto:")&&-1===t.search("tel:")&&!s})),r.timeline().to(e,{y:"120%",delay:2});t.forEach((t=>{t&&(t.onclick=s=>{s.preventDefault(),r.set(e,{y:"120%"}),r.timeline({onComplete(){setTimeout((()=>{var e;e=t.href,window.location.replace(e)}),1e3)}}).to(e,{y:0},"0")})}))},fe=()=>{const e=document.querySelector(".progress-bar");e&&(e=>{let t;t=void 0===k.scrollbar?document.body:k.scrollbar.contentEl,r.to(e,{scale:1,ease:"none",scrollTrigger:{trigger:t,start:"top top",end:"bottom bottom",scrub:!0}})})(e)},be=()=>{ge(),E((()=>{"Android"===k.os&&document.body.classList.add("os-android")}),(()=>{"MacOS"===k.os&&document.body.classList.add("os-mac")})),(()=>{const e=document.querySelector(".page-menu"),t=document.querySelector(".page-nav"),s=document.querySelectorAll(".js-menu-btn-open"),i=document.querySelector(".page-menu__close"),n=document.querySelectorAll(".page-menu .ticker"),o={isDesktop:k.isDesktop},r=new he(e,s,i,t,o);r.init(),n.length&&n.forEach((e=>{new re(e)})),E(r.mobile,r.desktop),x(e,r.update)})(),(()=>{const e=!(k.isDesktop&&k.scrollbar),t=document.querySelector(".page-header-fixed");if(e&&t){let e=document.documentElement.clientHeight+200,s=0,i=0,n=!1;const o=-100;t.setAttribute("aria-hidden","true"),r.set(t,{y:o,display:"block"});const l=()=>{n||(r.killTweensOf(t),n=!0,r.to(t,{y:0,force3D:!0,onStart(){r.set(t,{willChange:"transform"})}}))},c=()=>{n=!1},d=()=>{n&&(r.killTweensOf(t),r.to(t,{y:o,force3D:!0,onStart(){r.set(t,{willChange:"transform"})},onComplete(){r.set(t,{willChange:""}),c()}}))},h=t=>{i=t,0==(i>s?1:0)&&i>e?l():d(),s=i},m=a((()=>{h(document.documentElement.scrollTop)}),200);document.addEventListener("scroll",m,{passive:!0})}})(),(()=>{const e=document.querySelector(".page-footer");e&&new ce(e).init()})(),(()=>{const e=document.querySelector("#scroll-container"),t=new $(e,!0);t.init();const s=t.getInstance();if(s){const e=document.querySelector(".page-header:not(.page-header--preloader)"),t=document.querySelector("#go-to-top"),i=document.querySelector(".page-blog");let n;i&&(async()=>{const e=await b((()=>import("./blogOnScrollAnimation.270b8d9a.js")),["/assets/blogOnScrollAnimation.270b8d9a.js","/assets/vendor.5d6f67ed.js"]);n=await e.default})(),s.addListener((s=>{const o=s.offset.y;o>10?e.classList.add("is-fixed"):e.classList.remove("is-fixed"),t&&(o>200?t.classList.add("is-show"):t.classList.remove("is-show")),i&&n&&n(o)}))}})(),fe(),oe(),k.scrollbar&&k.isDesktop&&[document.body,document.querySelector(".page-menu"),document.querySelector(".page-footer"),document.querySelector(".footer-redirect"),...Array.from(document.querySelectorAll(".js-noise"))].forEach((e=>{e&&new ue(e,pe)})),k.isDesktop?b((()=>import("./invertTheme.02b5e866.js")),["/assets/invertTheme.02b5e866.js","/assets/vendor.5d6f67ed.js"]).then((({invertTheme:e})=>{e()})):b((()=>import("./scrollToTop.61864116.js")),["/assets/scrollToTop.61864116.js","/assets/vendor.5d6f67ed.js"]).then((({scrollToTop:e})=>{e()}))};function ye(){if(be(),q(L.lossy,((e,t)=>{t?document.documentElement.classList.add("webp"):document.documentElement.classList.add("no-webp")})),void 0===window.APP&&(window.APP=k),k.isDesktop)(()=>{const e=document.querySelector(".header-feedback"),t=e.querySelector(".header-feedback__bg");t.style.transform="translate(100%, -50%)";const s=new IntersectionObserver((e=>{e.forEach((e=>{const{isIntersecting:i}=e;i&&(t.style.transform="translate(0, -50%)",s.disconnect())}))}),{rootMargin:"0px",threshold:[.1,.5,1]});s.observe(e)})();else{window.addEventListener("resize",function(e){let t;function s(){let s=e.clientHeight;s!==t&&requestAnimationFrame((function(){e.style.setProperty("--vh",.01*s+"px"),t=s}))}return s(),s}(document.documentElement));-1!==navigator.appVersion.indexOf("CriOS")&&document.body.classList.add("ios-chrome")}"Windows"===k.os&&document.documentElement.classList.add("os-windows")}export{k as A,L as F,Z as R,$ as S,ae as T,ee as Y,b as _,re as a,ne as b,ie as c,q as d,P as e,H as f,ye as i,A as l,E as m,x as r};
