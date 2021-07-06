export const smallScreen = window.matchMedia("(max-width: 60em)");

export const isDesktop = !window.matchMedia("(max-width: 60em)").matches;

export const mediaQueryEvent = (
  cbMobile: () => void,
  cbDesktop: () => void,
  cbUpdate?: () => void
) => {
  const handleTabletChange = (event: MediaQueryListEvent) => {
    if (event.matches) {
      console.log("IS SMALL SCREEN");
      cbMobile();
    } else {
      console.log("IS LARGE SCREEN");
      cbDesktop();
    }

    if (cbUpdate) {
      cbUpdate();
    }
  };

  smallScreen.addEventListener("change", handleTabletChange);
};
