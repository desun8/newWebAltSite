import{g as t}from"./vendor.5d6f67ed.js";import{v as o,s as e,h as a}from"./validation.9c5bae80.js";import{b as s}from"./root.58013eb2.js";var i=i=>{let n=!1;const l=i.querySelector("input[type=email]"),r=i.querySelector(".form-field"),c=i.querySelector(".subscribe-banner-block__success"),u=i.querySelector("button[type=submit]");i.addEventListener("focusin",(()=>{s()})),i.onsubmit=a=>{a.preventDefault();const s=o(l);!n&&s&&(n=!0,(async()=>{const o=await e(i);console.log(o),t.timeline().to(r,{y:10,alpha:0,duration:.6}).set(c,{display:"block",y:10,alpha:0}).to(c,{y:0,alpha:1,duration:.6},"1").to(u,{fill:document.body.classList.contains("theme-sun")?"#ff5000":"#fff",duration:.6},"1")})())},c.onclick=()=>{t.timeline({onStart(){l.value=""},onComplete(){n=!1}}).to(c,{y:10,alpha:0,duration:.6}).set(c,{display:""}).to(r,{y:0,alpha:1,duration:.6},"1").to(u,{fill:"",duration:.6},"1")},a(l)};export{i as s};
