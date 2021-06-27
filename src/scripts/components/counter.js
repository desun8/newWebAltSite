import { gsap } from 'gsap';

export default class Counter {
  constructor(elms) {
    this.elms = elms;

    this.observer = null;
    this.options = {
      threshold: 0.4
    };


    this.init();
  }

  animation(target, to = 0) {
    const number = { val: 0 };
    gsap.to(number, {
      val: to,
      roundProps: 'val',
      duration: 1,
      onUpdate() {
        target.innerHTML = number.val;
      },
      onComplete() {
        target.dataset.completed = 'true';
      }
    });
  }

  isVisible(entries, observer) {
    entries.forEach(entry => {
      const { isIntersecting, target } = entry;

      if (target.dataset.completed === 'true') {
        return false;
      }

      if (isIntersecting) {
        this.animation(target, target.innerHTML);
      }
    });
  }

  init() {
    this.observer = new IntersectionObserver(this.isVisible.bind(this), this.options);

    this.elms.forEach(elm =>
      this.observer.observe(elm)
    );
  }
}