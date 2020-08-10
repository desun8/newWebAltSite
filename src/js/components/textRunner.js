import { gsap } from 'gsap';
import { throttle } from 'lodash';

export default class TextRunner {
  constructor(elm, duration = 2) {
    this.elm = elm;
    this.wrap = this.elm.querySelector('.ticker__wrap');
    this.text = this.wrap.querySelector('.ticker__item');
    this.textCount = this.wrap.childElementCount;

    this.duration = duration;
    this.movePos = this.getTextSize();
    this.tween = this.ticker().pause();

    this.observer = null;

    this.init();
  }

  getTextSize() {
    const width = this.text.offsetWidth;
    const marginRight = parseInt(window.getComputedStyle(this.text).getPropertyValue('margin-right'));
    const totalWidth = width + marginRight;

    return totalWidth * (this.textCount - 1);
  }

  ticker() {
    return gsap.fromTo(
      this.wrap,
      { x: 0 },
      {
        x: -this.movePos,
        duration: this.duration,
        ease: 'none',
        repeat: -1,
      }
    );
  }

  update() {
    this.movePos = this.getTextSize();

    if (this.tween !== null) {
      this.tween.kill();
    }
    this.tween = this.ticker();
  }

  intersectionObserver() {
    const isVisible = (entries, observer) => {
      entries.forEach(entry => {
        const { isIntersecting } = entry;

        if (isIntersecting) {
          this.tween.play();
          // console.log('play');
        } else {
          this.tween.pause();
          // console.log('pause');
        }
      });
    }

    return new IntersectionObserver(isVisible, { threshold: 0.5 });
  }

  init() {
    this.observer = this.intersectionObserver();
    this.observer.observe(this.elm);

    const throttleOnResize = throttle(this.update, 200);
    window.addEventListener('resize', throttleOnResize.bind(this));
  }
}