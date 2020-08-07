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
        console.log('this.showImage ->', this.showImage);
      });
    };

    return new IntersectionObserver(isVisible, { threshold: 0.5 });
  }

  init() {
    this.ticker();
    this.slider();
    this.observer = this.intersectionObserver();
    this.observer.observe(this.elm);
  }
}