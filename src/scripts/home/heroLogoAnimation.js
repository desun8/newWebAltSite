import { gsap } from 'gsap';

class HeroLogoAnimation {
  constructor() {
    this.block = document.querySelector('.hero');

    this.wrap = this.block.querySelector('.hero__wrap-center');
    this.wrapPos = this.getWrapPos();

    this.logoDot = this.block.querySelector('.hero__logo-dot');
    // this.logoSvg = this.block.querySelector('.hero__logo-letter svg');
    // this.logoSvgElms = {
    //   top: this.logoSvg.querySelectorAll('.top'),
    //   bottom: this.logoSvg.querySelectorAll('.bottom'),
    //   left: this.logoSvg.querySelectorAll('.left'),
    //   right: this.logoSvg.querySelectorAll('.right')
    // };

    this.isInside = null;

    this.ticking = false;

    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  getWrapPos() {
    const rect = this.wrap.getBoundingClientRect();
    let { x, y, width, height } = rect;

    return {
      top: Math.floor(y),
      bottom: Math.floor(y + height),
      left: Math.floor(x),
      right: Math.floor(x + width),
    };
  }

  dotAnimation(e) {
    let { x, y } = e;

    x = x * 0.01;
    y = y * 0.01;

    gsap.to(this.logoDot, { x, y });
  }

  svgAnimation(e) {
    let { x, y } = e;
    let isInside = null;

    {
      const { top, bottom, left, right } = this.wrapPos;
      // console.log(this.wrapPos);

      isInside = x > left && x < right && y > top && y < bottom;
    }

    console.log('is inside: ', isInside);

    if (this.isInside === isInside) return;

    this.isInside = isInside;

    gsap.to(this.logoSvgElms.top, {y: isInside ? 0 : -20})
    gsap.to(this.logoSvgElms.bottom, {y: isInside ? 0 : 20})
    gsap.to(this.logoSvgElms.left, {x: isInside ? 0 : -20})
    gsap.to(this.logoSvgElms.right, {x: isInside ? 0 : 20})
  }

  handleMouseMove(e) {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.dotAnimation(e);
        // this.svgAnimation(e);
        this.ticking = false;
      });

      this.ticking = true;
    }
  }

  addEvent() {
    this.block.addEventListener('mousemove', this.handleMouseMove);
  }

  removeEvent() {
    this.block.removeEventListener('mousemove', this.handleMouseMove);
  }

  update() {
    this.wrapPos = this.getWrapPos();
  }

  initDesktop() {
    this.addEvent();
  }

  initMobile() {
    this.removeEvent();
  }
}

export default HeroLogoAnimation;