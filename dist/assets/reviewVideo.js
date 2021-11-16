import{A as e}from"./vendor.js";import{A as t,r as i,e as s,f as o}from"./root.js";const n=(e,t)=>{e.style.zIndex=t};class d{static add(e){const t=document.createElement("style");t.id="video-ios-fix",t.innerHTML=`#${e}:not(:-webkit-full-screen){display: none;}`,document.head.appendChild(t)}static remove(){const e=document.querySelector("style#video-ios-fix");e&&e.remove()}}class l{constructor(e,t){this.elm=this.create(e,t)}create(e,t){const i=document.createElement("video");return i.id="video-review",i.controls=!0,i.preload="none",i.style.width="100%",[t,e].forEach((e=>{if(e){const s=e===t,o=document.createElement("source");o.src=e,o.type=s?"video/webm":"video/mp4",i.appendChild(o)}})),i}}class a extends l{constructor(e,t){super(e,t),this.isInit=!1,this.elm.style.position="absolute"}add(){document.body.appendChild(this.elm)}remove(){this.elm.remove()}destroy(){this.isInit&&(this.isInit=!1,this.remove(),d.remove())}init(){this.isInit||(this.isInit=!0,this.add(),d.add(this.elm.id))}}class c{constructor(e,t){this.video=new a(e,t),this.video.init(),this.addEvents()}handleFullscreenchange(e){if(null===document.fullscreenElement||null===document.webkitFullscreenElement){const t=e.currentTarget;t.pause(),t.src="",t.style.display="none",n(t,"")}}addEvents(){this.video.elm.addEventListener("fullscreenchange",this.handleFullscreenchange),this.video.elm.addEventListener("webkitfullscreenchange",this.handleFullscreenchange)}removeEvents(){this.video.elm.removeEventListener("fullscreenchange",this.handleFullscreenchange),this.video.elm.removeEventListener("webkitfullscreenchange",this.handleFullscreenchange)}show(){this.video.elm.style.display="",this.video.elm.play(),void 0!==document.documentElement.requestFullscreen?(this.video.elm.requestFullscreen(),n(this.video.elm,"10")):void 0!==document.documentElement.webkitRequestFullscreen&&(this.video.elm.webkitRequestFullscreen(),n(this.video.elm,"10"))}destroy(){this.removeEvents(),this.video.destroy()}}class r{constructor(i,n){this.video=new l(i,n).elm,this.elm=this.getTemplate(),this.dialogContent=this.elm.querySelector(".dialog-content"),this.dialog=new e(this.elm),this.dialog.on("show",(()=>{const e=this.video.play();void 0!==e&&e.then((e=>{this.video.pause()})),s(this.elm,t.scrollbar)})),this.dialog.on("hide",(()=>{this.video.pause(),o(this.elm,t.scrollbar)})),this.addToDOM()}getTemplate(){const e=document.createElement("div");return e.id="video-dialog",e.classList.add("dialog-container","!z-100"),e.setAttribute("aria-labelledby","video-dialog-title"),e.setAttribute("aria-hidden","true"),e.dataset.testid="dialog",e.innerHTML='\n      \x3c!-- 2. The dialog overlay --\x3e\n      <div class="dialog-overlay  bg-true-black bg-opacity-50" data-a11y-dialog-hide></div>\n      \x3c!-- 3. The actual dialog --\x3e\n      <div class="dialog-content  relative w-4/5 mx-auto" role="document">\n        \x3c!-- 5. The dialog title --\x3e\n        <h1 id="video-dialog-title" class="sr-only">Диалог просмотра видео отзыва.</h1>\n        \x3c!-- 6. Dialog content --\x3e\n  </div>\n',e}addToDOM(){document.getElementById(this.elm.id)||(this.dialogContent.appendChild(this.video),document.body.appendChild(this.elm))}show(){this.dialog.show()}destroy(){this.dialog.destroy(),this.elm.remove()}}const h=e=>{const s={mp4:e.dataset.mp4,webm:e.dataset.webm};let o,n,d=t.isDesktop;e.addEventListener("click",(()=>{d?(n||(n=new r(s.mp4,s.webm)),n.show()):(o||(o=new c(s.mp4,s.webm)),o.show())})),i(document.documentElement,(()=>{d!==t.isDesktop&&(d=t.isDesktop,o&&(o.destroy(),o=void 0),n&&(n.destroy(),n=void 0))}))};export{h as reviewVideo};
