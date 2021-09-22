import { gsap } from "gsap";
import Splitting from "splitting";

class TypewriteAnimation {
  constructor(elm) {
    this.elm = elm;
    this.chars = null;

    this.isComplete = false;

    this.tween = null;
  }

  splitting() {
    Splitting({
      target: this.elm,
      by: "chars",
    });

    // добавляем data-аттрибут для иконки-стрелки и пробелов
    const iconArrow = this.elm.querySelector(".link__icon");
    const whitespaces = this.elm.querySelectorAll(".whitespace");
    if (iconArrow && whitespaces) {
      iconArrow.dataset.char = "char";
      whitespaces.forEach((whitespace) => (whitespace.dataset.char = "char"));
    }
  }

  getChars() {
    this.chars = this.elm.querySelectorAll("*[data-char]");
  }

  animation(chars) {
    return gsap.from(chars, {
      alpha: 0,
      duration: 0.01,
      stagger: {
        each: 0.1,
      },
      ease: "none",
      onStart: () => {
        this.elm.style.opacity = "1";
        this.isComplete = false;
      },
      onComplete: () => (this.isComplete = true),
    });
  }

  play() {
    this.tween.restart();
  }

  pause() {
    this.tween.pause();
  }

  init() {
    this.elm.dataset.typewrite = "true";
    this.elm.style.opacity = "0";

    this.splitting(this.elm);
    this.getChars();
    this.tween = this.animation(this.chars).paused(true);
  }
}

export class TypewriteAnimationWithCursor extends TypewriteAnimation {
  constructor(...props) {
    super(...props);

    this.cursorConfig = {
      ...this.getLinesCount(),
      prevY: 0,
      styles: {
        height: 15,
      },
    };

    // this.rectElm = this.elm.getBoundingClientRect();
  }

  getLinesCount() {
    const height = this.elm.offsetHeight;
    const lineHeight = Math.round(
      parseFloat(
        window.getComputedStyle(this.elm).getPropertyValue("line-height")
      )
    );
    const lines = Math.round(height / lineHeight);

    return { lines, lineHeight };
  }

  createCursor() {
    const height = this.cursorConfig.styles.height;

    const elm = document.createElement("span");
    elm.style.cssText = `position: absolute; top: 0; left: 0; width: 5px; height: ${height}px; border: 1px solid #000; margin-left: 15px`;

    this.elm.style.position = "relative";
    this.elm.appendChild(elm);
    this.cursor = elm;
  }

  getLinesPos() {
    const { lines, lineHeight, styles } = this.cursorConfig;
    const cursorHeight = styles.height;
    const cursorMidPos = (lineHeight - cursorHeight) / 2;
    const arr = [];

    for (let i = 0; i < lines; i++) {
      arr.push(i * lineHeight + cursorMidPos);
    }

    return arr;
  }

  updateCursorPosY(y, wrapY) {
    const posY = Math.abs(y - wrapY);

    const linesPos = this.getLinesPos();
    let pos = 0;

    linesPos.some((val) => {
      if (posY <= val + 5) {
        pos = val;
        return true;
      }
    });

    return pos;
  }

  updateCursorPosX(x, wrapX) {
    return x - wrapX;
  }

  updateCursorPos(char) {
    const rectElm = this.elm.getBoundingClientRect();
    const rect = char.getBoundingClientRect();
    const x = this.updateCursorPosX(rect.x, rectElm.x);
    const y = this.updateCursorPosY(rect.y, rectElm.y);

    return { x, y };
  }

  animationCursor(pos = { x: 0, y: 0 }) {
    const { x, y } = pos;
    gsap.to(this.cursor, { x, y, duration: 0.05, ease: "none" });
  }

  animation(chars) {
    let { updateCursorPos, animationCursor } = this;

    updateCursorPos = updateCursorPos.bind(this);
    animationCursor = animationCursor.bind(this);

    return gsap.from(chars, {
      alpha: 0,
      duration: 0.01,
      ease: "none",
      stagger: {
        each: 0.1,
        onStart() {
          const char = this.targets()[0];

          const pos = updateCursorPos(char);
          animationCursor(pos);
        },
      },
      onStart: () => {
        gsap.set(this.cursor, { x: 0, y: 0 });
        this.elm.style.opacity = "1";
        this.isComplete = false;
      },
      onComplete: () => {
        this.isComplete = true;
      },
    });
  }

  init() {
    this.createCursor();
    super.init();
  }
}

export default TypewriteAnimation;
