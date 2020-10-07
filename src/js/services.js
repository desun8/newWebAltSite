// import './pages/blog/vue';
import '../styles/services.scss';
import CardsAnimation from './pages/services/animation';
import APP from './app/APP';

if (!APP.isDesktop) {
  new CardsAnimation().init();
}
