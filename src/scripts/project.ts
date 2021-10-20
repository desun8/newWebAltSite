import initRoot from "./root";
import "@/styles/project.scss";
import APP from "./app/APP";
import { sectionHeaderAnimation } from "./pages/works-project/sectionHeaderAnimation";
import { listAnimation } from "./pages/works-project/listAnimation";
import { checkFlexGap } from "./utils/checkFlexGap";
import { mediaQueryEvent } from "./utils/mediaQueryEvent";
import { initApp as initWorksDialog } from "@/scripts/pages/works-dialog/index";
import { lightboxInit } from "./components/lightbox";
import { wysiwygGalleryCarousel } from "./components/wysiwygGalleryCarousel";
import { wysiwygReviewVideo } from "./components/wysiwygReviewVideo";

const isMdScreen = window.matchMedia("(min-width: 48em)").matches;

initRoot();
checkFlexGap();

if (APP.isDesktop) {
  import("./components/subscribe-banner/index");

  import("./components/wysiwygCurtainBlockAnimation").then(
    ({ wysiwygCurtainBlockAnimation }) => {
      wysiwygCurtainBlockAnimation();
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

lightboxInit();
wysiwygGalleryCarousel();
wysiwygReviewVideo();

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

// Диалог проектов
initWorksDialog();
