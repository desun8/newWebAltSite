import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import initRoot from "./root";
import "@/styles/inner.scss";
import { mediaQueryEvent } from "./utils/mediaQueryEvent";
import { initSubscribeBlock } from "./components/subscribeBlock";
import submitForm from "./components/subscribe-banner/submitForm";

initRoot();

const initSubscribeBlockElms = () => {
  const innerBodyElm =
    document.querySelector<HTMLElement>(".page-inner__body")!;
  const subscribeElmSm = document.querySelector<HTMLElement>(
    ".subscribe-block:not(.subscribe-block--transparent)"
  );
  const subscribeElmXl = document.querySelector<HTMLElement>(
    ".subscribe-block.subscribe-block--transparent"
  );

  mediaQueryEvent(
    () => {
      if (subscribeElmSm) initSubscribeBlock(subscribeElmSm);
    },
    () => {
      if (subscribeElmXl) {
        const is2XLScreen = window.matchMedia("(min-width: 96em)").matches;
        if (is2XLScreen) {
          initSubscribeBlock(subscribeElmXl);

          ScrollTrigger.create({
            trigger: subscribeElmXl,
            start: "top center",
            end: () =>
              `top -${innerBodyElm.offsetHeight - window.screen.height * 2.8}`,
            pin: true,
            pinSpacing: false,
          });
        }
      }
    }
  );
};

const initSubscribeBanner = () => {
  const subscribeBanner = document.querySelector(".subscribe-banner-block");

  if (subscribeBanner) {
    const bannerElm = subscribeBanner.querySelector(".js-banner")!;
    const formElm = subscribeBanner.querySelector("form")!;

    submitForm(formElm);

    ScrollTrigger.create({
      trigger: bannerElm,
      animation: gsap.to(bannerElm, { x: 0, duration: 0.35 }),
      start: "center 80%",
      once: true,
    });
  }
};

initSubscribeBlockElms();
initSubscribeBanner();
