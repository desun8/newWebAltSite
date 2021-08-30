import ScrollTrigger from "gsap/ScrollTrigger";

export default function useCardViewportAnimation(elm: HTMLElement) {
  ScrollTrigger.create({
    trigger: elm,
    start: "top 40%",
    end: "bottom 40%",
    toggleClass: "no-saturate",
    onToggle: ({ isActive }) => {
      if (isActive) {
        elm.classList.remove("no-saturate");
      } else {
        elm.classList.add("no-saturate");
      }
    },
  });
}
