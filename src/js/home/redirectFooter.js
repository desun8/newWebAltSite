import { gsap } from 'gsap';


export default class RedirectFooter {
  constructor(elm, duration = 5) {
    this.$elms = {
      root: elm,
      title: elm.querySelector('.footer-redirect__title')
    };

    this.duration = duration;

    this.shouldPlay = false;
    this.textTween = null;

    this.init();
  }

  animationText() {
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
            this.$elms.title.style.background = `linear-gradient(90deg, var(--c-red) ${value.init}%, rgba(255, 255, 255, 0.02) ${value.init}%)`;
            this.$elms.title.style.webkitBackgroundClip = 'text';
          })
        },
      });
  }

  play() {
    if (this.shouldPlay) {
      this.animationText();
    } else {
      this.textTween && this.textTween.pause(0);
    }
  }

  intersectionObserver() {
    const isVisible = (entries) => {
      entries.forEach(entry => {
        const { isIntersecting } = entry;

        this.shouldPlay = !!isIntersecting;
        this.play();
      });
    };

    return new IntersectionObserver(isVisible, { threshold: 0.5 });
  }

  init() {
    this.observer = this.intersectionObserver();
    this.observer.observe(this.$elms.root);
  }
}