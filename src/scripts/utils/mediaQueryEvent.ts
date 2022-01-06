export const smallScreen = window.matchMedia("(max-width: 60em)");

export const isDesktop = !window.matchMedia("(max-width: 60em)").matches;
export const getIsDesktop = () =>
  !window.matchMedia("(max-width: 60em)").matches;

export const mediaQueryEvent = (
  cbMobile: () => void,
  cbDesktop: () => void,
  cbUpdate?: () => void
) => {
  let isInit = false;

  const handleTabletChange = (event: MediaQueryList | MediaQueryListEvent) => {
    if (event.matches) {
      cbMobile();
    } else {
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
