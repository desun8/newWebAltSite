import{g as t}from"./vendor.js";import{v as o,s as e,h as a}from"./validation.js";var l=l=>{let s=!1;const i=l.querySelector("input[type=email]"),n=l.querySelector(".form-field"),r=l.querySelector(".subscribe-banner-block__success"),u=l.querySelector("button[type=submit]");l.onsubmit=a=>{a.preventDefault();const c=o(i);!s&&c&&(s=!0,(async()=>{const o=await e(l);console.log(o),t.timeline().to(n,{y:10,alpha:0,duration:.6}).set(r,{display:"block",y:10,alpha:0}).to(r,{y:0,alpha:1,duration:.6},"1").to(u,{fill:document.body.classList.contains("theme-sun")?"#ff5000":"#fff",duration:.6},"1")})())},r.onclick=()=>{t.timeline({onStart(){i.value=""},onComplete(){s=!1}}).to(r,{y:10,alpha:0,duration:.6}).set(r,{display:""}).to(n,{y:0,alpha:1,duration:.6},"1").to(u,{fill:"",duration:.6},"1")},a(i)};export{l as s};
