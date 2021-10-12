import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const recruitAnimation = () => {
  const subscribeBanner = document.querySelector(
    ".page-about .subscribe-banner-block"
  );

  if (subscribeBanner) {
    const bannerElm = subscribeBanner.querySelector(".js-banner")!;

    ScrollTrigger.create({
      trigger: bannerElm,
      animation: gsap.to(bannerElm, { x: 0, duration: 0.35 }),
      start: "center 80%",
      once: true,
    });
  }
};
