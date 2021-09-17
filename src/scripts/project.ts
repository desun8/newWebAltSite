import initRoot from "./root";
import "@/styles/project.scss";
import APP from "./app/APP";
import { sectionHeaderAnimation } from "./pages/works-project/sectionHeaderAnimation";
import { listAnimation } from "./pages/works-project/listAnimation";
import { checkFlexGap } from "./utils/checkFlexGap";
import { statisticAnimations } from "./pages/works-project/statisticAnimations";

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
statisticAnimations();
