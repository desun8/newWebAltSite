import{g as t}from"./vendor.5d6f67ed.js";import{v as e,s as o}from"./validation.9c5bae80.js";import{b as s}from"./root.58013eb2.js";const a=a=>{a||(a=document.querySelector(".subscribe-block"));let n=!1;if(a&&"true"!==a.dataset.isInit){a.dataset.isInit="true";const r=e=>{const o=e.textContent,s=e.dataset.message||"",a=o=>{t.to(e,{y:10,alpha:0,duration:.6,onComplete(){e.textContent=o,t.to(e,{y:0,alpha:1,duration:.6})}})};s&&(a(s),setTimeout((()=>{a(o),n=!1,c.value=""}),2400))},i=a.querySelector("form"),c=i.querySelector("input[type=email]"),u=i.querySelector(".js-text");i.addEventListener("focusin",(()=>{s()})),i.onsubmit=t=>{t.preventDefault();const s=e(c);!n&&s&&(n=!0,(async()=>{const t=await o(i);console.log(t),r(u)})())}}};export{a as initSubscribeBlock};