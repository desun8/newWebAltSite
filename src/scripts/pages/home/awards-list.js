import { gsap } from "gsap";
import { throttle } from "lodash";

export default class AwardsList {
  constructor() {
    this.root = document.querySelector(".block--awards");
    this.wrap = this.root.querySelector(".block__lists");
    this.elms = document.querySelectorAll(".awards-list");
    this.img = document.querySelector(".awards-list-bg");
    this.imgBg = this.img.querySelector(".awards-list-bg__image");

    this.scrollParams = {
      speed: 30,
      pos: 0,
      parentHeight: this.wrap.offsetHeight,
      height: this.img.offsetHeight,
    };

    this.throttleScroll = throttle(this.handleScroll, 200);
    this.throttleScroll = this.throttleScroll.bind(this);
  }

  moveImg(deltaY = 0) {
    const heightMod = 0.8;
    const pos = deltaY > 0 ? this.scrollParams.speed : -this.scrollParams.speed;

    const maxPos = Math.floor(
      this.scrollParams.parentHeight * heightMod - this.scrollParams.height
    );

    this.scrollParams.pos += pos;

    if (this.scrollParams.pos < 0) {
      this.scrollParams.pos = 0;
    }
    if (
      this.scrollParams.pos + this.scrollParams.height >
      this.scrollParams.parentHeight * heightMod
    ) {
      this.scrollParams.pos = maxPos;
    }

    gsap.to(this.img, { y: this.scrollParams.pos, duration: 1 });
  }

  changeImage(elm) {
    const imgPath = elm.dataset.img;
    if (imgPath) {
      this.imgBg.style.backgroundImage = `url(${imgPath})`;
    }
  }

  handleClick(elm, list, height) {
    let show = false;

    if (elm.dataset.hidden === "true") {
      elm.dataset.hidden = "false";
      show = true;
      this.changeImage(elm);
    } else {
      elm.dataset.hidden = "true";
    }

    gsap.to(list, {
      maxHeight: show ? height : 0,
      duration: 0.3,
      onComplete: () => {
        this.scrollParams.parentHeight = this.wrap.offsetHeight;
        !show && this.moveImg();
      },
    });
  }

  handleScroll(e) {
    this.moveImg(e.deltaY);
  }

  addEvent() {
    this.root.addEventListener("wheel", this.throttleScroll, { passive: true });
  }

  removeEvent() {
    this.root.removeEventListener("wheel", this.throttleScroll, {
      passive: true,
    });
  }

  desktop() {
    this.addEvent();
  }

  mobile() {
    this.removeEvent();
  }

  init() {
    this.elms.forEach((elm) => {
      const btn = elm.querySelector(".awards-list__btn");
      const list = elm.querySelector("ul");
      const childCount = list.childElementCount;
      const child = list.querySelector("li");
      const childHeight =
        child.offsetHeight +
        parseInt(
          window.getComputedStyle(child).getPropertyValue("margin-bottom")
        );

      btn.addEventListener(
        "click",
        this.handleClick.bind(this, ...[elm, list, childHeight * childCount])
      );
    });
  }
}
