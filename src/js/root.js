import smoothScroll from './components/smooth-scroll';
import Collapsible from './components/collapsible';
import Menu from './components/menu';
import TextRunner from './components/textRunner';

import '../styles/root.scss';

// smoothScroll();

// меню
const menu = document.querySelector('.page-menu');
const nav = menu.querySelector('.page-nav');
const menuOpen = document.querySelector('.menu-btn');
const menuClose = menu.querySelector('.page-menu__close');

const menuTextTickers = menu.querySelectorAll('.ticker');

const pageMenu = new Menu(menu, menuOpen, menuClose, nav);
menuTextTickers.forEach(ticker => new TextRunner(ticker, 4));
