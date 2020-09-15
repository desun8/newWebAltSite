import { gsap } from 'gsap';

class ProgressBar {
  constructor() {
    this.elm = document.querySelector('.progress-bar');
  }

  update(size) {
    gsap.to(this.elm, { scaleY: size, ease: 'circ.out' });
  }
}

export class ProgressBarMobile extends ProgressBar {
  constructor(...props) {
    super(...props);

    this.handleScroll = this.handleScroll.bind(this);
    this.ticking = false;
  }

  handleScroll() {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.update(this.getScrollRatioY());

        this.ticking = false;
      });

      this.ticking = true;
    }
  }

  getScrollRatioY() {
    const pos = window.scrollY;

    return pos / this.height;
  }

  resize() {
    this.height = document.body.clientHeight - window.innerHeight;
  }

  destroy() {
    window.removeEventListener(
      'scroll',
      this.handleScroll,
      { passive: true }
    );
  }

  init() {
    this.height = document.body.clientHeight - window.innerHeight;
    this.handleScroll();

    window.addEventListener(
      'scroll',
      this.handleScroll,
      { passive: true }
    );
  }
}

export default ProgressBar;