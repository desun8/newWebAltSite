import APP from "./app/APP";
import initRoot from "./root";
import "@/styles/prices.scss";
import { mediaQueryEvent } from "./utils/mediaQueryEvent";
import { priceChangeTheme } from "./pages/prices/pricesChangeTheme";

initRoot();
priceChangeTheme();

if (APP.isDesktop) {
  import("./pages/prices/smmParallax.js").then(({ smmParallax }) => {
    smmParallax();
  });
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
