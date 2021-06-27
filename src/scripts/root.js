import RootApp from './app/rootApp';
import '@/styles/root.scss';
import APP from './app/APP';
import postcssViewportHeightCorrection from './utils/postcssViewportHeightCorrection';


if (window.APP === undefined) {
  window.APP = APP;
}

if (!APP.isDesktop) {
  postcssViewportHeightCorrection();

  const isIosChrome = navigator.appVersion.indexOf('CriOS') !== -1; // не сафари

  if (isIosChrome) document.body.classList.add('ios-chrome');
}

const app = new RootApp();
app.init();

