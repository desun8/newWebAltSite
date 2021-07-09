import gsap from "gsap";

export default () => {
  const block = document.querySelector(".block--marketing");

  if (block) {
    const elm = block.querySelector(".magma-deco")!;
    const img = block.querySelector(".magma-deco__img")!;

    gsap.to(img, {
      y: -100,
      force3D: true,
      ease: "none",
      scrollTrigger: {
        trigger: elm,
        scrub: true,
      },
    });
  }
};
