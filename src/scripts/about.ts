import initRoot from "./root";
import "@/styles/about.scss";
import APP from "./app/APP";
import { mediaQueryEvent } from "./utils/mediaQueryEvent";
import { founderAnimations } from "./pages/about/founderAnimations";
import { typewriteAnimation } from "./pages/works-project/typewriteAnimation";
import { clientsAnimation } from "./pages/about/clientsAnimation";
import { reviews } from "./pages/about/reviews";
import { teamVideoAutoplay } from "./pages/about/teamVideoAutoplay";
import { teamAnimations } from "./pages/about/teamAnimations";
import { wysiwygReviewVideo } from "./components/wysiwygReviewVideo";

const isMdScreen = !window.matchMedia("(max-width: 47.99em)").matches;

initRoot();

if (APP.isDesktop) {
  import("./components/subscribe-banner/index");
} else {
  const footerRedirectElm = document.querySelector(".footer-redirect");

  if (footerRedirectElm) {
    import("./pages/home/redirectFooter.js").then(
      ({ default: RedirectFooter }) => {
        const redirectFooter = new RedirectFooter(footerRedirectElm);

        mediaQueryEvent(
          () => redirectFooter.initMobile(),
          () => {}
        );
      }
    );
  }
}

if (isMdScreen) {
  import("./pages/about/recruitAnimation").then(({ recruitAnimation }) => {
    recruitAnimation();
  });
}

teamAnimations();
teamVideoAutoplay();
founderAnimations();
reviews();
clientsAnimation();
wysiwygReviewVideo();

// Анимация текста блока митапов
(() => {
  const meetupsText = document.querySelector<HTMLElement>(".meetups__text");

  if (meetupsText) {
    typewriteAnimation(meetupsText);
  }
})();
