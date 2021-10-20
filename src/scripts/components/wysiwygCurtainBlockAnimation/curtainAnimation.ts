import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { resizeObserver } from "@/scripts/utils/resizeObserver";

export const curtainAnimation = (
  root: HTMLElement,
  text: HTMLElement,
  imgs: HTMLImageElement[]
) => {
  const wrapper = root.parentElement;
  let imagesPos = 0;
  let isProbablyPortraitScreen = false;

  // Высчитываем позицию X для gsap анимации изображений
  const getImagesPos = () => {
    let pageGap = 0;
    const elmLeft = imgs[0].getBoundingClientRect().left;
    const imgsGap = 10;

    if (wrapper) {
      pageGap = wrapper.getBoundingClientRect().left;
    } else {
      root.style.margin = "0";
      pageGap = root.getBoundingClientRect().left;
      root.style.margin = "";
    }

    imagesPos = Math.floor(Math.abs(elmLeft) + pageGap - imgsGap);
  };

  const imagesAnimation = () => {
    gsap.to(imgs, {
      scrollTrigger: {
        id: "imagesAnimation",
        trigger: root,

        start: () => (isProbablyPortraitScreen ? "top 30%" : "top 10%"),
        end: () => (isProbablyPortraitScreen ? "bottom 30%" : "bottom 50%"),
        scrub: true,
      },

      x: (index) => {
        return index === 0 ? imagesPos : imagesPos * -1;
      },
    });
  };

  gsap.to(text, {
    scrollTrigger: {
      trigger: root,
      start: () => (isProbablyPortraitScreen ? "top 30%" : "bottom 70%"),
      end: () => (isProbablyPortraitScreen ? "bottom 30%" : "bottom 50%"),
      scrub: true,
    },

    autoAlpha: 0,
  });

  resizeObserver(root, () => {
    ScrollTrigger.getById("imagesAnimation")?.kill();
    gsap.killTweensOf(imgs);

    getImagesPos();
    imagesAnimation();

    const ratio =
      Math.round((window.screen.height / window.screen.width) * 100) / 100;
    isProbablyPortraitScreen = ratio > 1;
  });
};
