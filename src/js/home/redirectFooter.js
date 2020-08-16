import { gsap } from 'gsap';


export default class RedirectFooter {
  constructor(elm, duration = 5) {
    this.$elms = {
      root: elm,
      title: elm.querySelector('.footer-redirect__title'),
      linkName: elm.querySelector('.footer-redirect__link-name'),
      linkIcon: elm.querySelector('.footer-redirect__link-name .link__arrow'),
      counter: elm.querySelector('.footer-redirect__counter-wrap'),
    };

    this.duration = Math.floor(duration);

    this.shouldPlay = false;
    this.textTween = null;
    this.counterTween = null;

    this.isStart = false;
    this.tickingHover = false;

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    // this.init();
  }

  animationGradient() {
    const value = {
      init: 0,
      to: 100
    };

    // const linkNameTween = (val) => gsap.to()

    this.textTween = gsap.to(value,
      {
        init: value.to,
        duration: this.duration,
        ease: 'none',
        onUpdate: () => {
          requestAnimationFrame(() => {
            this.$elms.title.style.background = `linear-gradient(90deg, var(--c-red) ${value.init}%, var(--redirect-color) ${value.init}%)`;
            this.$elms.title.style.webkitBackgroundClip = 'text';

            if (value.init >= 88) {
              const max = 12;
              const curr = max - (value.to - value.init);
              const pos = curr / (max / 100);

              this.$elms.linkName.style.background = `linear-gradient(90deg, var(--c-red) ${pos}%, var(--redirect-color) ${pos}%)`;
              this.$elms.linkName.style.webkitBackgroundClip = 'text';

              if (pos > 99) {
                this.$elms.linkIcon.style.fill = 'var(--c-red)';
              }
            } else {
              const pos = 0;

              this.$elms.linkName.style.background = `linear-gradient(90deg, var(--c-red) ${pos}%, var(--redirect-color) ${pos}%)`;
              this.$elms.linkName.style.webkitBackgroundClip = 'text';
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

  start(isMobile = false) {
    this.animationGradient();
    !isMobile && this.animationCounter();
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


      this.$elms.linkIcon.style.fill = null;
    }

    if (this.counterTween) {
      // this.counterTween.pause(0);
      this.counterTween.duration(1);
      this.counterTween.reverse();
    }
  }

  intersectionObserver() {
    const isVisible = (entries) => {
      entries.forEach(entry => {
        const { isIntersecting } = entry;

        this.shouldPlay = !!isIntersecting;

        if (this.shouldPlay) {
          this.start(true);
        } else {
          this.stop();
        }
      });
    };

    return new IntersectionObserver(isVisible, { threshold: 0.5 });
  }

  handleMouseOver() {
    if (!this.tickingHover && !this.isStart) {
      requestAnimationFrame(() => {
        this.isStart = true;
        this.start();
        this.tickingHover = false;
      });

      this.tickingHover = true;
    }
  }

  handleMouseLeave() {
    if (!this.tickingHover && this.isStart) {
      requestAnimationFrame(() => {
        this.isStart = false;
        this.stop();
        this.tickingHover = false;
      });

      this.tickingHover = true;
    }
  }

  addEvents() {
    this.$elms.root.addEventListener('mouseover', this.handleMouseOver);
    this.$elms.root.addEventListener('mouseleave', this.handleMouseLeave);
  }

  removeEvents() {
    this.$elms.root.removeEventListener('mouseover', this.handleMouseOver);
    this.$elms.root.removeEventListener('mouseleave', this.handleMouseLeave);
  }

  initDesktop() {
    this.stop();
    this.makeCounterElms();
    this.addEvents();
  }

  initMobile() {
    this.stop();
    this.removeEvents();
    this.observer = this.intersectionObserver();
    this.observer.observe(this.$elms.root);
  }

  init() {
    // this.observer = this.intersectionObserver();
    // this.observer.observe(this.$elms.root);

    this.makeCounterElms();
    this.addEvents();
  }
}