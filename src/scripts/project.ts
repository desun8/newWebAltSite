import initRoot from "./root";
import "@/styles/project.scss";
import APP from "./app/APP";
import { sectionHeaderAnimation } from "./pages/works-project/sectionHeaderAnimation";
import { listAnimation } from "./pages/works-project/listAnimation";
import { checkFlexGap } from "./utils/checkFlexGap";

const isMdScreen = window.matchMedia("(min-width: 48em)").matches;

initRoot();
checkFlexGap();

if (APP.isDesktop) {
  import("./components/subscribe-banner/index");

  import("./pages/works-project/resultsIntroAnimation").then(
    ({ resultsIntroAnimation }) => {
      resultsIntroAnimation();
    }
  );
}

if (isMdScreen) {
  import("./pages/works-project/typewriteAnimation").then(
    ({ typewriteAnimation }) => {
      const elm = document.querySelector<HTMLElement>(
        ".hero__describe.js-typewrite"
      );

      if (elm) {
        typewriteAnimation(elm);
      }
    }
  );

  import("./pages/works-project/imageParallax").then(({ imageParallax }) => {
    imageParallax();
  });
}

sectionHeaderAnimation();
listAnimation();

// Анимация блока статистики
(() => {
  const statisticElm = document.querySelector(".statistic");

  if (statisticElm) {
    import("./pages/works-project/statisticAnimations").then(
      ({ statisticAnimations }) => {
        statisticAnimations();
      }
    );
  }
})();

// Карусель
(() => {
  const elm = document.querySelector(".carousel .swiper") as HTMLElement;

  if (elm) {
    import("./pages/works-project/swiperCarousel").then(
      ({ swiperCarousel }) => {
        swiperCarousel(elm);
      }
    );
  }
})();
