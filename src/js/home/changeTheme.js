import { gsap } from 'gsap';
import APP from '../app/APP';
// gsap.ticker.fps(60);
// gsap.ticker.lagSmoothing(500, 64);
// gsap.ticker.lagSmoothing(0);


export default class ChangeTheme {
  constructor(elms, styles, classNames) {
    this.elms = elms;
    this.styles = styles;
    this.classNames = classNames;

    this.body = document.body;
    // this.main = document.querySelector('.page-home');

    this.state = {
      in: '',
      out: ''
    };

    this.duration = 0.4;

    this.observer = null;
    this.options = {
      threshold: APP.isDesktop ? 0.4 : 0.25
    };

    this.prevTop = 0;
  }

  animation(target, style, className, isAdd = false) {
    const duration = this.duration;
    const ease = 'circ.out';
    // const ease = 'power4.out';

    const onStart = () => {
      // this.body.style.willChange = 'background-color';

      requestAnimationFrame(
        () => {
          if (isAdd) {
            target.classList.add(className);
            this.body.classList.add(className);
          } else {
            target.classList.remove(className);
            this.body.classList.remove(className);
          }
        }
      )

      // setTimeout(() => this.body.style.willChange = null, 500);
    };

    gsap.to(this.body, {
      background: isAdd ? style.bgColor : '#fff',
      lazy: true,
      // delay: 0.1,
      ease,
      duration,
      onStart
    });
  }

  isVisible(entries) {
    const { state, styles, classNames } = this;

    entries.forEach(entry => {
      // const { isIntersecting, target, boundingClientRect } = entry;
      const { isIntersecting, target } = entry;
      // const currTop = Math.abs(boundingClientRect.y);
      const { id } = target;

      // console.log(`currTop: ${currTop}, prevTop: ${this.prevTop}`);

      if (isIntersecting) {
        state.in = id;
        // this.prevTop = currTop;

        this.animation(target, styles[state.in], classNames[state.in], true);
      } else {
        state.out = id;

        document.body.classList.remove(classNames[state.out]);
        target.classList.remove(classNames[state.out]);

        if (state.in === state.out) {
          // if (id === 'seo' && currTop > this.prevTop) return;
          // if (id === 'design' && currTop < this.prevTop) return;

          this.animation(target, styles[state.out], classNames[state.out]);
        }
      }
    });
  }

  init() {
    this.observer = new IntersectionObserver(this.isVisible.bind(this), this.options);

    this.elms.forEach(elm =>
      this.observer.observe(elm)
    );
    // document.body.style.transition = 'background-color 0.5s ease';
    // console.log('init', this.observer);
  }
}