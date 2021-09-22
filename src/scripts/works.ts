import initRoot from "./root";
import { initApp as initWorksCatalog } from "./pages/works/index.js";
import { initApp as initWorksDialog } from "./pages/works-dialog/index.js";
import APP from "./app/APP";
import "@/styles/works.scss";
import { mediaQueryEvent } from "./utils/mediaQueryEvent";

initRoot();
initWorksCatalog();
initWorksDialog();

if (APP.isDesktop) {
  import("./components/subscribe-banner/index");
} else {
  (function initFooterAnimation() {
    const elm = document.querySelector(".footer-redirect");
    if (elm) {
      import("./pages/home/redirectFooter.js").then(
        ({ default: RedirectFooter }) => {
          const redirectFooter = new RedirectFooter(elm);

          mediaQueryEvent(
            () => redirectFooter.initMobile(),
            () => {}
          );
        }
      );
    }
  })();
}
