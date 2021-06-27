import TextRunner from './textRunner';
import { TimerSliderFadeLeft } from './timerSlider';

export default class Footer {
  constructor(elm) {
    this.elm = elm;

    this.imageBg = this.elm.querySelector('.page-footer__bg');
    this.showImage = true;
  }

  ticker() {
    const tickerText = this.elm.querySelectorAll('.ticker');
    if (tickerText) {
      tickerText.forEach(ticker => new TextRunner(ticker, 4));
    }
  }

  slider() {
    const slider = this.elm.querySelector('.footer-feedback__slider');
    if (slider) {
      new TimerSliderFadeLeft(slider, 'footer-feedback__link', 2000);
    }
  }

  toggleImageVisible() {
    if (this.showImage) {
      this.imageBg.style.opacity = '1';
    } else {
      this.imageBg.style.opacity = '0';
    }
  }

  intersectionObserver() {
    const isVisible = (entries) => {
      entries.forEach(entry => {
        const { isIntersecting } = entry;

        this.showImage = !!isIntersecting;
        this.toggleImageVisible();
        // console.log('this.showImage ->', this.showImage);
      });
    };

    return new IntersectionObserver(isVisible, { threshold: 0.5 });
  }

  // Скорее всего только для главной страницы
  // тк после футера есть блок с редиректом
  observeMenuBtnTheme() {
    const cb = entries => {
      entries.forEach(entry => {
        const { isIntersecting } = entry;

        if (isIntersecting) {
          document.body.classList.add('menu-btn-white');
        } else {
          document.body.classList.remove('menu-btn-white');
        }
      });
    };

    const options = {
      root: null,
      rootMargin: `0px 0px -60.5% 0px`,
      threshold: 0.5
    }

    const themeObserver = new IntersectionObserver(cb, options);
    themeObserver.observe(this.elm);
  }

  observeBtnTopTheme() {
    const cb = entries => {
      entries.forEach(entry => {
        const { isIntersecting } = entry;

        if (isIntersecting) {
          document.body.classList.add('btn-to-top-white');
        } else {
          document.body.classList.remove('btn-to-top-white');
        }
      });
    };

    const options = {
      root: null,
      rootMargin: `0px 0px 0px 0px`,
      threshold: 0.2
    }

    const themeObserver = new IntersectionObserver(cb, options);
    themeObserver.observe(this.elm);
  }

  init() {
    this.ticker();
    this.slider();
    this.observer = this.intersectionObserver();
    this.observer.observe(this.elm);
    this.observeMenuBtnTheme();
    this.observeBtnTopTheme();
  }
}