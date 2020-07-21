import { gsap } from 'gsap';
import { throttle } from 'lodash';
import Collapsible from './collapsible';

export default class Menu {
  constructor(elm, btnOpen, btnClose, nav) {
    this.elm = elm;
    this.btnOpen = btnOpen;
    this.btnClose = btnClose;
    this.nav = nav;

    this.isVisible = false;

    this.pageMain = document.querySelector('main');
    this.pageHeader = document.querySelector('header');

    this.elmWidth = this.elm.offsetWidth;

    this.init();
  }

  collapseSubMenu() {
    const navSub = this.nav.querySelectorAll('.page-nav__sub-list');
    navSub.forEach(list => {
      const btn = list.previousElementSibling;
      const collapsible = new Collapsible(list, btn);

      // TODO: доделать, если раскрытый список должен всегда иметь opacity: 1
      const parent = list.parentElement;
      btn.addEventListener('click', () => {
        if (collapsible.isShow) {
          parent.classList.add('page-nav__elm--active');
        } else {
          parent.classList.remove('page-nav__elm--active');
        }
      });
    });
  }

  toggleView(shouldShow) {
    const duration = 0.3;
    const tl = gsap.timeline();

    tl.to(this.elm, {
      x: shouldShow ? 0 : -this.elmWidth,
      duration,
    }, 0);
    tl.to(
      [this.pageHeader, this.pageMain],
      {
        x: shouldShow ? this.elmWidth : 0,
        duration,
        onComplete: () => {
          if (!shouldShow) {
            this.pageHeader.style.transform = null;
            this.elm.style.transform = null;
          }
        }
      },
      0);
    tl.to(this.btnOpen, {
      alpha: shouldShow ? 0 : 1, duration
    }, shouldShow ? 0 : 0.5);
  }

  handleResize() {
    this.elmWidth = this.elm.offsetWidth;
  }

  handleClick() {
    this.isVisible = !this.isVisible;

    this.toggleView(this.isVisible);
  }

  addEvents() {
    this.btnOpen.addEventListener('click', this.handleClick.bind(this));
    this.btnClose.addEventListener('click', this.handleClick.bind(this));

    const throttleOnResize = throttle(this.handleResize, 200);
    window.addEventListener('resize', throttleOnResize.bind(this));
  }

  init() {
    this.collapseSubMenu();
    this.addEvents();
  }
}