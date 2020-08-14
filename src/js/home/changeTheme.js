import { gsap } from 'gsap';

export default class ChangeTheme {
  constructor(elms, styles, classNames) {
    this.elms = elms;
    this.styles = styles;
    this.classNames = classNames;

    this.body = document.body;
    this.main = document.querySelector('.page-home');

    this.state = {
      in: '',
      out: ''
    };

    this.duration = 0.4;

    this.observer = null;
    this.options = {
      threshold: 0.4
    };
  }

  animation(target, style, className, isAdd = false) {
    const duration = 0.4;
    const ease = 'circ.out';

    const onStart = () => {
      // this.body.style.willChange = 'background-color';

      if (isAdd) {
        target.classList.add(className);
        this.body.classList.add(className);
      } else {
        target.classList.remove(className);
        this.body.classList.remove(className);
      }

      // setTimeout(() => this.body.style.willChange = null, 500);
    };

    gsap.to(this.body, {
      backgroundColor: isAdd ? style.bgColor : '#fff',
      ease,
      duration,
      onStart
    });

  }

  isVisible(entries) {
    const { state, styles, classNames } = this;

    entries.forEach(entry => {
      const { isIntersecting, target } = entry;
      const { id } = target;

      if (isIntersecting) {
        state.in = id;

        this.animation(target, styles[state.in], classNames[state.in], true);
      } else {
        state.out = id;

        document.body.classList.remove(classNames[state.out]);

        if (state.in === state.out) {
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