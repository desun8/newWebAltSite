import{W as o,g as e}from"./vendor.5e96a560.js";const t=o(Array.from(document.querySelectorAll(".blog-deco-top__item"))),r=document.querySelector(".blog-deco-top__cross");export default o=>{t&&t.length>0&&r&&(o=>{e.to([t,r],{y:(e,t)=>t===r?-1*o:o/(.55*(e+1))*-1,duration:.2,ease:"none"})})(o)};