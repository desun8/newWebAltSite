import { fixedHeader } from "@/scripts/components/fixedHeader";
import { ANDROID, MAC_OS } from "@/scripts/utils/getOS";
import { mediaQueryEvent } from "@/scripts/utils/mediaQueryEvent";
import APP from "../APP";
import { initFooter } from "./initFooter";
import { initMenu } from "./initMenu";
import { addNoise } from "./noise";
import { initProgressBar } from "./progressBar";
import { initSmoothScroll } from "./smoothScroll";

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
  defaultInit();
  initMenu();
  fixedHeader();
  initFooter();

  initSmoothScroll();
  initProgressBar();

  if (APP.scrollbar && APP.isDesktop) {
    addNoise();
  }
};
