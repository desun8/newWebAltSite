import { gsap } from "gsap";

export const imageParallax = () => {
  const parentElm = document.querySelector(".hero")!;
  const elm = parentElm.querySelector(".hero__img");

  if (elm) {
    gsap.to(elm, {
      y: () => {
        const isTablet = window.screen.height > window.screen.width;

        if (isTablet) {
          return window.screen.height * 0.1;
        }

        return window.screen.height * 0.25;
      },
      scrollTrigger: {
        trigger: elm,
        start: () => `top ${elm.getBoundingClientRect().top}`,
        scrub: true,
      },
    });
  }
};
