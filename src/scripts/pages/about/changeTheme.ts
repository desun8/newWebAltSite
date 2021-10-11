import ScrollTrigger from "gsap/ScrollTrigger";

export const changeTheme = (elm: HTMLElement) => {
  ScrollTrigger.create({
    trigger: elm,
    start: "top bottom",
    end: "bottom center",
    onToggle({ isActive }) {
      if (isActive) {
        document.body.classList.add("theme-dark");
      } else {
        document.body.classList.remove("theme-dark");
      }
    },
  });
};
