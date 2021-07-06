import gsap, { ScrollTrigger } from "gsap/all";

export const marketingTriangleAnimation = () => {
  const block = document.querySelector(".block.block--marketing");

  if (block) {
    const triangleElms = block.querySelectorAll(".marketing-triangle");
    const tl = gsap.timeline({ paused: true });

    triangleElms.forEach((triangle) => {
      gsap.set(triangle, { x: -10 });
      tl.to(triangle, { x: 0, alpha: 1 });
    });

    console.log(window.APP.scrollbar);
    

    ScrollTrigger.create({
      trigger: block,
      animation: tl.play(),
      start: "top bottom-=50"
      // onEnter() {
      //   console.log("Enter");

      //   tl.restart();
      // },
    });
  }
};
