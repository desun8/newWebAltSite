import{S as e,N as t,P as n}from"./vendor.3c890e9f.js";var s,i;e.use([t,n]),s=function(e){1==e?document.querySelector("body").classList.add("webp"):document.querySelector("body").classList.add("no-webp")},(i=new Image).onload=i.onerror=function(){s(2==i.height)},i.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA",document.addEventListener("DOMContentLoaded",(()=>{document.querySelector("body"),document.querySelector(".wrapper"),document.querySelector(".header"),document.querySelector(".header__burger"),document.querySelector(".menu"),document.querySelector(".menu__link");const t=document.querySelector(".clients__inner");document.addEventListener("click",(function(e){const t=e.target;t.classList.contains("getting__item","getting__btn")&&t.classList.add("active");if(!t.classList.contains("getting__descr")&&!t.classList.contains("getting__item")){const e=document.querySelectorAll(".getting__item");for(let t=0;t<e.length;t++){const n=e[t];n.classList.contains("active")&&n.classList.remove("active")}}t.classList.contains("founder__btn-rest")&&!t.classList.contains("hide")&&(t.closest(".founder__quote").querySelector(".founder__text").classList.add("active"),t.classList.add("hide"));t.classList.contains("reviews__btn-rest")&&!t.classList.contains("hide")&&(t.closest(".reviews__info").querySelector(".reviews__text").classList.add("active"),t.classList.add("hide"),r.update());if(t.classList.contains("progress-work__btn")&&!t.classList.contains("active")){const e=document.querySelectorAll(".progress-work__btn");for(let t=0;t<e.length;t++){e[t].classList.remove("active")}t.classList.add("active");const n=document.querySelectorAll(".prosressing-work");for(let t=0;t<n.length;t++){n[t].classList.remove("active")}document.querySelector("."+t.dataset.filter).classList.add("active")}})),window.addEventListener("scroll",(function(){!function(){const e=document.querySelectorAll(".getting__item");for(let t=0;t<e.length;t++){const n=e[t];n.classList.contains("active")&&n.classList.remove("active")}}()})),t.scrollLeft=500;const n=document.querySelector(".top__image");if(n){let e=function(){window.innerWidth<=991.98&&!i()&&(n.classList.add("moved"),s.append(n)),window.innerWidth>991.98&&i()&&(n.classList.remove("moved"),t.append(n))};const t=n.closest(".top__body"),s=t.querySelector(".top__info"),i=()=>n.classList.contains("moved");e(),window.addEventListener("resize",(function(){e()}))}const s=document.querySelector(".founder__image");if(s){let e=function(){window.innerWidth<=767.98&&!i()&&(s.classList.add("moved"),n.prepend(s)),window.innerWidth>767.98&&i()&&(s.classList.remove("moved"),t.prepend(s))};const t=s.closest(".founder__container"),n=t.querySelector(".founder__info"),i=()=>s.classList.contains("moved");e(),window.addEventListener("resize",(function(){e()}))}const i=document.querySelector("#applicantsPhone"),o=document.querySelector("#pricesPhone");if(i){IMask(i,{mask:"+{7}(000) 000 00 00"})}if(i){IMask(o,{mask:"+{7}(000) 000 00 00"})}const c=document.querySelectorAll("main input");for(let e=0;e<c.length;e++){c[e].addEventListener("change",(function(){this.value.length?this.classList.add("valid"):this.classList.remove("valid")}))}new JustValidate(".applicants__form",{rules:{applicantsName:{required:!0,minLength:3},applicantsPhone:{required:!0,minLength:17}},messages:{applicantsName:{required:"*это поле необходимо заполнить",minLength:"Минимум 3 символа"},applicantsPhone:{required:"*это поле необходимо заполнить",minLength:"*заполните телефон в формате +7(xxx) xxx xx xx"}},submitHundler:function(e){}});!function(e,t,n){new JustValidate(".prices__form",{rules:t,messages:n,submitHundler:function(e){}})}(0,{pricesName:{required:!0,minLength:3},pricesPhone:{required:!0,minLength:17}},{pricesName:{required:"*это поле необходимо заполнить",minLength:"Минимум 3 символа"},pricesPhone:{required:"*это поле необходимо заполнить",minLength:"*заполните телефон в формате +7(xxx) xxx xx xx"}});const r=new e(".reviews__body",{watchOverflow:!0,slidesPerView:1,grabCursor:!0,autoHeight:!0,navigation:{nextEl:".reviews__next",prevEl:".reviews__prev"},pagination:{el:".reviews__pagination",type:"bullets"},breakpoints:{991.98:{pagination:{autoHeight:!1,el:".reviews__pagination",type:"fraction"}}}});document.onmousemove=function(e){let t=e.y,n=e.x;const s=document.querySelector(".our-help__list"),i=s.getBoundingClientRect().top,o=s.getBoundingClientRect().left,c=document.querySelector(".our-help__arrow svg");let r=t-i,a=n-o,l=s.offsetHeight,d=s.offsetWidth;r>=0&&r<=l-10&&a>=0&&a<=d?(c.style.transform="translateY("+r+"px)",c.style.opacity=1):c.style.opacity=0}}));
