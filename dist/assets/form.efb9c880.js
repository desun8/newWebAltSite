import{A as e,d as t,e as a,i,_ as s}from"./root.44308594.js";import{B as l,C as n,s as r,l as o,d}from"./vendor.43b1651c.js";import{l as c}from"./loadRecaptcha.4191672e.js";import{R as h}from"./api.568479fb.js";const u=e=>e.value.trim().length>1,m=e=>e.value.trim().length==="+7 (999) 999 99 99".length,p=e=>null!==e.value.trim().match(/^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]+)])$/i),g=e=>{const t=e.files;let a=0;if(t)for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)){a+=Math.floor(t[i].size/1024/1024)}return a<=15},f=(e,t)=>{((e,t)=>{e.dataset.valid=`${t}`})(e,t(e))};var v,b;(b=v||(v={})).TEXT="text",b.TEL="tel",b.EMAIL="email";const y=(e,t)=>{let a;switch(t){case v.TEXT:a=u;break;case v.TEL:a=m;break;case v.EMAIL:a=p}a&&f(e,a)},x=e=>{""!==e.value?e.classList.add("has-value"):e.classList.remove("has-value")};function E(e,t,a){const i=a.value;return{configurable:!0,get(){return i.bind(this)}}}var L=Object.defineProperty,w=Object.getOwnPropertyDescriptor,S=(e,t,a,i)=>{for(var s,l=i>1?void 0:i?w(t,a):t,n=e.length-1;n>=0;n--)(s=e[n])&&(l=(i?s(t,a,l):s(l))||l);return i&&l&&L(t,a,l),l};class k{constructor(){this.elm=this.getTemplate(),this.dialogContent=this.elm.querySelector(".dialog-content"),this.title=this.elm.querySelector("#delete-dialog-title"),this.btnReject=this.elm.querySelector("#reject-dialog-btn"),this.btnRemove=this.elm.querySelector("#delete-dialog-btn"),this.dialog=new n(this.elm),this.dialog.on("show",(()=>{e.scrollbar?t(e.scrollbar):r.exports.disablePageScroll(this.elm)})),this.dialog.on("hide",(()=>{e.scrollbar?a(e.scrollbar):r.exports.enablePageScroll(this.elm)})),this.addHoverEvent()}getTemplate(){const e=document.createElement("div");return e.id="delete-dialog",e.classList.add("dialog-container"),e.setAttribute("aria-labelledby","delete-dialog-title"),e.setAttribute("aria-hidden","true"),e.dataset.testid="dialog",e.innerHTML='\n      \x3c!-- 2. The dialog overlay --\x3e\n      <div class="dialog-overlay  bg-true-black bg-opacity-50" data-a11y-dialog-hide></div>\n      \x3c!-- 3. The actual dialog --\x3e\n      <div class="dialog-content  grid grid-cols-2 gap-5 w-11/12 max-w-334px py-8 px-6 bg-sun uppercase" role="document">\n        \x3c!-- 5. The dialog title --\x3e\n        <h1 id="delete-dialog-title" class="sr-only" data-title="Подтвердите удаление файла -"></h1>\n        \x3c!-- 6. Dialog content --\x3e\n        <h2 class="col-span-full text-lg font-semibold text-center tracking-wide" aria-hidden="true">Точно удалить?</h2>\n        <button id="reject-dialog-btn" class="py-2 px-4 text-lg text-white font-semibold bg-black transition-colors focus:outline-none focus-visible:bg-black" type="button" aria-label="Не удалять" data-a11y-dialog-hide data-testid="dialog-no">не точно</button>\n        <button id="delete-dialog-btn" class="py-2 px-4 text-lg text-white font-semibold transition-colors focus:outline-none focus-visible:bg-black" type="button" aria-label="Удалить" data-a11y-dialog-hide data-testid="dialog-yes">точно</button>\n  </div>\n',e}handleHover(e){e.target===this.btnRemove?(this.btnRemove.focus(),this.btnReject.style.backgroundColor="transparent",this.btnRemove.style.backgroundColor="#131313"):(this.btnReject.focus(),this.btnReject.style.backgroundColor="",this.btnRemove.style.backgroundColor="")}addHoverEvent(){const e=o.exports.throttle(this.handleHover,100).bind(this);this.dialogContent.addEventListener("focusin",e,{passive:!0}),this.dialogContent.addEventListener("mouseover",e,{passive:!0}),this.dialogContent.addEventListener("mouseleave",e,{passive:!0})}addToDOM(){document.getElementById(this.elm.id)||document.body.appendChild(this.elm)}setTitle(e){this.title.textContent=`${this.title.dataset.title} ${e}`}setBtnClick(e){this.btnRemove.onclick=()=>e()}}class T{constructor(e){this.parentElm=e,this.store=new Map,this.lastTimeFireChange=0,this.maxLengthName=16,this.inputElm=this.parentElm.querySelector("input[type='file']"),this.listElm=this.parentElm.querySelector("ul"),this.inputElm.addEventListener("change",this.handleChange),this.dialog=new k,this.dialog.addToDOM()}addStoreItem(e,t){this.store.set(e,t)}hasStoreItem(e){return this.store.has(e)}removeStoreItem(e){this.store.has(e)&&this.store.delete(e)}updateStore(){this.lastTimeFireChange=Date.now(),this.updateInputFiles(),this.validation()}updateInputFiles(){let e=new DataTransfer;this.store.forEach((t=>{let a=new File([t],t.name,{type:t.type,lastModified:t.lastModified});e.items.add(a)})),this.inputElm.files=e.files}resetInputFiles(){this.inputElm.files=(new DataTransfer).files}trimFileName(e){if(e.length<=this.maxLengthName)return e;const t=e.match(/([\s\S]+)(\.\D+)$/);if(null===t)return e;const a=t[1],i=t[2],s=this.maxLengthName-i.length;return`${a.slice(0,s-2)}...${a.slice(-2)}${i}`}createListItem(e,t){const a=document.createElement("li"),i=document.createElement("button");return i.type="button",i.id=e,i.dataset.testid=e,i.classList.add("js-file-input","flex","items-center","w-full","hover:text-sun","focus-visible:text-sun","lg:w-auto"),i.innerHTML=`\n    <span class="icon-file  flex-shrink-0 w-4 h-5 mr-5 lg:w-6 lg:h-7">\n      <svg fill="none" viewBox="0 0 17 20" aria-hidden="true">\n        <g clip-path="url(#clip0)">\n          <path\n            fill="#131313"\n            d="M9.056 10.335v9.523l8.132-4.761V5.574l-8.132 4.761zm-.925 0L0 5.574v9.523l8.131 4.76v-9.522zM.463 4.762L8.593 0l8.132 4.762-8.131 4.76-8.131-4.76z"/>\n        </g>\n        <defs>\n          <clipPath id="clip0">\n            <path fill="#fff" d="M0 0h17v20H0z" />\n          </clipPath>\n        </defs>\n      </svg>\n    </span>\n    <span class="name flex-grow text-left text-dark-grey break-all lg:text-lg" title="${t}" aria-label="Файл — ${t}">\n      ${this.trimFileName(t)}\n    </span>\n    <span class="icon-cross  flex-shrink-0 w-3 h-3 ml-5 transition-colors">\n      <svg fill="none" viewBox="0 0 11 11" aria-hidden="true">\n        <path\n          fill="currentColor"\n          d="M11 8.8L7.698 5.5 11 2.2 8.8 0 5.5 3.3 2.2 0 0 2.2l3.3 3.3L0 8.8 2.2 11l3.3-3.3L8.8 11 11 8.8z"\n        />\n      </svg>\n    </span>\n    `,i.addEventListener("click",this.handleClick),a.appendChild(i),a}addItemToList(e,t){this.listElm.appendChild(this.createListItem(e,t))}validation(){f(this.inputElm,g);"true"===this.inputElm.dataset.valid?this.inputElm.classList.remove("has-error"):this.inputElm.classList.add("has-error")}showWarnMsg(){const e=this.parentElm.querySelector(".js-error-msg"),t=e.textContent;e.textContent="*такой файл уже добавлен",this.inputElm.classList.add("has-error"),setTimeout((()=>{this.inputElm.classList.remove("has-error"),setTimeout((()=>{e.textContent=t}),500)}),2e3)}handleChange(e){if(Date.now()-this.lastTimeFireChange<100)return void e.preventDefault();const t=e.target;if(t.files&&t.files[0]){const e=t.files[0],a=`${e.name}-${e.lastModified}-${e.size}`;this.hasStoreItem(a)?(this.showWarnMsg(),this.resetInputFiles()):(this.addStoreItem(a,e),this.addItemToList(a,e.name),this.updateStore())}}handleClick(e){const t=e.currentTarget;this.dialog.setTitle(t.id),this.dialog.setBtnClick((()=>this.removeFile(t))),this.dialog.dialog.show()}removeFile(e){var t;this.removeStoreItem(e.id),null==(t=e.parentElement)||t.remove(),this.updateStore()}clear(){document.querySelectorAll(".js-file-input").forEach((e=>{this.removeFile(e)}))}}S([E],T.prototype,"handleChange",1),S([E],T.prototype,"handleClick",1);let C=!1;const q=e=>{window.onbeforeunload=function(t){(()=>{const t=new FormData(e);let a=!0;return t.forEach(((e,t)=>{a&&(a="file"===t?""===e.name:""===e)})),a})()||(t.preventDefault(),t.returnValue="")}};i();const _=document.querySelector(".form"),A=_.querySelector("#types-data"),j=_.querySelector("#contacts-data");var I;q(_),(e=>{const t=Array.from(e.querySelectorAll("input[type='checkbox']:not(#all)")),a=e.querySelector("input[type='checkbox']#all");t.forEach((e=>{e.addEventListener("change",(()=>{a.checked&&(a.checked=!1)}))})),a.addEventListener("change",(()=>{t.forEach((e=>{e.checked&&(e.checked=!1)}))}))})(A),I=j,Array.from(I.querySelectorAll("input")).forEach((e=>{const t=e.hasAttribute("required"),a=e.dataset.validation;e.addEventListener("change",(()=>{x(e)})),a&&e.addEventListener("change",(()=>{y(e,a)})),t&&e.addEventListener("change",(()=>{void 0!==e.dataset.valid&&("true"===e.dataset.valid?e.classList.remove("has-error"):e.classList.add("has-error"))})),"tel"===e.id&&l(e,{mask:"+{7} (000) 000 00 00"})}));const D=new T(_.querySelector(".form__input-file")),z=()=>{const e=Array.from(j.querySelectorAll("input"));_.reset(),D.clear(),e.forEach((e=>{x(e),e.removeAttribute("data-valid")}))},M=o.exports.throttle(((e,t)=>{if(e.preventDefault(),C)return;const a=e.currentTarget,i=a.querySelector("button[type='submit']"),s=i.querySelector(".link__text"),l=a.action,n=h,r=e=>{((e,t,a)=>{const i=t.textContent||"отправить";if(e.disabled)return;const s=a=>{d.to(e,{x:20,alpha:0,duration:.4,onComplete(){e.disabled=a.disabled,t.textContent=a.text,d.to(e,{x:0,alpha:1,duration:.4})}})};s({disabled:!0,text:a}),setTimeout((()=>{s({disabled:!1,text:i})}),3e3)})(i,s,"ok"===e?"спасибо":"ошибка")};if(null===(e=>e.querySelector("[required][data-valid='false']")||e.querySelector("[required]:not([data-valid])"))(a)){if(!1===(e=>"false"!==e.querySelector("input[type='file'").dataset.valid)(a))return void console.warn("Размер прикрепленных файлов больше 15мб! Форма не отправилась.");try{C=!0;const e=new FormData(a);window.grecaptcha.ready((()=>{window.grecaptcha.execute(n,{action:"form"}).then((t=>{e.append("recaptcha_response",t),fetch(l,{method:"POST",body:e}).then((e=>{if(!e.ok)throw Error(e.statusText);return e.json()})).catch((e=>{console.error("Форма не отправилась",e)}))})).then((e=>(r(e.status),setTimeout((()=>{t()}),500),e)))}))}catch(c){console.error("Что-то не так с рекаптчей.",c),r("error")}finally{C=!1}}else o=a,Array.from(o.querySelectorAll("input")).forEach((e=>{const t=e.hasAttribute("required"),a=e.dataset.validation;a&&y(e,a),t&&void 0!==e.dataset.valid&&("true"===e.dataset.valid?e.classList.remove("has-error"):e.classList.add("has-error"))})),r("error"),console.warn("Возникла проблема с отправкой формы 😿\nЗаполните обязательные поля.");var o}),500);_.onsubmit=e=>{e.preventDefault(),M(e,z)},e.isDesktop?(s((()=>import("./index.912f805a.js")),["/assets/index.912f805a.js","/assets/index.6fcfe337.css","/assets/submitForm.053fc2be.js","/assets/vendor.43b1651c.js","/assets/validation.de723758.js","/assets/api.568479fb.js","/assets/loadRecaptcha.4191672e.js"]),s((()=>import("./addScrollAnimation.f4bb7c4d.js")),["/assets/addScrollAnimation.f4bb7c4d.js","/assets/vendor.43b1651c.js"]).then((({addScrollAnimation:e})=>{e()}))):s((()=>import("./subscribeBlock.45d9e44d.js")),["/assets/subscribeBlock.45d9e44d.js","/assets/vendor.43b1651c.js","/assets/validation.de723758.js","/assets/api.568479fb.js","/assets/loadRecaptcha.4191672e.js"]).then((({initSubscribeBlock:e})=>{e()})),c();
