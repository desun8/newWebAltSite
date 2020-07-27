import smoothScroll from './components/smooth-scroll';
import Collapsible from './components/collapsible';
import Menu from './components/menu';
import TextRunner from './components/textRunner';
import { ScrollbarPage } from './components/scrollbar';
import '../styles/root.scss';
import TimerSlider, { TimerSliderFadeLeft } from './components/timerSlider';
import Footer from './components/footer';

// smoothScroll();

// скроллбар
const cbOnScroll = (e) => {
  console.log(e);
};
const scrollbarOptions = {
  className: 'os-theme-default',
};
const scrollbar = new ScrollbarPage(document.body, scrollbarOptions);

// меню
const menu = document.querySelector('.page-menu');
const nav = menu.querySelector('.page-nav');
const menuOpen = document.querySelector('.menu-btn');
const menuClose = menu.querySelector('.page-menu__close');

const menuTextTickers = menu.querySelectorAll('.ticker');

const pageMenu = new Menu(menu, menuOpen, menuClose, nav);
menuTextTickers.forEach(ticker => new TextRunner(ticker, 4));

// футер
const footer = document.querySelector('.page-footer');
new Footer(footer);
// new TimerSliderFadeLeft(document.querySelector('.footer-feedback__actions'), 'footer-feedback__link').autoplay();