import Index from './index';
import SymbolsAnimation from '../home/symbolsAnimation';
import ChangeTheme from '../home/changeTheme';
import SliderWithTypewrite from '../home/SliderWithTypewrite';
import TextRunner from '../components/textRunner';
import Counter from '../components/counter';
import AwardsList from '../home/awards-list';
import RedirectFooter from '../home/redirectFooter';
import BlockText from '../home/blockText';
import CanvasSphere from '../home/canvasShpere';
import HeroLogoAnimation from '../home/heroLogoAnimation';
import Grained, { grainedOptions } from '../_lib/Grained';

class HomeApp extends Index {
  constructor(...props) {
    super(...props);

    //**** COMMON ****//
    this.$elms = {
      blockMarketing: document.querySelector('.block--marketing'),
      blockDev: document.querySelector('.block--dev'),
      blockSeo: document.querySelector('.block--seo'),
      blockDesign: document.querySelector('.block--design'),
    };

    //**** CHANGE THEME ****//
    this.changeTheme = new ChangeTheme();

    //**** HERO SLIDER ****//
    this.heroSliderElms = {
      announcement: document.querySelector('.hero-announcement'),
      taglines: document.querySelector('.hero-taglines')
    };

    this.announcementSlider = new SliderWithTypewrite(this.heroSliderElms.announcement, 'hero-announcement__item');
    this.taglinesSlider = new SliderWithTypewrite(this.heroSliderElms.taglines, 'hero-taglines__item');

    //**** HERO TICKER ****//
    this.tickerElms = document.querySelectorAll('.ticker');
    if (this.tickerElms.length) {
      this.tickerElms.forEach(elm => {
        new TextRunner(elm);
      });
    }

    //**** HERO ANIMATION LOGO ****//
    this.heroLogoAnimation = new HeroLogoAnimation();

    //**** VERTICAL SYMBOLS ****//
    this.symbolElms = [
      {
        parent: this.$elms.blockDev,
        elm: this.$elms.blockDev.querySelectorAll('.block--dev .block-symbols__item')
      },
      {
        parent: this.$elms.blockSeo,
        elm: this.$elms.blockSeo.querySelectorAll('.block-symbols__item')
      },
      {
        parent: this.$elms.blockDesign,
        elm: this.$elms.blockDesign.querySelectorAll('.block-symbols__item')
      },
    ];

    this.symbolsAnimation = this.symbolElms.map(item => new SymbolsAnimation(item.elm, item.parent));

    //**** NUMBER ANIMATION ****//
    this.counterElms = document.querySelectorAll('.number-count__dynamic');
    this.counter = new Counter(this.counterElms);

    //**** AWARDS LIST ****//
    this.awardsList = new AwardsList();

    //**** REDIRECT FOOTER ****//
    this.redirectFooterElm = document.querySelector('.footer-redirect');
    this.redirectFooter = new RedirectFooter(this.redirectFooterElm);
  }


  initDesktop() {
    super.initDesktop();
    // this.announcementSlider.autoplay();
    // this.taglinesSlider.autoplay();
    this.symbolsAnimation.forEach(item => item.init());
    this.awardsList.desktop();
    this.redirectFooter.initDesktop();
    this.heroLogoAnimation.initDesktop();
  }

  initMobile() {
    super.initMobile();
    this.redirectFooter.initMobile();
    for (const [key, value] of Object.entries(this.$elms)) {
      if (value) {
        new BlockText(value);
      }
    }
  }

  resizeDesktop() {
    super.resizeDesktop();
    this.awardsList.desktop();
  }

  resizeMobile() {
    super.resizeMobile();

    this.symbolsAnimation.forEach(item => item.mobile());
    this.awardsList.mobile();
    this.heroLogoAnimation.initMobile();
  }

  update() {
    super.update();
  }

  init() {
    super.init();

    this.changeTheme.init();
    this.awardsList.init();
    new CanvasSphere();

    let intervalId = undefined;
    intervalId = setInterval(() => {
      const isAllow = !!document.querySelector('body.os-host .os-padding .os-content');
      if (isAllow) {
        new Grained(this.redirectFooterElm, grainedOptions);
        clearInterval(intervalId);
      }
    }, 100);
  }
}

export default HomeApp;
