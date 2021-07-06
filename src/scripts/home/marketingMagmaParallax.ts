import { gsap } from "gsap";

export default () => {
  console.log("Init");

  const block = document.querySelector(".block--marketing");

  if (block) {
    console.log("Exist");

    const elm = block.querySelector(".magma-deco")!;
    const img = block.querySelector(".magma-deco__img")!;

    gsap.to(img, {
      // yPercent: -5,
      backgroundPositionY: "+=50",
      ease: "none",
      scrollTrigger: {
        trigger: elm,
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true,
        onEnter() {
          console.log("Hello Man!");
        },
      },
    });
  }
};
