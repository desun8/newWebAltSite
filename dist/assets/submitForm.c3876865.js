import{g as t}from"./vendor.43b1651c.js";import{v as o,s as a,h as e}from"./validation.7713ade2.js";import{l as s}from"./loadRecaptcha.c07acc4a.js";var l=l=>{let i=!1;const n=l.querySelector("input[type=email]"),r=l.querySelector(".form-field"),c=l.querySelector(".subscribe-banner-block__success"),u=l.querySelector("button[type=submit]");l.addEventListener("focusin",(()=>{s()})),l.onsubmit=e=>{e.preventDefault();const s=o(n);!i&&s&&(i=!0,(async()=>{const o=await a(l);console.log(o),t.timeline().to(r,{y:10,alpha:0,duration:.6}).set(c,{display:"block",y:10,alpha:0}).to(c,{y:0,alpha:1,duration:.6},"1").to(u,{fill:document.body.classList.contains("theme-sun")?"#ff5000":"#fff",duration:.6},"1")})())},c.onclick=()=>{t.timeline({onStart(){n.value=""},onComplete(){i=!1}}).to(c,{y:10,alpha:0,duration:.6}).set(c,{display:""}).to(r,{y:0,alpha:1,duration:.6},"1").to(u,{fill:"",duration:.6},"1")},e(n)};export{l as s};
