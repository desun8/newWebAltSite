import{i as e,A as t,_ as o,m as r}from"./root.js";import{a as s}from"./vendor.js";if(e(),(()=>{const e=document.body,t=document.querySelector(".js-dark-block"),o=document.querySelector(".js-orange-block"),r=document.querySelector(".footer-redirect");s.create({trigger:t,onToggle({isActive:t}){t?e.classList.add("theme-dark"):e.classList.remove("theme-dark")}}),s.create({trigger:o,endTrigger:r,end:()=>"bottom+=1000px bottom",onToggle({isActive:t}){t?e.classList.add("theme-sun"):e.classList.remove("theme-sun")}})})(),t.isDesktop)o((()=>import("./smmParallax.js")),["/assets/smmParallax.js","/assets/vendor.js"]).then((({smmParallax:e})=>{e()}));else{const e=document.querySelector(".footer-redirect");e&&o((()=>import("./redirectFooter.js")),["/assets/redirectFooter.js","/assets/vendor.js"]).then((({default:t})=>{const o=new t(e);r((()=>o.initMobile()),(()=>{}))}))}
