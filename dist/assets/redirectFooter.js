import{g as e}from"./vendor.js";export default class{constructor(e,t=5){this.$elms={root:e,title:e.querySelector(".footer-redirect__title"),linkName:e.querySelector(".footer-redirect__link-name"),linkIcon:e.querySelector(".footer-redirect__link-name .link__arrow"),counter:e.querySelector(".footer-redirect__counter-wrap"),svgGradientTop:e.querySelector("svg stop#anim-grad-color-active-top"),svgGradientBottom:e.querySelector("svg stop#anim-grad-color-active-bottom")},this.duration=Math.floor(t),this.shouldPlay=!1,this.textTween=void 0,this.counterTween=void 0,this.isStart=!1,this.tickingHover=!1,this.handleMouseOver=this.handleMouseOver.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this)}animationGradient(){const t={init:0,to:100};this.textTween=e.to(t,{init:t.to,duration:this.duration,ease:"none",onUpdate:()=>{requestAnimationFrame((()=>{if(APP.isDesktop)if(this.$elms.title.style.background=`linear-gradient(90deg, var(--c-red) ${t.init}%, var(--redirect-color) ${t.init}%)`,this.$elms.title.style.webkitBackgroundClip="text",t.init>=88){const e=12,i=(e-(t.to-t.init))/(e/100);this.$elms.linkName.style.background=`linear-gradient(90deg, var(--c-red) ${i}%, var(--redirect-color) ${i}%)`,this.$elms.linkName.style.webkitBackgroundClip="text",i>99&&(this.$elms.linkIcon.style.fill="var(--c-red)")}else{const e=0;this.$elms.linkName.style.background=`linear-gradient(90deg, var(--c-red) ${e}%, var(--redirect-color) ${e}%)`,this.$elms.linkName.style.webkitBackgroundClip="text"}}))}})}makeCounterElms(){const e=e=>{const t=document.createElement("div");t.innerHTML=e,this.$elms.counter.appendChild(t)},t=[];for(let i=this.duration;i>=0;i--)0===i?t.push('<svg viewBox="0 0 99 144" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.932 143.65c.327.228.715.351 1.115.351a1.953 1.953 0 001.734-2.8c-11.962-39.94 5.8-59.187 13.395-65.297-.64 25.782 13.236 45.119 13.91 45.968a1.964 1.964 0 002.134.714c4.016-1.212 10.178-5.208 13.974-7.807-1.061 10.338-5.408 26.516-5.457 26.695a1.956 1.956 0 001.38 2.396 1.963 1.963 0 001.685-.334c.85-.658 20.807-16.301 27.235-42.605 6.502-26.512-11.705-52.404-12.42-53.482a1.958 1.958 0 00-2.718-.473 1.967 1.967 0 00-.82 1.775 68.617 68.617 0 01-8.844 37.646c1.188-6.958 1.796-17.203.624-32.132C69.868 16.655 35.707.34 35.36.184a1.945 1.945 0 00-2.591.947c-.155.33-.213.706-.168 1.069 1.98 15.448-1.624 22.271-11.26 40.507C17.439 50.06 12.615 59.22 6.828 71.45c-20.635 43.654 18.7 71.925 19.104 72.199zM10.326 73.12C16.075 60.959 20.9 51.846 24.76 44.51 33.773 27.45 37.92 19.61 36.83 5.425c8.22 4.898 29.818 20.415 32.05 49.123 2.004 25.7-1.298 36.711-3.428 40.988a8.221 8.221 0 01-1.188 1.874 1.953 1.953 0 00.033 2.759 1.95 1.95 0 002.673.049 70.542 70.542 0 0018.01-44.483c4.874 8.971 12.506 26.77 8.22 44.356-4.228 17.305-14.929 29.994-21.145 36.189 1.73-7.167 4.24-18.692 4.24-25.345a1.954 1.954 0 00-1.946-1.955c-.42 0-.824.131-1.16.38-.105.081-9.109 6.734-14.802 9.023-3.106-4.771-14.003-23.496-12.105-46.216a1.945 1.945 0 00-1.775-2.106 1.9 1.9 0 00-1.135.249c-.29.18-31.496 18.598-19.794 66.317-9.428-8.71-28.415-31.389-13.224-63.505h-.028z" fill="#FF5000"/></svg>'):t.push(i);t.forEach((t=>e(t)))}animationCounter(){const t=-1*(100-100/(this.duration+1));this.counterTween=e.to(this.$elms.counter,{y:`${t}%`,duration:this.duration,ease:"none"})}start(e=!1){void 0===this.textTween&&this.animationGradient(),this.textTween.duration(this.duration),this.textTween.play(),e||(void 0===this.counterTween&&this.animationCounter(),this.counterTween.duration(this.duration),this.counterTween.play())}stop(){this.textTween&&(this.textTween.duration(1),this.textTween.reverse(),this.$elms.linkIcon.style.fill=null),this.counterTween&&(this.counterTween.duration(1),this.counterTween.reverse())}intersectionObserver(){const t=Array.from(Array(20).keys()).map((e=>e/20)).filter((e=>e>.2&&e<.8));return new IntersectionObserver((t=>{t.forEach((t=>{const{intersectionRatio:i}=t;let s=100*(i>.7?1:i>.3?i:0);e.to(this.$elms.svgGradientTop,{attr:{offset:1.36*s+"%"},duration:.3,ease:"none"}),this.$elms.svgGradientBottom&&e.to(this.$elms.svgGradientBottom,{attr:{offset:`${s}%`},duration:.3,ease:"none"})}))}),{threshold:t})}handleMouseOver(){this.tickingHover||this.isStart||(requestAnimationFrame((()=>{this.isStart=!0,this.start(),this.tickingHover=!1})),this.tickingHover=!0)}handleMouseLeave(){!this.tickingHover&&this.isStart&&(requestAnimationFrame((()=>{this.isStart=!1,this.stop(),this.tickingHover=!1})),this.tickingHover=!0)}addEvents(){this.$elms.root.addEventListener("mouseover",this.handleMouseOver),this.$elms.root.addEventListener("mouseleave",this.handleMouseLeave)}removeEvents(){this.$elms.root.removeEventListener("mouseover",this.handleMouseOver),this.$elms.root.removeEventListener("mouseleave",this.handleMouseLeave)}initDesktop(){this.stop(),this.makeCounterElms(),this.addEvents()}initMobile(){this.stop(),this.removeEvents(),this.observer=this.intersectionObserver(),this.observer.observe(this.$elms.root)}init(){this.makeCounterElms(),this.addEvents()}}
