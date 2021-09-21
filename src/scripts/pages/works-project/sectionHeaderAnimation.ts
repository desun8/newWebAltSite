import { gsap } from "gsap";

export const sectionHeaderAnimation = () => {
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
      duration: 0.3,
    });
  });
};
