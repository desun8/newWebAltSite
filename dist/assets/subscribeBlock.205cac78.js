import{g as t}from"./vendor.5e96a560.js";import{v as e,s as o}from"./validation.3bd2158a.js";import{b as a}from"./root.314d2a99.js";const s=s=>{s||(s=document.querySelector(".subscribe-block"));let n=!1;if(s&&"true"!==s.dataset.isInit){s.dataset.isInit="true";const r=e=>{const o=e.textContent,a=e.dataset.message||"",s=o=>{t.to(e,{y:10,alpha:0,duration:.6,onComplete(){e.textContent=o,t.to(e,{y:0,alpha:1,duration:.6})}})};a&&(s(a),setTimeout((()=>{s(o),n=!1,u.value=""}),2400))},i=s.querySelector("form"),u=i.querySelector("input[type=email]"),c=i.querySelector(".js-text");i.addEventListener("focusin",(()=>{a()})),i.onsubmit=t=>{t.preventDefault();const a=e(u);!n&&a&&(n=!0,(async()=>{const t=await o(i);console.log(t),r(c)})())}}};export{s as initSubscribeBlock};
