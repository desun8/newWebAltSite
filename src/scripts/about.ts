import initRoot from "./root";
import "@/styles/about.scss";
import APP from "./app/APP";
import { mediaQueryEvent } from "./utils/mediaQueryEvent";
import { founderAnimations } from "./pages/about/founderAnimations";
import { typewriteAnimation } from "./pages/works-project/typewriteAnimation";
import { clientsAnimation } from "./pages/about/clientsAnimation";

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

founderAnimations();
clientsAnimation();

// Открытие видео во весь экран или в модалке
(() => {
  const btns = document.querySelectorAll<HTMLButtonElement>(".btn-play");

  if (btns.length) {
    import("./pages/works-project/reviewVideo").then(({ reviewVideo }) => {
      btns.forEach((btn) => {
        reviewVideo(btn);
      });
    });
  }
})();

// Анимация текста блока митапов
(() => {
  const meetupsText = document.querySelector<HTMLElement>(".meetups__text");

  if (meetupsText) {
    typewriteAnimation(meetupsText);
  }
})();
