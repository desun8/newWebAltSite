import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const isDesktop = !window.matchMedia("(max-width: 63.99em)").matches;

export const heroAnimation = (teamElm: HTMLElement) => {
  const rootElm = document.querySelector(".hero");

  if (rootElm) {
    const logo = rootElm.querySelector(".hero__bg-logo")!;

    ScrollTrigger.create({
      trigger: rootElm,
      start: () => `-${rootElm.getBoundingClientRect().top} top`,
      end: () => {
        const end = teamElm.getBoundingClientRect().height * 0.95;
        return `bottom -${end}`;
      },
      pin: logo,
      pinSpacing: false,
    });

    ScrollTrigger.create({
      trigger: rootElm,
      animation: gsap.to(logo, {
        x: isDesktop ? "-50%" : undefined,
        scale: 1.6,
        alpha: 0.2,
      }),
      start: () => (isDesktop ? "center center" : "top top"),
      scrub: true,
    });
  }
};
