import initRoot from "./root";
import "@/styles/project.scss";
import APP from "./app/APP";
import { sectionHeaderAnimation } from "./pages/works-project/sectionHeaderAnimation";
import { listAnimation } from "./pages/works-project/listAnimation";
import { checkFlexGap } from "./utils/checkFlexGap";
import { mediaQueryEvent } from "./utils/mediaQueryEvent";
import { initApp as initWorksDialog } from "@/scripts/pages/works-dialog/index";

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
} else {
  const footerRedirectElms = document.querySelectorAll(".footer-redirect");

  if (footerRedirectElms.length) {
    import("./pages/home/redirectFooter.js").then(
      ({ default: RedirectFooter }) => {
        footerRedirectElms.forEach((elm) => {
          const redirectFooter = new RedirectFooter(elm);

          mediaQueryEvent(
            () => redirectFooter.initMobile(),
            () => {}
          );
        });
      }
    );
  }
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

// Lightbox
(() => {
  const lightboxElms = Array.from(
    document.querySelectorAll<HTMLElement>(".js-lightbox")
  );

  if (lightboxElms.length) {
    import("./pages/works-project/lightbox").then(({ lightbox }) => {
      lightbox(lightboxElms);
    });
  }
})();

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

// Открытие видео во весь экран или в модалке
(() => {
  const btn = document.querySelector<HTMLButtonElement>(".review-avatar__play");

  if (btn) {
    import("./pages/works-project/reviewVideo").then(({ reviewVideo }) => {
      reviewVideo(btn);
    });
  }
})();

// Диалог проектов
(() => {
  function prepare() {
    return import("../mocks/browser.js").then((module) =>
      module.worker.start()
    );
  }

  prepare().then(() => {
    initWorksDialog();
  });
})();
