import { gsap } from "gsap";

export const sectionHeaderAnimation = () => {
  const isSmScreen = window.matchMedia("(max-width: 47.999em)").matches;
  const elms = document.querySelectorAll<HTMLElement>(
    ".project-section-header"
  );

  elms.forEach((elm) => {
    gsap.to(elm, {
      scrollTrigger: {
        trigger: elm,
        start: () => "top 60%",
        once: true,
      },
      backgroundColor: "#ff5000",
      color: !isSmScreen ? "#fff" : undefined,
      duration: 0.3,
    });
  });
};
