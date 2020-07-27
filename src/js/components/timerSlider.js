import { gsap } from 'gsap';

class TimerSlider {
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
    this.items.forEach((elm, i) => {
      if (i !== this.curr) elm.style.opacity = '0';
    });
  }
}

export class TimerSliderFadeLeft extends TimerSlider {
  constructor(...props) {
    super(...props);
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

    tl.to(prevElm, { alpha: 0, x: -20, zIndex: 0 });
    tl.fromTo(
      currElm,
      { alpha: 0, x: -20, zIndex: 0 },
      { alpha: 1, x: 0, zIndex: 1 }
    );
  }

  // проигрываем/останавливаем если блок видимый
  intersectionObserver() {
    const isVisible = (entries) => {
      entries.forEach(entry => {
        const { isIntersecting } = entry;

        if (isIntersecting) {
          clearInterval(this.intervalId);
          this.autoplay();
          // console.log('start slider');
        } else {
          clearInterval(this.intervalId);
          // console.log('pause slider');
        }
      });
    };

    return new IntersectionObserver(isVisible, { threshold: 0.5 });
  }

  init() {
    super.init();
    this.observer = this.intersectionObserver();
    this.observer.observe(this.root);
  }
}

export default TimerSlider;