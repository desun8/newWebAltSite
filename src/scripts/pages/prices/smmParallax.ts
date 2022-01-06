import { gsap } from "gsap";

export const smmParallax = () => {
  const parentElm = document.querySelector(".prices-section--smm");
  const imgElm = document.querySelector(".page-prices__img--smm");

  if (!imgElm || !parentElm) {
    console.warn(
      "Ошибка инициализации параллакса для изображения в smm блоке. Проверьте наличие элементов."
    );
    return;
  }

  gsap.to(imgElm, {
    y: () => `-=${window.screen.height * 0.1}`,
    scrollTrigger: {
      trigger: parentElm,
      scrub: true,
    },
  });
};
