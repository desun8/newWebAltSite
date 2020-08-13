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

const getCssVar = (name = '', elm = document.documentElement) => {
  return getComputedStyle(elm).getPropertyValue(name);
};

class HomeApp extends Index {
  constructor(...props) {
    super(...props);

    //**** COMMON ****//
    this.$elms = {
      blockDev: document.querySelector('.block--dev'),
      blockSeo: document.querySelector('.block--seo'),
      blockDesign: document.querySelector('.block--design'),
    };

    //**** CHANGE THEME ****//
    this.themeConfig = {
      elms: [this.$elms.blockSeo, this.$elms.blockDesign],
      styles: {
        [this.$elms.blockSeo.id]: {
          bgColor: getCssVar('c-black-second') || '#262626'
        },
        [this.$elms.blockDesign.id]: {
          bgColor: getCssVar('c-red') || '#ff5000'
        }
      },
      classNames: {
        [this.$elms.blockSeo.id]: 'theme-dark',
        [this.$elms.blockDesign.id]: 'theme-orange'
      }
    };

    this.changeTheme = new ChangeTheme(this.themeConfig.elms, this.themeConfig.styles, this.themeConfig.classNames);

    //**** HERO SLIDER ****//
    this.heroSliderElms = {
      announcement: document.querySelector('.hero-news'),
      taglines: document.querySelector('.hero-taglines')
    };

    this.announcementSlider = new SliderWithTypewrite(this.heroSliderElms.announcement, 'hero-news__item');
    this.taglinesSlider = new SliderWithTypewrite(this.heroSliderElms.taglines, 'hero-taglines__item');

    //**** HERO TICKER ****//
    this.tickerElm = document.querySelector('.hero__scroll');
    this.ticker = new TextRunner(this.tickerElm);

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
    this.redirectFooter = new RedirectFooter(document.querySelector('.footer-redirect'));
  }


  initDesktop() {
    super.initDesktop();
    // this.announcementSlider.autoplay();
    // this.taglinesSlider.autoplay();
    this.symbolsAnimation.forEach(item => item.init());
    this.awardsList.desktop();
    this.redirectFooter.initDesktop();
  }

  initMobile() {
    super.initMobile();
    this.redirectFooter.initMobile();
    // for (const block in this.$elms) {
    //   console.log(this.$elms[block]);
    //   // new BlockText(block);
    // }
    for (const [key,value] of Object.entries(this.$elms)) {
      new BlockText(value);
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
  }

  update() {
    super.update();
  }

  init() {
    super.init();

    this.changeTheme.init();
    this.awardsList.init()
    new CanvasSphere();
  }
}

export default HomeApp;