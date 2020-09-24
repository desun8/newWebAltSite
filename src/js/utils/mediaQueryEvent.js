const smallScreen = window.matchMedia('(max-width: 60em)');

export const isDesktop = !window.matchMedia('(max-width: 60em)').matches;

export const mediaQueryEvent = (cbMobile, cbDesktop) => {
  const handleTabletChange = (e) => {
    if (e.matches) {
      console.log('IS SMALL SCREEN')
      cbMobile();
    } else {
      console.log('IS LARGE SCREEN')
      cbDesktop();
    }
  }

  smallScreen.addEventListener('change', handleTabletChange);
}


