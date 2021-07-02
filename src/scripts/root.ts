import RootApp from './app/rootApp';
import '@/styles/root.scss';
import 'virtual:windi.css'
import APP from './app/APP';
import postcssViewportHeightCorrection from './utils/postcssViewportHeightCorrection';
import headerFeedbackBtnAnimation from '@/scripts/components/headerFeedbackBtnAnimation';
import checkWebpFeature, { Features } from '@/scripts/utils/checkWebpFeature';

checkWebpFeature(Features.lossy, (_: Features, result: boolean) => {
  if (result) {
    document.documentElement.classList.add("webp");
  } else {
    document.documentElement.classList.add("no-webp");
  }
})


if (window.APP === undefined) {
  window.APP = APP;
}

if (APP.isDesktop) {
  headerFeedbackBtnAnimation();
} else {
  postcssViewportHeightCorrection();

  const isIosChrome = navigator.appVersion.indexOf('CriOS') !== -1; // не сафари

  if (isIosChrome) document.body.classList.add('ios-chrome');
}

const app = new RootApp();
app.init();

