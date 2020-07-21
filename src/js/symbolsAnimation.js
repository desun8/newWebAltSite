//скролл анимация символов (по краям блоков)
import { gsap } from 'gsap';
import { throttle } from 'lodash';

export default class SymbolsAnimation {
  constructor(elms, parentBlock) {
    this.elms = Array.from(elms);
    this.parent = parentBlock;

    this.isFirst = true;

    this.init();
  }

  animation() {
    let { top } = this.parent.getBoundingClientRect();
    if (top < 100) top = 100;
    top = top / 2 > 500 ? 500 : Math.floor(top / 2);

    if (this.isFirst) {
      this.isFirst = false;
      gsap.set(this.elms, { y: top });
      return null;
    }

    gsap.to(this.elms, {
      y: top,
      duration: 0.4,
      delay(i) {
        return i / 10;
      }
    });
  }

  handleScroll(e) {
    // requestAnimationFrame(this.animation.bind(this));
    this.animation();
  }

  init() {
    this.animation();

    const throttleScroll = throttle(this.handleScroll, 200);

    window.addEventListener(
      'wheel',
      throttleScroll.bind(this),
      { passive: true }
    );
  }
}