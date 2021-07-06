import { smallScreen } from "@/scripts/utils/mediaQueryEvent";
import APP from "../APP";

type cb = () => void;

export const resizeInit = (smScreen: cb, lgScreen: cb, update?: cb) => {
  let ticking = false;

  const handleResize = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (smallScreen.matches) {
          //  mobile
          if (APP.isDesktop) {
            APP.isDesktop = false;
            smScreen();
          }
        } else {
          // desktop
          if (!APP.isDesktop) {
            APP.isDesktop = true;
            lgScreen();
          }
        }

        if (update) {
          update();
        }

        ticking = false;
      });

      ticking = true;
    }
  };

  window.addEventListener("resize", handleResize);
};

export const init = (smScreen: cb, lgScreen: cb) => {
  const handleInit = () => {
    if (APP.isDesktop) {
      lgScreen();
    } else {
      smScreen();
    }
  };

  window.addEventListener("DOMContentLoaded", handleInit);
};
