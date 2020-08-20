import Menu from '../components/menu';
import TextRunner from '../components/textRunner';
import Index from './index';
import { ScrollbarPage } from '../components/scrollbar';
import Footer from '../components/footer';
import { ProgressBarMobile } from '../components/progressBar';

class RootApp extends Index {
  constructor(...props) {
    super(...props);

    //**** SCROLLBAR ****//

    this.scrollbarOptions = {
      className: 'os-theme-default',
    };

    this.scrollbar = new ScrollbarPage(document.body, this.scrollbarOptions);


    this.progressBar = null;

      //**** MENU ****//

    this.menuElms = {
      menu: document.querySelector('.page-menu'),
      nav: document.querySelector('.page-nav'),
      btnOpen: document.querySelector('.menu-btn'),
      btnClose: document.querySelector('.page-menu__close'),
      tickerElms: document.querySelectorAll('.page-menu .ticker')
    };

    this.menu = new Menu(this.menuElms.menu, this.menuElms.btnOpen, this.menuElms.btnClose, this.menuElms.nav, this.config);

    //**** FOOTER ****//

    this.footer = new Footer(document.querySelector('.page-footer'));
  }

  initDesktop() {
    super.initDesktop();

    this.scrollbar.init();
    this.menu.desktop();
  }

  initMobile() {
    super.initMobile();

    this.progressBar = new ProgressBarMobile();
    this.progressBar.init();
  }

  resizeDesktop() {
    super.resizeDesktop();

    this.menu.desktop();

    if (this.progressBar) {
      this.progressBar.destroy();
    }
  }

  resizeMobile() {
    super.resizeMobile();

    this.scrollbar.destroy();
    this.menu.mobile();

    if (!this.progressBar) {
      this.progressBar = new ProgressBarMobile();
      this.progressBar.init();
    } else {
      this.progressBar.resize();
    }
  }

  update() {
    super.update();

    this.menu.update();

    if (this.progressBar) {
      this.progressBar.resize();
    }

    if (this.scrollbar) {
      this.scrollbar.smoothScroll.resize();
    }
  }

  init() {
    super.init();

    this.menu.init();
    this.menuElms.tickerElms.forEach(ticker => new TextRunner(ticker, 4));
    this.footer.init();
  }
}

export default RootApp;