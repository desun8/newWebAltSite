import{S as e,N as t,P as s,I as o,J as i}from"./vendor.js";const n=window.RECAPTCHA_KEY;e.use([t,s]);class l{constructor(e,t,s=n){this.formEl=e,this.formInputElms=this.formEl.querySelectorAll("input"),this.submitBtn=this.formEl.querySelector("button[type=submit]"),this.validationRules=t,this.recaptchaKey=s,this.formEl&&this.validationRules&&this.recaptchaKey?this.init():console.error(`Не верный селектор: ${e}.`)}addValidation(){this.validation=new i(this.formEl),this.validationRules.forEach((e=>{this.validation.addField(e.field,e.rules)}))}addSubmitEvent(){this.formEl.addEventListener("submit",(e=>{e.preventDefault();this.validation.isValid&&this.handleSubmit()}))}handleSubmit(){const e=this.recaptchaKey,t=this.formEl.action,s=new FormData(this.formEl),o={method:"POST",body:s},i=e=>{if(!e.ok)throw Error(e.statusText);return e.json()},n=e=>{if("ok"!==e.status.toLowerCase())throw Error(e.message);return this.showSuccessMsg(),this.resetForm(),e};return new Promise((function(l,c){window.grecaptcha.ready((()=>{window.grecaptcha.execute(e,{action:"form"}).then((e=>(s.append("recaptcha_response",e),fetch(t,o).then(i).then(n).catch((e=>console.error("Форма не отправилась",e)))))).then((()=>{l("success")}))}))}))}resetForm(){this.formInputElms.length&&this.formInputElms.forEach((e=>{e.value="",e.classList.remove("valid","just-validate-error-field")}))}showSuccessMsg(){if(this.submitBtn){const e=this.submitBtn.querySelector(".link__text");if(e){const t=e.offsetWidth,s="Спасибо!",o=e.textContent;e.disabled=!0,e.style.transition="all 300ms",e.style.opacity="0",setTimeout((()=>{e.style.width=t+"px",e.style.textAlign="right",e.textContent=s,setTimeout((()=>{e.style.opacity="",setTimeout((()=>{e.style.opacity="0",setTimeout((()=>{e.style.width="",e.style.textAlign="",e.textContent=o,setTimeout((()=>{e.style.opacity="",e.disabled=!1}),100)}),300)}),1500)}),100)}),300)}}}init(){this.addValidation(),this.addSubmitEvent()}}var c,a;c=function(e){1==e?document.querySelector("body").classList.add("webp"):document.querySelector("body").classList.add("no-webp")},(a=new Image).onload=a.onerror=function(){c(2==a.height)},a.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA",document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelector("body");document.querySelector(".wrapper"),document.querySelector(".header"),document.querySelector(".header__burger"),document.querySelector(".menu"),document.querySelector(".menu__link");const s=document.querySelector(".clients__inner");document.addEventListener("click",(function(e){const s=e.target;s.classList.contains("getting__item","getting__btn")&&s.classList.add("active");if(!s.classList.contains("getting__descr")&&!s.classList.contains("getting__item")){const e=document.querySelectorAll(".getting__item");for(let t=0;t<e.length;t++){const s=e[t];s.classList.contains("active")&&s.classList.remove("active")}}s.classList.contains("founder__btn-rest")&&!s.classList.contains("hide")&&(s.closest(".founder__quote").querySelector(".founder__text").classList.add("active"),s.classList.add("hide"));s.classList.contains("reviews__btn-rest")&&!s.classList.contains("hide")&&(s.closest(".reviews__info").querySelector(".reviews__text").classList.add("active"),s.classList.add("hide"),f.update());s.classList.contains("work-context__btn-rest")&&!s.classList.contains("hide")&&(s.closest(".work-context__item").querySelector(".work-context__descr").classList.add("active"),s.classList.add("hide"),r.update());if(s.classList.contains("progress-work__btn")&&!s.classList.contains("active")){const e=document.querySelectorAll(".progress-work__btn");for(let s=0;s<e.length;s++){e[s].classList.remove("active")}s.classList.add("active");const t=document.querySelectorAll(".prosressing-work");for(let s=0;s<t.length;s++){t[s].classList.remove("active")}document.querySelector("."+s.dataset.filter).classList.add("active")}s.classList.contains("examples__link")&&(t.classList.add("lock"),s.closest(".examples__item").querySelector(".examples__lightbox").classList.add("open"));s.classList.contains("examples__badge")&&(t.classList.add("lock"),s.closest(".examples__item").querySelector(".examples__lightbox").classList.add("open"));s.classList.contains("examples__lightbox")&&(t.classList.remove("lock"),s.classList.remove("open"));s.classList.contains("examples__image")&&(t.classList.remove("lock"),s.closest(".examples__lightbox").classList.remove("open"));s.classList.contains("examples-style__image")&&(t.classList.add("lock"),s.closest(".examples-style__item").querySelector(".examples-style__lightbox").classList.add("open"));s.classList.contains("examples-style__lightbox")&&(t.classList.remove("lock"),s.classList.remove("open"));s.classList.contains("examples-style__lightbox-img")&&(t.classList.remove("lock"),s.closest(".examples-style__lightbox").classList.remove("open"));s.classList.contains("development__button")&&(s.classList.add("hidden"),s.closest(".development__body").classList.add("visible"),s.closest(".development__body").querySelector(".development__wrapper").classList.add("visible"));s.classList.contains("development__btn")&&(s.closest(".development-sections").querySelector(".progress-work").classList.add("visible"),s.closest(".development-sections").querySelector(".development").classList.add("hidden"));if(!s.classList.contains("progress-work__btn")&&!s.classList.contains("progress-work__btn-popup")&&!s.classList.contains("development__btn")){const e=document.querySelector(".progress-work"),t=document.querySelector(".development");e&&e.classList.contains("visible")&&(e.classList.remove("visible"),t.classList.remove("hidden"))}if(s.classList.contains("work-context__btn")){const e=document.querySelectorAll(".work-context__btn");for(let o=0;o<e.length;o++){const t=e[o];t.classList.contains("active")&&(t.classList.remove("active"),s.classList.add("active"))}const t=s.dataset.filter;r.slideTo(t,300)}})),window.addEventListener("scroll",(function(){!function(){const e=document.querySelectorAll(".getting__item");for(let t=0;t<e.length;t++){const s=e[t];s.classList.contains("active")&&s.classList.remove("active")}}()})),s.scrollLeft=500;const i=document.querySelector(".top__image");if(i){let e=function(){window.innerWidth<=991.98&&!o()&&(i.classList.add("moved"),s.append(i)),window.innerWidth>991.98&&o()&&(i.classList.remove("moved"),t.append(i))};const t=i.closest(".top__body"),s=t.querySelector(".top__info"),o=()=>i.classList.contains("moved");e(),window.addEventListener("resize",(function(){e()}))}const n=document.querySelector(".founder__image");if(n){let e=function(){window.innerWidth<=767.98&&!o()&&(n.classList.add("moved"),s.prepend(n)),window.innerWidth>767.98&&o()&&(n.classList.remove("moved"),t.prepend(n))};const t=n.closest(".founder__container"),s=t.querySelector(".founder__info"),o=()=>n.classList.contains("moved");e(),window.addEventListener("resize",(function(){e()}))}const c=document.querySelector("#applicantsPhone"),a=document.querySelector("#pricesPhone"),d=document.querySelector("#developedPhone"),u=document.querySelector("#whyContextPhone"),m=document.querySelector("#smmPhone");if(c){o(c,{mask:"+{7}(000) 000 00 00"})}if(a){o(a,{mask:"+{7}(000) 000 00 00"})}if(d){o(d,{mask:"+{7}(000) 000 00 00"})}if(u){o(u,{mask:"+{7}(000) 000 00 00"})}if(m){o(m,{mask:"+{7}(000) 000 00 00"})}const _=document.querySelectorAll("main input");for(let e=0;e<_.length;e++){_[e].addEventListener("change",(function(){this.value.length?this.classList.add("valid"):this.classList.remove("valid")}))}const p=document.querySelector(".applicants__form");p&&new l(p,[{field:"#applicantsName",rules:[{rule:"minLength",value:3,errorMessage:"*это поле необходимо заполнить"}]},{field:"#applicantsPhone",rules:[{rule:"minLength",value:17,errorMessage:"*это поле необходимо заполнить"}]}]);const h=document.querySelector(".form-box__form");h&&new l(h,[{field:"#smmName",rules:[{rule:"minLength",value:3,errorMessage:"*это поле необходимо заполнить"}]},{field:"#smmPhone",rules:[{rule:"minLength",value:17,errorMessage:"*это поле необходимо заполнить"}]}]);const v=document.querySelector(".development__form");v&&new l(v,[{field:"#developedName",rules:[{rule:"minLength",value:3,errorMessage:"*это поле необходимо заполнить"}]},{field:"#developedPhone",rules:[{rule:"minLength",value:17,errorMessage:"*это поле необходимо заполнить"}]}]);const f=new e(".reviews__body",{watchOverflow:!0,slidesPerView:1,grabCursor:!0,autoHeight:!0,navigation:{nextEl:".reviews__next",prevEl:".reviews__prev"},pagination:{el:".reviews__pagination",type:"bullets"},breakpoints:{991.98:{pagination:{autoHeight:!1,el:".reviews__pagination",type:"fraction"}}}}),L=document.querySelector(".our-help__list");L&&(document.onmousemove=function(e){let t=e.y,s=e.x;const o=L.getBoundingClientRect().top,i=L.getBoundingClientRect().left,n=document.querySelector(".our-help__arrow svg");let l=t-o,c=s-i,a=L.offsetHeight,r=L.offsetWidth;l>=0&&l<=a-10&&c>=0&&c<=r?(n.style.transform="translateY("+l+"px)",n.style.opacity=1):n.style.opacity=0})}));const r=new e(".work-context__slider",{watchOverflow:!0,slidesPerView:1,grabCursor:!0,autoHeight:!0,pagination:{el:".work-context__pagination",type:"bullets"}});r.on("slideChange",(function(){let e=this.realIndex;const t=document.querySelectorAll(".work-context__btn");for(let s=0;s<t.length;s++){const o=t[s];if(o.classList.remove("active"),o.dataset.filter==e){o.classList.add("active");const e=o.getBoundingClientRect().left;document.querySelector(".work-context__wrapper").scrollBy({left:e-50,behavior:"smooth"})}}}));document.querySelector(".work-context__wrapper")&&function(){let e=document.querySelector(".work-context__wrapper"),t=0,s=!1,o=0;e.addEventListener("mousedown",(function(e){s=!0,o=e.pageX-this.offsetLeft})),document.addEventListener("mouseup",(function(){s=!1,t=e.scrollLeft})),e.addEventListener("mousemove",(function(e){s&&(this.scrollLeft=t-1*(e.pageX-this.offsetLeft-o))}))}(),new e(".composition__image.swiper",{watchOverflow:!0,slidesPerView:1,grabCursor:!0,autoHeight:!0,navigation:{nextEl:".composition__btn--next",prevEl:".composition__btn--prev"},pagination:{el:".composition__pagination",type:"fraction"}});
