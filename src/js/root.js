import smoothScroll from './components/smooth-scroll';
import Collapsible from './components/collapsible';
import Menu from './components/menu';
import TextRunner from './components/textRunner';
import { ScrollbarPage } from './components/scrollbar';
import '../styles/root.scss';

// smoothScroll();

// скроллбар
const cbOnScroll = (e) => {
  console.log(e);
}
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
