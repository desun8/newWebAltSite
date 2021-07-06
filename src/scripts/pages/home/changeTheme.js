import APP from '../../app/APP';

export default class ChangeTheme {
  constructor() {
    this.body = document.body;
    this.elms = [
      {
        target: document.querySelector('.block--seo'),
        className: 'theme-dark',
      },
      {
        target: document.querySelector('.block--design'),
        className: 'theme-orange',
      }];
    this.state = {
      in: '',
      out: ''
    };

    this.observer = null;
    this.options = {
      threshold: APP.isDesktop ? 0.42 : 0.25
    };
  }

  animation(target, className, isAdd = false) {
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
    );
  }

  isVisible(entries) {
    let { state } = this;

    entries.forEach(entry => {
      const currTarget = this.elms.filter(el => el.target === entry.target)[0];
      const { target, className } = currTarget;

      if (entry.isIntersecting) {
        state.in = target;
        this.animation(target, className, true);
      } else {
        state.out = target;

        document.body.classList.remove(className);
        target.classList.remove(className);

        if (state.in === state.out) {
          this.animation(target, className);
        }
      }
    });
  }

  init() {
    this.observer = new IntersectionObserver(this.isVisible.bind(this), this.options);

    this.elms.forEach(elm =>
      this.observer.observe(elm.target)
    );
  }
}