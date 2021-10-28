import { gsap } from "gsap";

const getMousePos = (e) => {
  let posX = 0;
  let posY = 0;
  if (!e) e = window.event;
  if (e.pageX || e.pageY) {
    posX = e.pageX;
    posY = e.pageY;
  } else if (e.clientX || e.clientY) {
    posX =
      e.clientX +
      document.body.scrollLeft +
      document.documentElement.scrollLeft;
    posY =
      e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  return { x: posX, y: posY };
};

class ImgHover {
  constructor(el) {
    this.DOM = { el: el, parentLi: el.parentElement?.parentElement };
    this.DOM.reveal = document.createElement("div");
    this.DOM.reveal.className = "hover-reveal";
    this.DOM.reveal.innerHTML = `<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div></div>`;
    this.DOM.el.appendChild(this.DOM.reveal);
    this.DOM.revealInner = this.DOM.reveal.querySelector(
      ".hover-reveal__inner"
    );
    this.DOM.revealInner.style.overflow = "hidden";
    this.DOM.revealImg =
      this.DOM.revealInner.querySelector(".hover-reveal__img");

    this.initEvents();
  }

  initEvents() {
    this.positionElement = (ev) => {
      const mousePos = getMousePos(ev);
      const docScrolls = {
        left: document.body.scrollLeft + document.documentElement.scrollLeft,
        top: document.body.scrollTop + document.documentElement.scrollTop,
      };

      const { top, left } = this.DOM.el.getBoundingClientRect();
      const posX = mousePos.x + 20 - docScrolls.left - left;
      const posY = mousePos.y + 20 - docScrolls.top - top;

      this.DOM.reveal.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
    };
    this.mouseenterFn = (ev) => {
      this.positionElement(ev);
      this.showImage();
    };
    this.mousemoveFn = (ev) =>
      requestAnimationFrame(() => {
        this.positionElement(ev);
      });
    this.mouseleaveFn = () => {
      this.hideImage();
    };

    this.DOM.el.addEventListener("mouseenter", this.mouseenterFn);
    this.DOM.el.addEventListener("mousemove", this.mousemoveFn);
    this.DOM.el.addEventListener("mouseleave", this.mouseleaveFn);
  }

  showImage() {
    gsap.killTweensOf(this.DOM.revealInner);
    gsap.killTweensOf(this.DOM.revealImg);

    this.tl = gsap
      .timeline({
        onStart: () => {
          this.DOM.reveal.style.opacity = 1;
          gsap.set(this.DOM.el, { zIndex: 100 });

          if (this.DOM.parentLi) {
            gsap.set(this.DOM.parentLi, { position: "relative", zIndex: 10 });
          }
        },
      })
      .add("begin")
      .add(
        gsap.to(this.DOM.revealInner, {
          ease: "sine.easeOut",
          startAt: { x: "-100%" },
          x: "0%",
          duration: 0.2,
        }),
        "begin"
      )
      .add(
        gsap.to(this.DOM.revealImg, {
          ease: "sine.easeOut",
          startAt: { x: "100%" },
          x: "0%",
          duration: 0.2,
        }),
        "begin"
      );
  }

  hideImage() {
    gsap.killTweensOf(this.DOM.revealInner);
    gsap.killTweensOf(this.DOM.revealImg);

    this.tl = gsap
      .timeline({
        onComplete: () => {
          gsap.set(this.DOM.el, { zIndex: "" });
          gsap.set(this.DOM.reveal, { opacity: 0 });

          if (this.DOM.parentLi) {
            gsap.set(this.DOM.parentLi, { position: "", zIndex: "" });
          }
        },
      })
      .add("begin")
      .add(
        gsap.to(this.DOM.revealInner, {
          ease: "sine.easeOut",
          x: "100%",
          duration: 0.2,
        }),
        "begin"
      )

      .add(
        gsap.to(this.DOM.revealImg, {
          ease: "sine.easeOut",
          x: "-100%",
          duration: 0.2,
        }),
        "begin"
      );
  }
}

export default ImgHover;
