import{i as e,A as t,_ as r,m as o}from"./root.js";import{g as i,a as n,Q as a,R as c,U as s,V as l}from"./vendor.js";import{typewriteAnimation as m}from"./typewriteAnimation.js";/* empty css          */import{w as d}from"./index2.js";a.use([c,s,l]);const u=window.matchMedia("(min-width: 48em)").matches,p=!window.matchMedia("(max-width: 48.99em)").matches,g=!window.matchMedia("(max-width: 63.99em)").matches,h=!window.matchMedia("(max-width: 47.99em)").matches;if(e(),t.isDesktop)r((()=>import("./index4.js")),["/assets/index4.js","/assets/index2.css","/assets/utils.js","/assets/submitForm.js","/assets/vendor.js","/assets/validation.js","/assets/root.js","/assets/root.css"]);else{const e=document.querySelector(".footer-redirect");e&&r((()=>import("./redirectFooter.js")),["/assets/redirectFooter.js","/assets/vendor.js"]).then((({default:t})=>{const r=new t(e);o((()=>r.initMobile()),(()=>{}))}))}h&&r((()=>import("./recruitAnimation.js")),["/assets/recruitAnimation.js","/assets/vendor.js"]).then((({recruitAnimation:e})=>{e()})),(()=>{const e=document.querySelector(".team"),t=document.querySelector(".recruit");var r,o;e&&((e=>{const t=document.querySelector(".hero");if(t){const r=t.querySelector(".hero__bg-logo");n.create({trigger:t,start:()=>`-${t.getBoundingClientRect().top} top`,end:()=>"bottom -"+.95*e.getBoundingClientRect().height,pin:r,pinSpacing:!1}),n.create({trigger:t,animation:i.to(r,{x:g?"-50%":void 0,scale:1.6,alpha:.2}),start:()=>g?"center center":"top top",scrub:!0})}})(e),t&&(r=e,o=t,n.create({trigger:r,start:"top bottom",end:()=>o?p?"bottom center":"bottom "+-.65*o.getBoundingClientRect().height:"bottom center",onToggle({isActive:e}){e?document.body.classList.add("theme-dark"):document.body.classList.remove("theme-dark")}})))})(),document.querySelectorAll(".team-card__video-container video").forEach((e=>{e&&e.querySelectorAll("source").forEach((e=>{e&&(e.src=`${e.src}#t=0.01`)}))})),(()=>{const e=window.matchMedia("(min-width: 48em)").matches,t=document.querySelector(".founder");if(!t)return;const r=t.querySelector(".founder-image__img"),o=t.querySelector(".founder-image__play"),a=t.querySelector(".founder-image__instagram"),c=t.querySelector(".founder-describe"),s=t.querySelector(".founder-boss");e?i.timeline({scrollTrigger:{trigger:t,start:"top 20%"}}).from(r,{y:50,autoAlpha:0}).from(o,{width:0,duration:.35}).from(c,{x:-50,autoAlpha:0},"-=0.4"):(i.timeline({scrollTrigger:{trigger:r,start:"top center",once:!0}}).from(r,{y:50,autoAlpha:0}).from([o,a],{width:0,duration:.35}),n.create({trigger:c,animation:i.from(c,{y:50,autoAlpha:0}),start:"top center",once:!0})),n.create({trigger:s,animation:i.to(s,{x:()=>.15*t.offsetWidth}),scrub:!0})})(),(()=>{const e=document.querySelector(".reviews");if(e){const t=e.querySelector(".swiper");if(t){const e=e=>{const t=e.querySelectorAll(".review-item__text-container");t.length&&t.forEach((e=>e.classList.remove("is-active")))};new a(t,{autoplay:{delay:7e3,disableOnInteraction:!1},loop:!0,speed:600,spaceBetween:100,pagination:{el:".reviews-carousel.swiper .swiper-pagination",clickable:!0,type:"bullets"},on:{slideChange:u?void 0:function(t){e(t.$el[0])}},breakpoints:{768:{pagination:{el:".reviews-carousel .swiper-pagination",clickable:!0,type:"fraction",renderFraction:(e,t)=>`<span class="${e}"></span> \\ <span class="${t}"></span>`},navigation:{nextEl:".reviews-carousel .swiper-button-next",prevEl:".reviews-carousel .swiper-button-prev"}}}})}if(!u){const t=e.querySelectorAll(".review-item");t.length&&t.forEach((e=>{const t=e.querySelector(".review-item__text-container"),r=e.querySelector(".review-item__show-text");t&&r&&(r.onclick=()=>t.classList.add("is-active"))}))}}})(),(()=>{const e=document.querySelector(".clients__text"),t=document.querySelector(".clients__line");e&&m(e),t&&n.create({trigger:t,start:"top 40%",toggleClass:"is-active",once:!0})})(),d(),(()=>{const e=document.querySelector(".meetups__text");e&&m(e)})();