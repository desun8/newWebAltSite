import { gsap } from 'gsap';


export default class RedirectFooter {
  constructor(elm, duration = 5) {
    this.$elms = {
      root: elm,
      title: elm.querySelector('.footer-redirect__title'),
      titleIcon: elm.querySelector('.footer-redirect__title .link__arrow'),
      counter: elm.querySelector('.footer-redirect__counter-wrap'),
    };

    this.duration = Math.floor(duration);

    this.shouldPlay = false;
    this.textTween = null;
    this.counterTween = null;

    this.isStart = false;
    this.tickingHover = false;

    this.init();
  }

  animationGradient() {
    const value = {
      init: 0,
      to: 100
    };

    this.textTween = gsap.to(value,
      {
        init: value.to,
        duration: this.duration,
        ease: 'none',
        onUpdate: () => {
          requestAnimationFrame(() => {
            this.$elms.title.style.background = `linear-gradient(90deg, var(--c-red) ${value.init}%, var(--c-black-second) ${value.init}%)`;
            this.$elms.title.style.webkitBackgroundClip = 'text';

            if (value.init > 99) {
              this.$elms.titleIcon.style.fill = 'var(--c-red)';
            }
          });
        },
      });
  }

  makeCounterElms() {
    const createElm = (value) => {
      const div = document.createElement('div');
      div.innerText = value;

      this.$elms.counter.appendChild(div);
    };

    const arr = [];
    for (let i = this.duration; i >= 0; i--) {
      arr.push(i);
    }

    arr.forEach(value => createElm(value));
  }

  getCounterSize() {
    this.counterSize = this.$elms.counter.offsetHeight;

  }

  animationCounter() {
    const posY = (100 - 100 / (this.duration + 1)) * -1;

    this.counterTween = gsap.to(
      this.$elms.counter,
      {
        y: `${posY}%`,
        duration: this.duration,
        ease: 'none'
      });
  }

  start() {
    this.animationGradient();
    this.animationCounter();
    // if (this.shouldPlay) {
    //   this.animationGradient();
    //   this.animationCounter();
    // } else {
    //   this.textTween && this.textTween.pause(0);
    //   this.counterTween && this.counterTween.pause(0);
    // }
  }

  stop() {
    if (this.textTween) {
      // this.textTween.progress(0);
      // this.textTween.pause(0);
      this.textTween.duration(1);
      this.textTween.reverse();


      this.$elms.titleIcon.style.fill = null;
    }

    if (this.counterTween) {
      // this.counterTween.pause(0);
      this.counterTween.duration(1);
      this.counterTween.reverse();
    }
  }

  // intersectionObserver() {
  //   const isVisible = (entries) => {
  //     entries.forEach(entry => {
  //       const { isIntersecting } = entry;
  //
  //       this.shouldPlay = !!isIntersecting;
  //       this.start();
  //     });
  //   };
  //
  //   return new IntersectionObserver(isVisible, { threshold: 0.5 });
  // }

  createEvents() {
    this.$elms.root.addEventListener('mouseover', () => {
      if (!this.tickingHover && !this.isStart) {
        requestAnimationFrame(() => {
          this.isStart = true;
          this.start();
          this.tickingHover = false;
        });

        this.tickingHover = true;
      }
    });

    this.$elms.root.addEventListener('mouseleave', () => {
      if (!this.tickingHover && this.isStart) {
        requestAnimationFrame(() => {
          this.isStart = false;
          this.stop();
          this.tickingHover = false;
        });

        this.tickingHover = true;
      }
    });
  }

  init() {
    // this.observer = this.intersectionObserver();
    // this.observer.observe(this.$elms.root);

    this.makeCounterElms();
    this.createEvents();
  }
}