// import './pages/blog/vue';
import CardsAnimation from './pages/services/CardsAnimation';
import APP from './app/APP';
import "./root";
import '@/styles/services.scss';

if (!APP.isDesktop) {
  new CardsAnimation().init();
}
