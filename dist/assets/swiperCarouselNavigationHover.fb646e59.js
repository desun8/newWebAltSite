import{g as t}from"./vendor.14e0bc55.js";import{r as e,A as r}from"./root.601d2fac.js";import{g as o,l as s}from"./utils.5f3990ab.js";const i=()=>{const i=document.querySelector(".wysiwyg-gallery-carousel"),l=i.querySelector(".wysiwyg-gallery-carousel .swiper-button-next"),n=i.querySelector(".wysiwyg-gallery-carousel .swiper-button-prev");if(l&&n){let c={x:0,y:0},u=i.getBoundingClientRect();e(i,(()=>{u=i.getBoundingClientRect()}));const a={tx:{previous:0,current:0,amt:.2},ty:{previous:0,current:0,amt:.2}},y=(e,r,o)=>{let s;if(e>0&&(s=l),e<0&&(s=n),s){const e=.8;t.killTweensOf(s),t.to(s,{x:r,y:o,duration:e})}};i.addEventListener("mousemove",(t=>{c=o(t);const e=r.scrollbar.scrollTop;let i=0,l=0;if(c.y+e>=u.top+u.height/2){i=.3*(c.x+window.scrollX-(u.left+u.width/2)),l=.3*(c.y+e-(u.top+u.height/2));const t=1.5*u.left;a.tx.current=Math.abs(i)>t?t*(i/Math.abs(i)):i,a.ty.current=l;for(const e in a)a[e].previous=s(a[e].previous,a[e].current,a[e].amt);y(a.tx.previous,-1*a.tx.previous,-1*a.ty.previous)}}),{passive:!0})}};export{i as swiperCarouselNavigationHover};
