import ScrollTrigger from "gsap/ScrollTrigger";

const isMdScreen = !window.matchMedia("(max-width: 48.99em)").matches;

export const changeTheme = (triggerElm: HTMLElement, endElm?: HTMLElement) => {
  ScrollTrigger.create({
    trigger: triggerElm,
    start: "top bottom",
    end: () => {
      if (!endElm) return "bottom center";

      if (isMdScreen) {
        return "bottom center";
      } else {
        const end = endElm.getBoundingClientRect().height * -0.65;
        return `bottom ${end}`;
      }
    },
    onToggle({ isActive }) {
      if (isActive) {
        document.body.classList.add("theme-dark");
      } else {
        document.body.classList.remove("theme-dark");
      }
    },
  });
};
