import { gsap } from "gsap";

const svgFire =
  '<svg viewBox="0 0 99 144" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.932 143.65c.327.228.715.351 1.115.351a1.953 1.953 0 001.734-2.8c-11.962-39.94 5.8-59.187 13.395-65.297-.64 25.782 13.236 45.119 13.91 45.968a1.964 1.964 0 002.134.714c4.016-1.212 10.178-5.208 13.974-7.807-1.061 10.338-5.408 26.516-5.457 26.695a1.956 1.956 0 001.38 2.396 1.963 1.963 0 001.685-.334c.85-.658 20.807-16.301 27.235-42.605 6.502-26.512-11.705-52.404-12.42-53.482a1.958 1.958 0 00-2.718-.473 1.967 1.967 0 00-.82 1.775 68.617 68.617 0 01-8.844 37.646c1.188-6.958 1.796-17.203.624-32.132C69.868 16.655 35.707.34 35.36.184a1.945 1.945 0 00-2.591.947c-.155.33-.213.706-.168 1.069 1.98 15.448-1.624 22.271-11.26 40.507C17.439 50.06 12.615 59.22 6.828 71.45c-20.635 43.654 18.7 71.925 19.104 72.199zM10.326 73.12C16.075 60.959 20.9 51.846 24.76 44.51 33.773 27.45 37.92 19.61 36.83 5.425c8.22 4.898 29.818 20.415 32.05 49.123 2.004 25.7-1.298 36.711-3.428 40.988a8.221 8.221 0 01-1.188 1.874 1.953 1.953 0 00.033 2.759 1.95 1.95 0 002.673.049 70.542 70.542 0 0018.01-44.483c4.874 8.971 12.506 26.77 8.22 44.356-4.228 17.305-14.929 29.994-21.145 36.189 1.73-7.167 4.24-18.692 4.24-25.345a1.954 1.954 0 00-1.946-1.955c-.42 0-.824.131-1.16.38-.105.081-9.109 6.734-14.802 9.023-3.106-4.771-14.003-23.496-12.105-46.216a1.945 1.945 0 00-1.775-2.106 1.9 1.9 0 00-1.135.249c-.29.18-31.496 18.598-19.794 66.317-9.428-8.71-28.415-31.389-13.224-63.505h-.028z" fill="#FF5000"/></svg>';

export default class RedirectFooter {
  constructor(elm, duration = 5) {
    this.$elms = {
      root: elm,
      title: elm.querySelector(".footer-redirect__title"),
      linkName: elm.querySelector(".footer-redirect__link-name"),
      linkIcon: elm.querySelector(".footer-redirect__link-name .link__arrow"),
      counter: elm.querySelector(".footer-redirect__counter-wrap"),
      svgGradientTop: elm.querySelector("svg stop#anim-grad-color-active-top"),
      svgGradientBottom: elm.querySelector(
        "svg stop#anim-grad-color-active-bottom"
      ),
    };

    this.duration = Math.floor(duration);

    this.shouldPlay = false;
    this.textTween = undefined;
    this.counterTween = undefined;

    this.isStart = false;
    this.tickingHover = false;

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  animationGradient() {
    const value = {
      init: 0,
      to: 100,
    };

    // const linkNameTween = (val) => gsap.to()

    this.textTween = gsap.to(value, {
      init: value.to,
      duration: this.duration,
      ease: "none",
      onUpdate: () => {
        requestAnimationFrame(() => {
          if (APP.isDesktop) {
            this.$elms.title.style.background = `linear-gradient(90deg, var(--c-red) ${value.init}%, var(--redirect-color) ${value.init}%)`;
            this.$elms.title.style.webkitBackgroundClip = "text";

            if (value.init >= 88) {
              const max = 12;
              const curr = max - (value.to - value.init);
              const pos = curr / (max / 100);

              this.$elms.linkName.style.background = `linear-gradient(90deg, var(--c-red) ${pos}%, var(--redirect-color) ${pos}%)`;
              this.$elms.linkName.style.webkitBackgroundClip = "text";

              if (pos > 99) {
                this.$elms.linkIcon.style.fill = "var(--c-red)";
              }
            } else {
              const pos = 0;

              this.$elms.linkName.style.background = `linear-gradient(90deg, var(--c-red) ${pos}%, var(--redirect-color) ${pos}%)`;
              this.$elms.linkName.style.webkitBackgroundClip = "text";
            }
          }
        });
      },
    });
  }

  makeCounterElms() {
    const createElm = (value) => {
      const div = document.createElement("div");
      div.innerHTML = value;

      this.$elms.counter.appendChild(div);
    };

    const arr = [];
    for (let i = this.duration; i >= 0; i--) {
      if (i === 0) {
        arr.push(svgFire);
      } else {
        arr.push(i);
      }
    }

    arr.forEach((value) => createElm(value));
  }

  animationCounter() {
    const posY = (100 - 100 / (this.duration + 1)) * -1;

    this.counterTween = gsap.to(this.$elms.counter, {
      y: `${posY}%`,
      duration: this.duration,
      ease: "none",
    });
  }

  start(isMobile = false) {
    if (this.textTween === undefined) {
      this.animationGradient();
    }

    this.textTween.duration(this.duration);
    this.textTween.play();

    if (!isMobile) {
      this.counterTween === undefined && this.animationCounter();

      this.counterTween.duration(this.duration);
      this.counterTween.play();
    }
  }

  stop() {
    if (this.textTween) {
      this.textTween.duration(1);
      this.textTween.reverse();

      this.$elms.linkIcon.style.fill = null;
    }

    if (this.counterTween) {
      this.counterTween.duration(1);
      this.counterTween.reverse();
    }
  }

  intersectionObserver() {
    const isVisible = (entries) => {
      entries.forEach((entry) => {
        const { intersectionRatio } = entry;


        let progress =
          (intersectionRatio > 0.7
            ? 1
            : intersectionRatio > 0.3
            ? intersectionRatio
            : 0) * 100;

        gsap.to(this.$elms.svgGradientTop, {
          attr: { offset: `${progress * 1.36}%` },
          duration: 0.3,
          ease: "none",
        });

        if (this.$elms.svgGradientBottom) {
          gsap.to(this.$elms.svgGradientBottom, {
            attr: { offset: `${progress}%` },
            duration: 0.3,
            ease: "none",
          });
        }
      });
    };

    const threshold = Array.from(Array(20).keys())
      .map((e) => e / 20)
      .filter((e) => e > 0.2 && e < 0.8);

    return new IntersectionObserver(isVisible, { threshold });
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
    this.$elms.root.addEventListener("mouseover", this.handleMouseOver);
    this.$elms.root.addEventListener("mouseleave", this.handleMouseLeave);
  }

  removeEvents() {
    this.$elms.root.removeEventListener("mouseover", this.handleMouseOver);
    this.$elms.root.removeEventListener("mouseleave", this.handleMouseLeave);
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
    this.makeCounterElms();
    this.addEvents();
  }
}
