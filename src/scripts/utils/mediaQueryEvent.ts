import { log } from "./log";

export const smallScreen = window.matchMedia("(max-width: 60em)");

export const isDesktop = !window.matchMedia("(max-width: 60em)").matches;

let isInit = false;

export const mediaQueryEvent = (
  cbMobile: () => void,
  cbDesktop: () => void,
  cbUpdate?: () => void
) => {
  const handleTabletChange = (event: MediaQueryList | MediaQueryListEvent) => {
    if (event.matches) {
      log("IS SMALL SCREEN")
      cbMobile();
    } else {
      log("IS LARGE SCREEN")
      cbDesktop();
    }

    if (cbUpdate) {
      cbUpdate();
    }
  };

  smallScreen.addEventListener("change", handleTabletChange);

  if (!isInit) {
    handleTabletChange(smallScreen);
    isInit = true;
  }
};
