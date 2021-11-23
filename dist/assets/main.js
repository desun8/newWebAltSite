var t=Object.defineProperty,e=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(e,s,i)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i;import{A as l,T as h,a,_ as c,i as m}from"./root.js";import{t as d,g as u,d as p,c as g,a as b}from"./vendor.js";import v from"./redirectFooter.js";class y{constructor(t,e){this.elms=Array.from(t),this.parent=e,this.isFirst=!0,this.throttleScroll=d(this.handleScroll,200),this.throttleScroll=this.throttleScroll.bind(this)}animation(){let{top:t}=this.parent.getBoundingClientRect();if(t<100&&(t=100),t=t/2>500?500:Math.floor(t/2),this.isFirst)return this.isFirst=!1,u.set(this.elms,{y:t}),null;u.to(this.elms,{y:t,duration:.4,delay:t=>t/10})}handleScroll(t){this.animation()}addEvent(){window.addEventListener("wheel",this.throttleScroll,{passive:!0})}removeEvent(){window.removeEventListener("wheel",this.throttleScroll,{passive:!0})}desktop(){this.init()}mobile(){this.removeEvent()}init(){this.animation(),this.addEvent()}}class k{constructor(){this.body=document.body,this.elms=[{target:document.querySelector(".block--seo"),className:"theme-dark"},{target:document.querySelector(".block--design"),className:"theme-sun"}],this.state={in:"",out:""},this.observer=null,this.options={threshold:l.isDesktop?.42:.25}}animation(t,e,s=!1){requestAnimationFrame((()=>{s?(t.classList.add(e),this.body.classList.add(e)):(t.classList.remove(e),this.body.classList.remove(e))}))}isVisible(t){let{state:e}=this;t.forEach((t=>{const s=this.elms.filter((e=>e.target===t.target))[0],{target:i,className:o}=s;t.isIntersecting?(e.in=i,this.animation(i,o,!0)):(e.out=i,document.body.classList.remove(o),i.classList.remove(o),e.in===e.out&&this.animation(i,o))}))}init(){this.observer=new IntersectionObserver(this.isVisible.bind(this),this.options),this.elms.forEach((t=>this.observer.observe(t.target)))}}class f extends class{constructor(t){this.elm=t,this.chars=null,this.isComplete=!1,this.tween=null}splitting(){p({target:this.elm,by:"chars"});const t=this.elm.querySelector(".link__icon"),e=this.elm.querySelectorAll(".whitespace");t&&e&&(t.dataset.char="char",e.forEach((t=>t.dataset.char="char")))}getChars(){this.chars=this.elm.querySelectorAll("*[data-char]")}animation(t){return u.from(t,{alpha:0,duration:.01,stagger:{each:.1},ease:"none",onStart:()=>{this.elm.style.opacity="1",this.isComplete=!1},onComplete:()=>this.isComplete=!0})}play(){this.tween.restart()}pause(){this.tween.pause()}init(){this.elm.dataset.typewrite="true",this.elm.style.opacity="0",this.splitting(this.elm),this.getChars(),this.tween=this.animation(this.chars).paused(!0)}}{constructor(...t){var l;super(...t),this.cursorConfig=(l=((t,e)=>{for(var s in e||(e={}))o.call(e,s)&&n(t,s,e[s]);if(i)for(var s of i(e))r.call(e,s)&&n(t,s,e[s]);return t})({},this.getLinesCount()),e(l,s({prevY:0,styles:{height:15}})))}getLinesCount(){const t=this.elm.offsetHeight,e=Math.round(parseFloat(window.getComputedStyle(this.elm).getPropertyValue("line-height")));return{lines:Math.round(t/e),lineHeight:e}}createCursor(){const t=this.cursorConfig.styles.height,e=document.createElement("span");e.style.cssText=`position: absolute; top: 0; left: 0; width: 5px; height: ${t}px; border: 1px solid #000; margin-left: 15px`,this.elm.style.position="relative",this.elm.appendChild(e),this.cursor=e}getLinesPos(){const{lines:t,lineHeight:e,styles:s}=this.cursorConfig,i=(e-s.height)/2,o=[];for(let r=0;r<t;r++)o.push(r*e+i);return o}updateCursorPosY(t,e){const s=Math.abs(t-e),i=this.getLinesPos();let o=0;return i.some((t=>{if(s<=t+5)return o=t,!0})),o}updateCursorPosX(t,e){return t-e}updateCursorPos(t){const e=this.elm.getBoundingClientRect(),s=t.getBoundingClientRect();return{x:this.updateCursorPosX(s.x,e.x),y:this.updateCursorPosY(s.y,e.y)}}animationCursor(t={x:0,y:0}){const{x:e,y:s}=t;u.to(this.cursor,{x:e,y:s,duration:.05,ease:"none"})}animation(t){let{updateCursorPos:e,animationCursor:s}=this;return e=e.bind(this),s=s.bind(this),u.from(t,{alpha:0,duration:.01,ease:"none",stagger:{each:.1,onStart(){const t=this.targets()[0],i=e(t);s(i)}},onStart:()=>{u.set(this.cursor,{x:0,y:0}),this.elm.style.opacity="1",this.isComplete=!1},onComplete:()=>{this.isComplete=!0}})}init(){this.createCursor(),super.init()}}class S extends h{constructor(...t){super(...t),this.itemsText=Array.from(this.items).map((t=>t.querySelector("*"))),this.instances=this.itemsText.map((t=>{const e=new f(t);return e.init(),e}))}autoplay(){null!==this.intervalId&&clearInterval(this.intervalId);const{curr:t}=this,e=this.itemsText[t],s=this.instances[t];s.isComplete&&(s.isComplete=!1),e.style.opacity="0",super.next(),setTimeout((()=>s.play()),1e3),this.intervalId=setInterval((()=>{s.isComplete&&(clearInterval(this.intervalId),s.isComplete=!1,setTimeout((()=>this.autoplay()),this.speed))}),20)}intersectionObserver(){return new IntersectionObserver((t=>{t.forEach((t=>{const{isIntersecting:e}=t;e?(clearInterval(this.intervalId),this.autoplay()):clearInterval(this.intervalId)}))}),{threshold:.5})}init(){super.init(),this.observer=this.intersectionObserver(),this.observer.observe(this.root)}}class w{constructor(t){this.elms=t,this.observer=null,this.options={threshold:.4},this.init()}animation(t,e=0){const s={val:0};u.to(s,{val:e,roundProps:"val",duration:1,onUpdate(){t.innerHTML=s.val},onComplete(){t.dataset.completed="true"}})}isVisible(t,e){t.forEach((t=>{const{isIntersecting:e,target:s}=t;if("true"===s.dataset.completed)return!1;e&&this.animation(s,s.innerHTML)}))}init(){this.observer=new IntersectionObserver(this.isVisible.bind(this),this.options),this.elms.forEach((t=>this.observer.observe(t)))}}class E{constructor(){this.root=document.querySelector(".block--awards"),this.wrap=this.root.querySelector(".block__lists"),this.elms=document.querySelectorAll(".awards-list"),this.img=document.querySelector(".awards-list-bg"),this.imgBg=this.img.querySelector(".awards-list-bg__image"),this.scrollParams={speed:30,pos:0,parentHeight:this.wrap.offsetHeight,height:this.img.offsetHeight},this.throttleScroll=d(this.handleScroll,200),this.throttleScroll=this.throttleScroll.bind(this)}moveImg(t=0){const e=t>0?this.scrollParams.speed:-this.scrollParams.speed,s=Math.floor(.8*this.scrollParams.parentHeight-this.scrollParams.height);this.scrollParams.pos+=e,this.scrollParams.pos<0&&(this.scrollParams.pos=0),this.scrollParams.pos+this.scrollParams.height>.8*this.scrollParams.parentHeight&&(this.scrollParams.pos=s),u.to(this.img,{y:this.scrollParams.pos,duration:1})}changeImage(t){const e=t.dataset.img;e&&(this.imgBg.style.backgroundImage=`url(${e})`)}handleClick(t,e,s){let i=!1;"true"===t.dataset.hidden?(t.dataset.hidden="false",i=!0,this.changeImage(t)):t.dataset.hidden="true",u.to(e,{maxHeight:i?s:0,duration:.3,onComplete:()=>{this.scrollParams.parentHeight=this.wrap.offsetHeight,!i&&this.moveImg()}})}handleScroll(t){this.moveImg(t.deltaY)}addEvent(){this.root.addEventListener("wheel",this.throttleScroll,{passive:!0})}removeEvent(){this.root.removeEventListener("wheel",this.throttleScroll,{passive:!0})}desktop(){this.addEvent()}mobile(){this.removeEvent()}init(){this.elms.forEach((t=>{const e=t.querySelector(".awards-list__btn"),s=t.querySelector("ul"),i=s.childElementCount,o=s.querySelector("li"),r=o.offsetHeight+parseInt(window.getComputedStyle(o).getPropertyValue("margin-bottom"));e.addEventListener("click",this.handleClick.bind(this,t,s,r*i))}))}}class _{constructor(t){this.block=t,this.elm=this.block.querySelector(".block__text p"),this.chars=void 0,this.init()}split(){p({target:this.elm,by:"chars"})}getChars(){const t=Array.from(this.elm.childNodes),e=Math.floor(.3*t.length),s=t.slice(-e),i=[];return s.forEach((t=>{if("whitespace"===t.className)t.style.opacity="0",i.push(t);else{const e=Array.from(t.childNodes);e.forEach((t=>t.style.opacity="0")),i.push(...e)}})),i}intersectionObserver(){return new IntersectionObserver((t=>{t.forEach((t=>{const{isIntersecting:e}=t;e&&(this.observer.unobserve(this.elm),u.to(this.chars,{alpha:1,duration:.01,stagger:{each:.06},ease:"none"}))}))}),{threshold:.5})}init(){this.split(),this.chars=this.getChars(),this.observer=this.intersectionObserver(),this.observer.observe(this.elm)}}class C{constructor(){this.block=document.querySelector(".hero"),this.wrap=this.block.querySelector(".hero__wrap-center"),this.wrapPos=this.getWrapPos(),this.logoDot=this.block.querySelector(".hero__logo-dot"),this.isInside=null,this.ticking=!1,this.handleMouseMove=this.handleMouseMove.bind(this)}getWrapPos(){const t=this.wrap.getBoundingClientRect();let{x:e,y:s,width:i,height:o}=t;return{top:Math.floor(s),bottom:Math.floor(s+o),left:Math.floor(e),right:Math.floor(e+i)}}dotAnimation(t){let{x:e,y:s}=t;e*=.01,s*=.01,u.to(this.logoDot,{x:e,y:s})}svgAnimation(t){let{x:e,y:s}=t,i=null;{const{top:t,bottom:o,left:r,right:n}=this.wrapPos;i=e>r&&e<n&&s>t&&s<o}console.log("is inside: ",i),this.isInside!==i&&(this.isInside=i,u.to(this.logoSvgElms.top,{y:i?0:-20}),u.to(this.logoSvgElms.bottom,{y:i?0:20}),u.to(this.logoSvgElms.left,{x:i?0:-20}),u.to(this.logoSvgElms.right,{x:i?0:20}))}handleMouseMove(t){this.ticking||(requestAnimationFrame((()=>{this.dotAnimation(t),this.ticking=!1})),this.ticking=!0)}addEvent(){this.block.addEventListener("mousemove",this.handleMouseMove)}removeEvent(){this.block.removeEventListener("mousemove",this.handleMouseMove)}update(){this.wrapPos=this.getWrapPos()}initDesktop(){this.addEvent()}initMobile(){this.removeEvent()}}m();(new class extends class{constructor(){this.config={mqlMobile:window.matchMedia("(max-width: 60em)"),isDesktop:null,ticking:!1}}resizeDesktop(){console.log("resize desktop","color: red;")}resizeMobile(){console.log("resize mobile")}update(){console.log("update")}handleResize(){this.config.ticking||(requestAnimationFrame((()=>{this.config.mqlMobile.matches?this.config.isDesktop&&(this.config.isDesktop=!1,l.isDesktop=!1,this.resizeMobile()):this.config.isDesktop||(this.config.isDesktop=!0,l.isDesktop=!0,this.resizeDesktop()),this.update(),this.config.ticking=!1})),this.config.ticking=!0)}initDesktop(){}initMobile(){}handleInit(){this.config.isDesktop?this.initDesktop():this.initMobile()}addEvents(){window.addEventListener("DOMContentLoaded",this.handleInit.bind(this)),window.addEventListener("resize",this.handleResize.bind(this))}init(){this.config.isDesktop=!this.config.mqlMobile.matches,l.isDesktop=!this.config.mqlMobile.matches,this.addEvents()}}{constructor(...t){super(...t),this.$elms={blockMarketing:document.querySelector(".block--marketing"),blockDev:document.querySelector(".block--dev"),blockSeo:document.querySelector(".block--seo"),blockDesign:document.querySelector(".block--design")},this.changeTheme=new k,this.heroSliderElms={announcement:document.querySelector(".hero-announcement"),taglines:document.querySelector(".hero-taglines")},this.announcementSlider=new S(this.heroSliderElms.announcement,"hero-announcement__item"),this.taglinesSlider=new S(this.heroSliderElms.taglines,"hero-taglines__item"),this.tickerElms=document.querySelectorAll(".ticker:not(.page-menu .ticker)"),this.tickerElms.length&&this.tickerElms.forEach((t=>{new a(t)})),this.heroLogoAnimation=new C,this.symbolElms=[{parent:this.$elms.blockDev,elm:this.$elms.blockDev.querySelectorAll(".block--dev .block-symbols__item")},{parent:this.$elms.blockSeo,elm:this.$elms.blockSeo.querySelectorAll(".block-symbols__item")},{parent:this.$elms.blockDesign,elm:this.$elms.blockDesign.querySelectorAll(".block-symbols__item")}],this.symbolsAnimation=this.symbolElms.map((t=>new y(t.elm,t.parent))),this.counterElms=document.querySelectorAll(".number-count__dynamic"),this.counter=new w(this.counterElms),this.awardsList=new E,this.redirectFooterElm=document.querySelector(".footer-redirect"),this.redirectFooter=new v(this.redirectFooterElm)}initDesktop(){super.initDesktop(),this.symbolsAnimation.forEach((t=>t.init())),this.awardsList.desktop(),this.redirectFooter.initDesktop(),this.heroLogoAnimation.initDesktop()}initMobile(){super.initMobile(),this.redirectFooter.initMobile();for(const[t,e]of Object.entries(this.$elms))e&&new _(e)}resizeDesktop(){super.resizeDesktop(),this.awardsList.desktop()}resizeMobile(){super.resizeMobile(),this.symbolsAnimation.forEach((t=>t.mobile())),this.awardsList.mobile(),this.heroLogoAnimation.initMobile()}update(){super.update()}init(){super.init(),this.changeTheme.init(),this.awardsList.init(),c((()=>import("./canvasSphere.js")),void 0).then((({default:t})=>{new t})),this.$elms.blockMarketing&&((()=>{const t=document.querySelector(".block.block--marketing");if(t){const e=Array.from(t.querySelectorAll(".marketing-triangle")).reverse();e.length&&(g.set(e,{x:-20,alpha:0}),b.create({trigger:t,start:"top bottom-=50",animation:g.to(e,{x:0,alpha:1,stagger:.3,duration:1.2}),once:!0}))}})(),(()=>{const t=document.querySelector(".block--marketing");if(t){const e=t.querySelector(".magma-deco"),s=t.querySelector(".magma-deco__img");u.to(s,{y:-100,force3D:!0,ease:"none",scrollTrigger:{trigger:e,scrub:!0}})}})())}}).init(),l.isDesktop?c((()=>import("./index4.js")),["/assets/index4.js","/assets/index2.css","/assets/utils.js","/assets/submitForm.js","/assets/vendor.js","/assets/validation.js","/assets/root.js","/assets/root.css"]):c((()=>import("./subscribeBlock.js")),["/assets/subscribeBlock.js","/assets/vendor.js","/assets/validation.js","/assets/root.js","/assets/root.css"]).then((({initSubscribeBlock:t})=>{t()}));