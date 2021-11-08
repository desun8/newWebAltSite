import { fixedHeader } from "@/scripts/components/fixedHeader";
import { ANDROID, MAC_OS } from "@/scripts/utils/getOS";
import { mediaQueryEvent } from "@/scripts/utils/mediaQueryEvent";
import { scrollToTop } from "./scrollToTop";
import APP from "../APP";
import { initDialogForm } from "./dialogForm";
import { initFooter } from "./initFooter";
import { initMenu } from "./initMenu";
import { addNoise } from "./noise";
import { pageTransitions } from "./pageTransitions";
import { initProgressBar } from "./progressBar";
import { initSmoothScroll } from "./smoothScroll";
import { cookieGdrp } from "./cookieGdpr";

const defaultInit = () => {
  const smScreen = () => {
    if (APP.os === ANDROID) {
      document.body.classList.add("os-android");
    }
  };

  const lgScreen = () => {
    if (APP.os === MAC_OS) {
      document.body.classList.add("os-mac");
    }
  };

  mediaQueryEvent(smScreen, lgScreen);
};

export const initCore = () => {
  pageTransitions();
  cookieGdrp();
  defaultInit();
  initMenu();
  fixedHeader();
  initFooter();

  initSmoothScroll();
  initProgressBar();
  initDialogForm();
  scrollToTop();

  if (APP.scrollbar && APP.isDesktop) {
    addNoise();
  }

  if (APP.isDesktop) {
    import("./invertTheme").then(({ invertTheme }) => {
      invertTheme();
    });
  }
};
