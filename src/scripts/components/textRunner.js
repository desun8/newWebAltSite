import { gsap } from "gsap";
import { throttle } from "lodash-es";

export default class TextRunner {
  constructor(elm, duration = 2) {
    this.elm = elm;
    this.wrap = this.elm.querySelector(".ticker__wrap");
    this.items = this.wrap.querySelectorAll(".ticker__item");

    this.duration = duration;
    this.movePos = this.getTextSize();
    this.tween = this.ticker().pause();

    this.observer = null;

    this.init();
  }

  getTextSize() {
    if (this.items.length === 0) {
      return 0;
    }

    const item = this.items[0];
    const marginRight = parseInt(
      window.getComputedStyle(item).getPropertyValue("margin-right")
    );
    return item.offsetWidth + marginRight;
  }

  ticker() {
    gsap.set(this.items, {
      left: (index) => index * this.movePos,
    });

    return gsap.fromTo(
      this.items,
      { x: 0 },
      {
        x: -this.movePos,
        duration: this.duration,
        ease: "none",
        repeat: -1,
      }
    );
  }

  update() {
    this.movePos = this.getTextSize();

    if (this.tween !== null) {
      this.tween.kill();
    }
    this.tween = this.ticker();
  }

  intersectionObserver() {
    const isVisible = (entries, observer) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;

        if (isIntersecting) {
          this.tween.play();
        } else {
          this.tween.pause();
        }
      });
    };

    return new IntersectionObserver(isVisible, { threshold: 0.5 });
  }

  init() {
    this.observer = this.intersectionObserver();
    this.observer.observe(this.elm);

    const throttleOnResize = throttle(this.update, 200);
    window.addEventListener("resize", throttleOnResize.bind(this));
  }
}
