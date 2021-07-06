import gsap from "gsap";
import APP from "../APP";

const progressBar = (elm: Element) => {
  const isNativeScroll = APP.scrollbar === undefined;
  let trigger;

  if (isNativeScroll) {
    trigger = document.body;
  } else {
    trigger = APP.scrollbar!.contentEl;
  }

  gsap.to(elm, {
    scale: 1,
    ease: "none",
    scrollTrigger: {
      trigger,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });
};

export const initProgressBar = () => {
  const progressBarElm = document.querySelector(".progress-bar");

  if (progressBarElm) {
    progressBar(progressBarElm);
  }
};
