import { gsap } from 'gsap';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import Collapsible from './collapsible';
import { SmoothScrollbarMenu } from './scrollbar';


export default class Menu {
  constructor(elm, btnOpen, btnClose, nav, appConfig = null) {
    this.elm = elm;
    this.elmSelector = this.elm.tagName.toLowerCase() + '.' + Array.from(this.elm.classList).join('.');
    this.btnOpen = btnOpen;
    this.btnClose = btnClose;
    this.nav = nav;

    this.isVisible = false;
    this.appConfig = appConfig;

    this.pageMain = document.querySelector('main');
    this.pageHeader = document.querySelector('header');
    this.pageFooter = document.querySelector('footer');
    this.progressBar = document.querySelector('.progress-bar');
    this.footerRedirect = document.querySelector('.footer-redirect'); // только на главной

    this.elmWidth = this.elm.offsetWidth;

    this.scrollbarConfig = {
      options: {
        className: 'os-theme-menu'
      },
      elm: this.elm.querySelector('.page-menu__wrap')
    };

    this.scrollbarInstance = new SmoothScrollbarMenu(this.scrollbarConfig.elm, this.scrollbarConfig.options);

    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  collapseSubMenu() {
    const navSub = this.nav.querySelectorAll('.page-nav__sub-list');
    const selectedNavElm = this.nav.querySelector('.page-nav__elm--selected');

    navSub.forEach(list => {
      const btn = list.previousElementSibling;
      const collapsible = new Collapsible(list, btn);

      const parent = list.parentElement;
      btn.addEventListener('click', () => {
        if (parent === selectedNavElm) return null;

        if (collapsible.isShow) {
          parent.classList.add('page-nav__elm--active');
          selectedNavElm.classList.add('page-nav__elm--disable');
        } else {
          parent.classList.remove('page-nav__elm--active');
          selectedNavElm.classList.remove('page-nav__elm--disable');
        }
      });
    });
  }

  initScrollbar() {
    this.scrollbarInstance.init();
  }

  destroyScrollbar() {
    if (this.scrollbarInstance) {
      this.scrollbarInstance.instance.destroy();
    }
  }

  toggleView(shouldShow) {
    const targets = [this.pageHeader, this.pageMain, this.progressBar, this.pageFooter, this.footerRedirect];
    const duration = 0.3;
    const tl = gsap.timeline();

    tl.to(this.elm, {
      x: shouldShow ? 0 : -this.elmWidth,
      duration,
    }, 0);
    tl.to(
      targets,
      {
        x: shouldShow ? this.elmWidth : 0,
        duration,
        // TODO: возможно улучшит производитлеьность?
        // onStart: () => {
        //   this.pageHeader.style.willChange = 'transform';
        //   this.pageMain.style.willChange = 'transform';
        // },
        onComplete: () => {
          // this.pageHeader.style.willChange = null;
          // this.pageMain.style.willChange = null;

          if (!shouldShow) {
            this.pageHeader.style.transform = null;
            this.elm.style.transform = null;
          }
        }
      },
      0);
    tl.to(this.btnOpen, {
      alpha: shouldShow ? 0 : 1, duration,
    }, shouldShow ? 0 : 0.5);

    // TODO: возможно улучшит производитлеьность?
    // this.pageHeader.style.willChange = 'transform';
    // this.pageMain.style.willChange = 'transform';
    //
    // setTimeout(
    //   () => {
    //     tl.to(this.elm, {
    //       x: shouldShow ? 0 : -this.elmWidth,
    //       duration,
    //     }, 0);
    //     tl.to(
    //       [this.pageHeader, this.pageMain],
    //       {
    //         x: shouldShow ? this.elmWidth : 0,
    //         duration,
    //         onComplete: () => {
    //           if (!shouldShow) {
    //             this.pageHeader.style.transform = null;
    //             this.elm.style.transform = null;
    //           }
    //         }
    //       },
    //       0);
    //     tl.to(this.btnOpen, {
    //       alpha: shouldShow ? 0 : 1, duration,
    //       onComplete: () => {
    //         this.pageHeader.style.willChange = null;
    //         this.pageMain.style.willChange = null;
    //       }
    //     }, shouldShow ? 0 : 0.5);
    //   },
    //   300
    // );

  }

  handleClick() {
    this.isVisible = !this.isVisible;

    if (this.appConfig?.isDesktop === false) {
      if (this.isVisible) {
        disablePageScroll(this.elm);
      } else {
        enablePageScroll(this.elm);
      }
    }

    this.toggleView(this.isVisible);
  }

  // Закрытие меню
  handleClickOutside(e) {
    if (!this.isVisible || e.target === this.btnOpen) {
      return;
    }

    const isOutside = !e.target.closest(this.elmSelector);

    if (isOutside) {
      this.handleClick();
    }
  }

  addEvents() {
    this.btnOpen.addEventListener('click', this.handleClick);
    this.btnClose.addEventListener('click', this.handleClick);
    document.body.addEventListener('click', this.handleClickOutside);
  }

  update() {
    this.elmWidth = this.elm.offsetWidth;
  }

  desktop() {
    this.initScrollbar();
  }

  mobile() {
    this.destroyScrollbar();
  }

  init() {
    this.collapseSubMenu();
    this.addEvents();
  }
}