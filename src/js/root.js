import RootApp from './app/rootApp';
import '../styles/root.scss';
import APP from './app/APP';


if (window.APP === undefined) {
  window.APP = APP;
}

if (!APP.isDesktop) {
  const isIosChrome = navigator.appVersion.indexOf('CriOS') !== -1; // не сафари

  if (isIosChrome) document.body.classList.add('ios-chrome');
}

const app = new RootApp();
app.init();

