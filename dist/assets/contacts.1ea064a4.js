import{A as e,Y as t,i as o,_ as n,m as a,a as s}from"./root.58013eb2.js";import c from"./redirectFooter.d36d1a61.js";import"./vendor.5d6f67ed.js";o();(()=>{const o=t,n=!e.isDesktop;(e=>{const t=`https://api-maps.yandex.ru/2.1/?apikey=${o}&lang=ru_RU&load=Map,Placemark,control.ZoomControl`,n=document.createElement("script");n.src=t,n.onload=()=>{e(),console.log("onload init")},document.head.appendChild(n)})((()=>{if(window.ymaps){const e=window.ymaps;e.ready((function(){const t=n?[48.460642,135.100253]:[48.46024,135.09611],o=new e.Map("map",{center:t,zoom:16,controls:["zoomControl"]});o.geoObjects.add(new e.Placemark([48.462491,135.101155],{},{iconLayout:"default#image",iconImageHref:"/images/contacts/placemark.svg",iconImageSize:[82,82],iconImageOffset:[82/-.9,-41]})),o.behaviors.disable(["scrollZoom"]),n&&o.behaviors.disable("drag")}))}else console.warn("init map")}))})(),(()=>{const e=document.querySelector(".contacts:not(.contacts--info) .time time"),t=document.querySelector(".js-time"),o=(e=>{const t=e.split(/[- :]/).map((e=>parseInt(e)));return new Date(...t)})(e.getAttribute("datetime"));let n=new Date;setInterval((()=>{(e=>{const o=`${e.getHours()}:${e.getMinutes()}`;t.textContent=o})((()=>{const e=new Date,t=e.getTime()-n.getTime();return o.setTime(o.getTime()+t),n=e,o})())}),1e3)})(),(()=>{const e=document.querySelector(".footer-redirect");if(e){const t=new c(e);a((()=>t.initMobile()),(()=>t.initDesktop()))}})(),(()=>{const e=document.querySelectorAll(".page-contacts .ticker");e.length&&e.forEach((e=>{new s(e)}))})(),e.isDesktop&&n((()=>import("./pinnedContacts.d233194d.js")),["/assets/pinnedContacts.d233194d.js","/assets/root.58013eb2.js","/assets/root.1147592e.css","/assets/vendor.5d6f67ed.js"]).then((({pinnedContacts:e})=>{e()}));