import './root.js';
import HomeApp from './app/homeApp.js';

import '@/styles/home.scss';
import '@/styles/components/subscribe-block.scss';
import APP from '@/scripts/app/APP';

const app = new HomeApp();
app.init();

if (APP.isDesktop) {
  import("./components/subscribe-banner/index");
} else {
  import('./components/subscribeBlock');
}
