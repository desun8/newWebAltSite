//скролл анимация символов (по краям блоков)
import { gsap } from 'gsap';
import { throttle } from 'lodash';

export default class SymbolsAnimation {
  constructor(elms, parentBlock) {
    this.elms = Array.from(elms);
    this.parent = parentBlock;

    this.isFirst = true;

    this.throttleScroll = throttle(this.handleScroll, 200);
    this.throttleScroll = this.throttleScroll.bind(this);
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
    this.animation();
  }

  addEvent() {
    window.addEventListener(
      'wheel',
      this.throttleScroll,
      { passive: true }
    );
  }

  removeEvent() {
    window.removeEventListener(
      'wheel',
      this.throttleScroll,
      { passive: true }
    );
  }

  desktop() {
    this.init();
  }

  mobile() {
    this.removeEvent();
  }

  init() {
    this.animation();
    this.addEvent();
  }
}