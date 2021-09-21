import detectIsTouchScreen from "@/scripts/utils/detectIsTouchScreen";
import getOS from "@/scripts/utils/getOS";
import { getIsDesktop, isDesktop } from "@/scripts/utils/mediaQueryEvent";
import { resizeObserver } from "../utils/resizeObserver";

const APP: Window["APP"] = {
  os: getOS(),
  isDesktop,
  scrollbar: undefined,
  isTouchScreen: detectIsTouchScreen(),
};

resizeObserver(document.documentElement, () => {
  APP.isDesktop = getIsDesktop();
});

export default APP;
