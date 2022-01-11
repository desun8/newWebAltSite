import ScrollTrigger from "gsap/ScrollTrigger";

export const priceChangeTheme = () => {
  const body = document.body;
  const sectionDark = document.querySelector(".js-dark-block");
  const sectionOrange = document.querySelector(".js-orange-block");
  const footerRedirect = document.querySelector(".footer-redirect");

  ScrollTrigger.create({
    trigger: sectionDark,
    onToggle({ isActive }) {
      if (isActive) {
        body.classList.add("theme-dark");
      } else {
        body.classList.remove("theme-dark");
      }
    },
  });

  ScrollTrigger.create({
    trigger: sectionOrange,
    endTrigger: footerRedirect,
    end: () => "bottom+=1000px bottom",
    onToggle({ isActive }) {
      if (isActive) {
        body.classList.add("theme-sun");
      } else {
        body.classList.remove("theme-sun");
      }
    },
  });
};
