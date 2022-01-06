import ChangeTheme from "../home/changeTheme";

export default class PricesChangeTheme extends ChangeTheme {
  constructor() {
    super();

    this.body = document.body;
    this.elms = [
      {
        target: document.querySelector(".js-dark-block"),
        className: "theme-dark",
      },
      {
        target: document.querySelector(".js-orange-block"),
        className: "theme-sun",
      },
      {
        target: document.querySelector(".page-footer"),
        className: "theme-sun",
      },
    ];
    this.state = {
      in: "",
      out: "",
    };

    this.observer = null;
    this.options = {
      threshold: [0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    };
  }

  isVisible(entries) {
    let { state } = this;

    entries.forEach((entry) => {
      const currTarget = this.elms.filter(
        (el) => el.target === entry.target
      )[0];
      const { target, className } = currTarget;

      if (entry.isIntersecting) {
        state.in = target;
        this.animation(target, className, true);
      } else {
        state.out = target;

        if (state.in !== this.elms[2].target) {
          document.body.classList.remove(className);
          target.classList.remove(className);
        }

        if (state.in === state.out) {
          this.animation(target, className);
        }
      }
    });
  }
}
