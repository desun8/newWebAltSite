import { gsap } from "gsap";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import APP from "../app/APP";
import Collapsible from "./collapsible";
import {
  disableScroll,
  enableScroll,
} from "./smoothScroll/plugins/ModalPlugin";
import SmoothScroll from "./smoothScroll/SmoothScroll";

export default class Menu {
  constructor(elm, btnsOpen, btnClose, nav, appConfig = null) {
    this.elm = elm;
    this.elmSelector =
      this.elm.tagName.toLowerCase() +
      "." +
      Array.from(this.elm.classList).join(".");
    this.btnsOpen = btnsOpen;
    this.btnClose = btnClose;
    this.nav = nav;

    this.isVisible = false;
    this.appConfig = appConfig;

    this.pageMain = document.querySelector("main");
    this.pageHeader = document.querySelector(".page-header:not(.page-header--preloader)");
    this.pageFooter = document.querySelector(".page-footer");
    this.progressBar = document.querySelector(".progress-bar");
    this.footerRedirect = document.querySelector(".footer-redirect"); // только на главной
    this.blogTopElm = document.querySelector(".blog-deco-top");
    this.blogSideElm = document.querySelector(".blog-deco-side");

    this.moveTargets = [
      this.pageHeader,
      this.pageMain,
      this.progressBar,
      this.pageFooter,
      this.footerRedirect,
      this.blogTopElm,
      this.blogSideElm,
    ];
    this.moveTargets = this.moveTargets.filter((el) => el !== null);

    this.elmWidth = this.elm.offsetWidth;

    this.scrollbarInstance = null;

    this.update = this.update.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  collapseSubMenu() {
    const navSub = this.nav.querySelectorAll(".page-nav__sub-list");
    const selectedNavElm = this.nav.querySelector(".page-nav__elm--selected");

    navSub.forEach((list) => {
      const btn = list.previousElementSibling;
      const collapsible = new Collapsible(list, btn);

      const parent = list.parentElement;
      btn.addEventListener("click", () => {
        if (parent === selectedNavElm) return null;

        if (collapsible.isShow) {
          parent.classList.add("page-nav__elm--active");
          selectedNavElm.classList.add("page-nav__elm--disable");
        } else {
          parent.classList.remove("page-nav__elm--active");
          selectedNavElm.classList.remove("page-nav__elm--disable");
        }
      });
    });
  }

  initScrollbar() {
    this.scrollbarInstance = new SmoothScroll(
      this.elm.querySelector(".page-menu__wrap")
    );
    this.scrollbarInstance.init();
  }

  destroyScrollbar() {
    if (this.scrollbarInstance) {
      this.scrollbarInstance.instance.destroy();
    }
  }

  toggleView(shouldShow) {
    const targets = this.moveTargets;
    const duration = 0.3;
    const delay = APP.isDesktop ? 0.1 : 0.15;

    const menuTween = () =>
      gsap.to(this.elm, {
        x: shouldShow ? 0 : -this.elmWidth,
        duration,
        delay,
        onStart: () => {
          this.elm.style.willChange = "transform";
        },
        onComplete: () => {
          this.elm.style.willChange = "";
        },
      });

    if (APP.isDesktop) {
      gsap
        .timeline()
        .add(menuTween())
        // Сдвигаем контент в сторону
        .to(
          targets,
          {
            x: shouldShow ? this.elmWidth : 0,
            duration,
            delay,
            onStart: () => {
              targets.forEach((elm) => {
                elm.style.willChange = "transform";
              });
            },
            onComplete: () => {
              if (!shouldShow) {
                this.pageHeader.style.transform = null;
                this.elm.style.transform = null;
              }

              targets.forEach((elm) => {
                elm.style.willChange = null;
              });
            },
          },
          0
        )
        .to(
          this.pageHeader,
          {
            alpha: shouldShow ? 0 : 1,
            duration,
            delay,
            onStart() {
              const target = this.targets()[0];
              if (shouldShow) {
                target.classList.add("is-menu-show");
              } else {
                target.classList.remove("is-menu-show");
              }
            },
          },
          0
        );
    } else {
      menuTween().play();
    }
  }

  handleClick() {
    this.isVisible = !this.isVisible;

    if (this.isVisible) {
      if (APP.scrollbar) {
        disableScroll(APP.scrollbar);
      } else {
        disablePageScroll(this.elm);
      }
    } else {
      if (APP.scrollbar) {
        enableScroll(APP.scrollbar);
      } else {
        enablePageScroll(this.elm);
      }
    }

    this.toggleView(this.isVisible);
  }

  // Закрытие меню
  handleClickOutside(e) {
    const btnOpenMain = this.btnsOpen[0];

    if (
      !this.isVisible ||
      e.target === btnOpenMain ||
      e.target.parentElement === btnOpenMain
    ) {
      return;
    }

    const isOutside = !e.target.closest(this.elmSelector);

    if (isOutside) {
      this.handleClick();
    }
  }

  addEvents() {
    this.btnsOpen.forEach((btn) => {
      btn?.addEventListener("click", this.handleClick);
    });
    this.btnClose.addEventListener("click", this.handleClick);
    APP.isDesktop &&
      document.body.addEventListener("click", this.handleClickOutside);
  }

  update() {
    this.elmWidth = this.elm.offsetWidth;

    if (!this.isVisible) {
      gsap.set(this.elm, { x: -this.elmWidth });
    }
  }

  desktop() {
    console.log("Menu - init desktop");
    // this.initScrollbar();
  }

  mobile() {
    // this.destroyScrollbar();
  }

  init() {
    this.collapseSubMenu();
    this.addEvents();
    this.initScrollbar();
  }
}
