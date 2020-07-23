import { gsap } from 'gsap';

export default class TimerSlider {
  constructor(root, itemsClass, speed = 3000) {
    this.speed = speed;
    this.root = root;
    this.items = this.root.querySelectorAll(`.${itemsClass}`);
    this.size = this.items.length - 1;

    this.curr = 0;
    this.prev = null;
    this.intervalId = null;

    this.duration = 0.2;

    this.init();
  }

  changeSlide() {
    const currElm = this.items[this.curr];
    const { duration } = this;

    if (this.prev === null) {
      gsap.to(currElm, { alpha: 1, zIndex: 1, duration });

      return null;
    }

    const prevElm = this.items[this.prev];
    const tl = gsap.timeline({ duration });

    tl.to(prevElm, { alpha: 0, zIndex: 0 });
    tl.to(currElm, { alpha: 1, zIndex: 1 });
  }

  next() {
    this.changeSlide();

    this.prev = this.curr;
    this.curr += 1;

    if (this.curr > this.size) {
      this.curr = 0;
    }
  }

  autoplay() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
    }
    // else {
    //   this.update();
    // }

    this.intervalId = setInterval(() => {
      this.next();
    }, this.speed);
  }


  init() {
    this.items.forEach(elm => elm.style.opacity = '0');
  }
}