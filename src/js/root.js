import RootApp from './app/rootApp';
import '../styles/root.scss';

const app = new RootApp();
app.init();

const APP = {
  config: {
    mqlMobile: window.matchMedia('(max-width: 60em)')
  }
};

window.APP = APP;