import{g as t}from"./vendor.js";import{v as o,s as e,h as a}from"./validation.js";import{b as s}from"./root.js";var i=i=>{let n=!1;const l=i.querySelector("input[type=email]"),r=i.querySelector(".form-field"),u=i.querySelector(".subscribe-banner-block__success"),c=i.querySelector("button[type=submit]");i.addEventListener("focusin",(()=>{s()})),i.onsubmit=a=>{a.preventDefault();const s=o(l);!n&&s&&(n=!0,(async()=>{const o=await e(i);console.log(o),t.timeline().to(r,{y:10,alpha:0,duration:.6}).set(u,{display:"block",y:10,alpha:0}).to(u,{y:0,alpha:1,duration:.6},"1").to(c,{fill:document.body.classList.contains("theme-sun")?"#ff5000":"#fff",duration:.6},"1")})())},u.onclick=()=>{t.timeline({onStart(){l.value=""},onComplete(){n=!1}}).to(u,{y:10,alpha:0,duration:.6}).set(u,{display:""}).to(r,{y:0,alpha:1,duration:.6},"1").to(c,{fill:"",duration:.6},"1")},a(l)};export{i as s};
