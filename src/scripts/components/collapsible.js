import { gsap } from 'gsap';
import { throttle } from 'lodash-es';

export default class Collapsible {
  constructor(elm, btn) {
    this.elm = elm;
    this.btn = btn;

    this.elmChild = {
      count: this.elm.childElementCount,
      children: this.elm.querySelector('li')
    };

    this.elmHeight = this.findListHeight();
    this.isShow = false;

    this.init();
  }

  findListHeight() {
    const height = this.elmChild.children.offsetHeight;
    const marginBottom = parseInt(window.getComputedStyle(this.elmChild.children).getPropertyValue('margin-bottom'));
    const totalHeight = height + marginBottom;

    return totalHeight * this.elmChild.count;
  }

  handleClick() {
    this.elm.style.willChange = 'max-height, margin-bottom';

    if (this.isShow) {
      this.isShow = false;
      this.btn.dataset.hidden = 'true';
    } else {
      this.isShow = true;
      this.btn.dataset.hidden = 'false';

    }

    setTimeout(
      () =>
        gsap.to(this.elm, {
          maxHeight: this.isShow ? this.elmHeight : 0,
          duration: 0.3,
          onComplete: () => {
            this.elm.style.willChange = null;
          }
        }),
      100
    );
  }

  handleResize() {
    this.elmHeight = this.findListHeight();

    if (parseInt(this.elm.style.maxHeight) > 0) {
      this.elm.style.maxHeight = `${this.elmHeight}px`;
    }
  }

  init() {
    this.btn.addEventListener('click', this.handleClick.bind(this));

    const throttleOnResize = throttle(this.handleResize, 200);
    window.addEventListener('resize', throttleOnResize.bind(this));
  }
}