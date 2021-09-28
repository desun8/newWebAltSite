import initRoot from "./root";
import "@/styles/about.scss";
import APP from "./app/APP";
import { mediaQueryEvent } from "./utils/mediaQueryEvent";

initRoot();

if (APP.isDesktop) {
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
