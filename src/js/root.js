import smoothScroll from './smooth-scroll';
import Collapsible from './collapsible';
import Menu from './menu';
import TextRunner from './textRunner';

// smoothScroll();

// меню
const menu = document.querySelector('.page-menu');
const nav = menu.querySelector('.page-nav');
const menuOpen = document.querySelector('.menu-btn');
const menuClose = menu.querySelector('.page-menu__close');

const menuTextTickers = menu.querySelectorAll('.ticker');

const pageMenu = new Menu(menu, menuOpen, menuClose, nav);
menuTextTickers.forEach(ticker => new TextRunner(ticker, 4));
