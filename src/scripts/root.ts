import APP from "./app/APP";
import postcssViewportHeightCorrection from "./utils/postcssViewportHeightCorrection";
import headerFeedbackBtnAnimation from "@/scripts/components/headerFeedbackBtnAnimation";
import checkWebpFeature, { Features } from "@/scripts/utils/checkWebpFeature";

import "virtual:windi.css";
import "@/styles/root.scss";
import "focus-visible";
import { initCore } from "./app/core";
import { WINDOWS } from "./utils/getOS";

export default function initRoot(hasNoiseBg = true) {
  initCore(hasNoiseBg);

  // CORE CANDIDATE
  checkWebpFeature(Features.lossy, (_: Features, result: boolean) => {
    if (result) {
      document.documentElement.classList.add("webp");
    } else {
      document.documentElement.classList.add("no-webp");
    }
  });

  // CORE CANDIDATE
  if (window.APP === undefined) {
    window.APP = APP;
  }

  // CORE CANDIDATE
  if (APP.isDesktop) {
    headerFeedbackBtnAnimation();
  } else {
    postcssViewportHeightCorrection();

    const isIosChrome = navigator.appVersion.indexOf("CriOS") !== -1; // не сафари

    if (isIosChrome) document.body.classList.add("ios-chrome");
  }

  if (APP.os === WINDOWS) {
    document.documentElement.classList.add("os-windows");
  }
}
