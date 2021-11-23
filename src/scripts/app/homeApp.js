import Index from "./index";
import SymbolsAnimation from "../pages/home/symbolsAnimation";
import ChangeTheme from "../pages/home/changeTheme";
import SliderWithTypewrite from "../pages/home/SliderWithTypewrite";
import TextRunner from "../components/textRunner";
import Counter from "../components/counter";
import AwardsList from "../pages/home/awards-list";
import RedirectFooter from "../pages/home/redirectFooter";
import BlockText from "../pages/home/blockText";
import HeroLogoAnimation from "../pages/home/heroLogoAnimation";
import marketingMagmaParallax from "../pages/home/marketingMagmaParallax";
import { marketingTriangleAnimation } from "../pages/home/marketingTriangleAnimation";

class HomeApp extends Index {
  constructor(...props) {
    super(...props);

    //**** COMMON ****//
    this.$elms = {
      blockMarketing: document.querySelector(".block--marketing"),
      blockDev: document.querySelector(".block--dev"),
      blockSeo: document.querySelector(".block--seo"),
      blockDesign: document.querySelector(".block--design"),
    };

    //**** CHANGE THEME ****//
    this.changeTheme = new ChangeTheme();

    //**** HERO SLIDER ****//
    this.heroSliderElms = {
      announcement: document.querySelector(".hero-announcement"),
      taglines: document.querySelector(".hero-taglines"),
    };

    this.announcementSlider = new SliderWithTypewrite(
      this.heroSliderElms.announcement,
      "hero-announcement__item"
    );
    this.taglinesSlider = new SliderWithTypewrite(
      this.heroSliderElms.taglines,
      "hero-taglines__item"
    );

    //**** HERO TICKER ****//
    this.tickerElms = document.querySelectorAll(
      ".ticker:not(.page-menu .ticker)"
    );
    if (this.tickerElms.length) {
      this.tickerElms.forEach((elm) => {
        new TextRunner(elm);
      });
    }

    //**** HERO ANIMATION LOGO ****//
    this.heroLogoAnimation = new HeroLogoAnimation();

    //**** VERTICAL SYMBOLS ****//
    this.symbolElms = [
      {
        parent: this.$elms.blockDev,
        elm: this.$elms.blockDev.querySelectorAll(
          ".block--dev .block-symbols__item"
        ),
      },
      {
        parent: this.$elms.blockSeo,
        elm: this.$elms.blockSeo.querySelectorAll(".block-symbols__item"),
      },
      {
        parent: this.$elms.blockDesign,
        elm: this.$elms.blockDesign.querySelectorAll(".block-symbols__item"),
      },
    ];

    this.symbolsAnimation = this.symbolElms.map(
      (item) => new SymbolsAnimation(item.elm, item.parent)
    );

    //**** NUMBER ANIMATION ****//
    this.counterElms = document.querySelectorAll(".number-count__dynamic");
    this.counter = new Counter(this.counterElms);

    //**** AWARDS LIST ****//
    this.awardsList = new AwardsList();

    //**** REDIRECT FOOTER ****//
    this.redirectFooterElm = document.querySelector(".footer-redirect");
    this.redirectFooter = new RedirectFooter(this.redirectFooterElm);
  }

  initDesktop() {
    super.initDesktop();
    // this.announcementSlider.autoplay();
    // this.taglinesSlider.autoplay();
    this.symbolsAnimation.forEach((item) => item.init());
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

    this.symbolsAnimation.forEach((item) => item.mobile());
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

    // import("../pages/home/canvasSphere").then(({ default: CanvasSphere }) => {
    //   new CanvasSphere();
    // });

    if (this.$elms.blockMarketing) {
      marketingTriangleAnimation();
      marketingMagmaParallax();
    }
  }
}

export default HomeApp;
