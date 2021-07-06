import gsap, { ScrollTrigger } from "gsap/all";

export const marketingTriangleAnimation = () => {
  const block = document.querySelector(".block.block--marketing");

  if (block) {
    const triangleElms = Array.from(
      block.querySelectorAll(".marketing-triangle")
    ).reverse();

    if (triangleElms.length) {
      gsap.set(triangleElms, { x: -20, alpha: 0 });

      ScrollTrigger.create({
        trigger: block,
        start: "top bottom-=50",
        animation: gsap.to(triangleElms, {
          x: 0,
          alpha: 1,
          stagger: 0.3,
          duration: 1.2,
        }),
      });
    }
  }
};
