import RootApp from './app/rootApp';
import '../styles/root.scss';
import getOS from './utils/getOS';

const APP = {
  os: getOS(),
  config: { // FIXME: удалить?
    mqlMobile: window.matchMedia('(max-width: 60em)')
  }
};

window.APP = APP;

const app = new RootApp();
app.init();

