import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  console.log("Init");
  
  const block = document.querySelector(".block--marketing");

  if (block) {
    console.log("Exist");

    const elm = block.querySelector(".magma-deco")!;
    console.log("🚀 ~ file: marketingMagmaParallax.ts ~ line 15 ~ elm", elm)
    const img = block.querySelector(".magma-deco__img")!;
    console.log("🚀 ~ file: marketingMagmaParallax.ts ~ line 17 ~ img", img)

    

    gsap.to(img, {
      // yPercent: -5,
      backgroundPositionY: "+=500",
      ease: "none",
      scrollTrigger: {
        trigger: elm,
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true,
        onEnter() {
          console.log("Hello Man!");
          
        }
      }, 
    })
  }
}