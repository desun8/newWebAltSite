import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { resizeObserver } from "@/scripts/utils/resizeObserver";

export const resultsIntroAnimation = () => {
  console.log("resultsIntroAnimation");

  const rootElm = document.querySelector(".results-intro") as HTMLElement;

  if (rootElm) {
    const textElm = rootElm.querySelector(".results-intro__text");
    const imgElms = rootElm.querySelectorAll<HTMLImageElement>(
      ".results-intro__img"
    );

    if (!textElm || !imgElms.length) return;

    const wrapper = document.querySelector(".results");
    let imagesPos = 0;
    let isProbablyPortraitScreen = false;

    // Высчитываем позицию X для gsap анимации изображений
    const getImagesPos = () => {
      let pageGap = 0;
      const elmLeft = imgElms[0].getBoundingClientRect().left;
      const imgsGap = 10;

      if (wrapper) {
        pageGap = wrapper.getBoundingClientRect().left;
      } else {
        rootElm.style.margin = "0";
        pageGap = rootElm.getBoundingClientRect().left;
        rootElm.style.margin = "";
      }

      imagesPos = Math.floor(Math.abs(elmLeft) + pageGap - imgsGap);
    };

    const imagesAnimation = () => {
      gsap.to(imgElms, {
        scrollTrigger: {
          id: "imagesAnimation",
          trigger: rootElm,

          start: () => (isProbablyPortraitScreen ? "top 30%" : "top 10%"),
          end: () => (isProbablyPortraitScreen ? "bottom 30%" : "bottom 50%"),
          scrub: true,
        },

        x: (index) => {
          return index === 0 ? imagesPos : imagesPos * -1;
        },
      });
    };

    gsap.to(textElm, {
      scrollTrigger: {
        trigger: rootElm,
        start: () => (isProbablyPortraitScreen ? "top 30%" : "bottom 70%"),
        end: () => (isProbablyPortraitScreen ? "bottom 30%" : "bottom 50%"),
        scrub: true,
      },

      autoAlpha: 0,
    });

    resizeObserver(rootElm, () => {
      ScrollTrigger.getById("imagesAnimation")?.kill();
      gsap.killTweensOf(imgElms);

      getImagesPos();
      imagesAnimation();

      const ratio =
        Math.round((window.screen.height / window.screen.width) * 100) / 100;
      isProbablyPortraitScreen = ratio > 1;
    });
  }
};
