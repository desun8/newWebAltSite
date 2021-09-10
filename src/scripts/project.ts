import initRoot from "./root";
import "@/styles/project.scss";
import APP from "./app/APP";
import { sectionHeaderAnimation } from "./pages/works-project/sectionHeaderAnimation";
import { listAnimation } from "./pages/works-project/listAnimation";

initRoot();

if (APP.isDesktop) {
  import("./components/subscribe-banner/index");
}

if (window.matchMedia("(min-width: 48em)").matches) {
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
}

sectionHeaderAnimation();
listAnimation();
