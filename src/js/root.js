import RootApp from './app/rootApp';
import '../styles/root.scss';
import APP from './app/APP';

if (window.APP === undefined) {
  window.APP = APP;
}

const app = new RootApp();
app.init();

