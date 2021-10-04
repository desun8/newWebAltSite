import ScrollTrigger from "gsap/ScrollTrigger";
import { typewriteAnimation } from "../works-project/typewriteAnimation";

export const clientsAnimation = () => {
  const text = document.querySelector<HTMLElement>(".clients__text");
  const line = document.querySelector(".clients__line");

  if (text) {
    typewriteAnimation(text);
  }

  if (line) {
    ScrollTrigger.create({
      trigger: line,
      start: "top 40%",
      toggleClass: "is-active",
      once: true,
    });
  }
};
