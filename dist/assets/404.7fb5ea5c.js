import{t as e,g as t}from"./vendor.5e96a560.js";import{i as o,A as i}from"./root.ca56b760.js";o(),(()=>{if(i.isDesktop&&!i.isTouchScreen){const o=document.querySelector(".image-404");if(o){let i=o.getBoundingClientRect(),s={x:i.width/2,y:i.height/2};const n=e=>{const i=-.015*e.x,s=-.015*e.y;t.to(o,{x:()=>-1*i,y:()=>-1*s,duration:.2})},c=e=>{const t=(e=>({x:e.clientX,y:e.clientY}))(e),o=(c=t.x,r=t.y,a=i.x,m=i.y,{x:c-a-(y=s).x,y:r-m-y.y});var c,r,a,m,y;n(o)};document.addEventListener("mousemove",e(c,100),{passive:!0})}}})();
