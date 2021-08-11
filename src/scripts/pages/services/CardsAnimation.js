class CardsAnimation {
  constructor() {
    this.titles = document.querySelectorAll(".service-card__title svg");
    this.icons = document.querySelectorAll(".service-card__link svg");
  }

  animation(el, isForward) {
    if (isForward) {
      el.classList.add("is-animation");
    } else {
      el.classList.remove("is-animation");
    }
  }

  intersectionObserver() {
    const isVisible = (entries) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;

        this.animation(target, isIntersecting);
      });
    };

    return new IntersectionObserver(isVisible, { threshold: 0.5 });
  }

  init() {
    this.observer = this.intersectionObserver();

    this.titles.forEach((title) => {
      this.observer.observe(title);
    });

    this.icons.forEach((icon) => {
      this.observer.observe(icon);
    });
  }
}

export default CardsAnimation;
