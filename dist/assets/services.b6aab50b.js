import{e,g as t}from"./vendor.43b1651c.js";import{i as s,A as r}from"./root.a1a127ca.js";class i{constructor(){this.titles=document.querySelectorAll(".service-card__title svg"),this.icons=document.querySelectorAll(".service-card__link svg")}animation(e,t){t?e.classList.add("is-animation"):e.classList.remove("is-animation")}intersectionObserver(){return new IntersectionObserver((e=>{e.forEach((e=>{const{target:t,isIntersecting:s}=e;this.animation(t,s)}))}),{threshold:.5})}init(){this.observer=this.intersectionObserver(),this.titles.forEach((e=>{this.observer.observe(e)})),this.icons.forEach((e=>{this.observer.observe(e)}))}}if(s(),r.isDesktop){const s=document.querySelector(".service-banner__icon");e.create({target:s,animation:t.to(s,{rotate:10}),start:"center top",scrub:!0})}else(new i).init();
