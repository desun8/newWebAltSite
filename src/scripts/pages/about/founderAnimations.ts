import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const founderAnimations = () => {
  const isMdScreen = window.matchMedia("(min-width: 48em)").matches;

  const root = document.querySelector(".founder") as HTMLElement;
  const image = root.querySelector(".founder-image__img")!;
  const videoBtn = root.querySelector(".founder-image__play")!;
  const instagramBtn = root.querySelector(".founder-image__instagram")!;
  const describe = root.querySelector(".founder-describe")!;
  const textBoss = root.querySelector(".founder-boss")!;

  if (isMdScreen) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 20%",
        },
      })
      .from(image, { y: 50, autoAlpha: 0 })
      .from(videoBtn, { width: 0, duration: 0.35 })
      .from(describe, { x: -50, autoAlpha: 0 }, "-=0.4");
  } else {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: image,
          start: "top center",
          once: true,
        },
      })
      .from(image, { y: 50, autoAlpha: 0 })
      .from([videoBtn, instagramBtn], { width: 0, duration: 0.35 });

    ScrollTrigger.create({
      trigger: describe,
      animation: gsap.from(describe, { y: 50, autoAlpha: 0 }),
      start: "top center",
      once: true,
    });
  }

  ScrollTrigger.create({
    trigger: textBoss,
    animation: gsap.to(textBoss, { x: () => root.offsetWidth * 0.15 }),
    scrub: true,
  });
};
