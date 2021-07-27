import { gsap } from "gsap";

export const addScrollAnimation = () => {
  const container = document.querySelector(".js-decorate-header");
  const gridElm = container?.querySelector(".js-decorate-header__grid svg");
  const figureElm = container?.querySelector(".js-decorate-header__figure svg");

  if (gridElm && figureElm) {
    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top top",
        end: "bottom 20%",
        scrub: true,
      },
    });

    tl.to(figureElm, { rotation: 40 }, 0);
    tl.to(gridElm, { y: 40, x: 10 }, 0);
  }
};
