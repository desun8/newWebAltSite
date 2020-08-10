import { gsap } from 'gsap';

export default class TypewriteAnimation {
  constructor(elm) {
    this.elm = elm;
    this.chars = null;
    this.className = 'js-typewrite-char';

    this.isComplete = false;

    this.cursor = null;

    this.tween = null;

    this.init();
  }

  wrapChar(char) {
    const elm = document.createElement('span');
    if (char) {
      elm.innerHTML = char;
    }
    elm.classList.add(this.className);

    return elm;
  }

  trimText(text) {
    const regex = /\s{2,}/gi;
    return text.replace(regex, ' ');
  }

  insertChars(text) {
    const split = text.split('');

    return split.map(el => this.wrapChar(el));
  }

  replaceNode(nodes) {
    for (const node of nodes) {
      if (node.className !== this.className) {
        if (node.nodeName !== '#text') {
          // для ссылок в тексте
          if (node.className === 'link') {
            const iconWrap = node.querySelector('.link__icon');
            const icon = iconWrap.querySelector('svg');

            node?.childNodes[0]?.nodeName === '#text'
            && node.childNodes[0].replaceWith(...this.insertChars(node.innerText));

            const wrap = this.wrapChar();
            wrap.classList.add(this.className);
            wrap.appendChild(icon);
            iconWrap.appendChild(wrap);
          }
        } else {
          node.replaceWith(...this.insertChars(this.trimText(node.nodeValue)));
        }
      }
    }
  }

  getCharElms() {
    this.chars = this.elm.querySelectorAll(`.${this.className}`);
  }

  createCursor() {
    const elm = document.createElement('span');
    elm.style.cssText = 'position: absolute; top: 4px; left: 0; width: 5px; height: 15px; border: 1px solid #000; margin-left: 20px';

    this.elm.style.position = 'relative';
    this.elm.appendChild(elm);
    this.cursor = elm;
  }

  animationCursor(pos = { x: 0, y: 0 }) {
    const { x, y } = pos;
    gsap.to(this.cursor, { x, y, duration: 0.05, ease: 'none' });
  }

  animation(chars) {
    let { elm, animationCursor } = this;

    animationCursor = animationCursor.bind(this);
    const rectElm = elm.getBoundingClientRect();
    let posY = 0;

    return gsap.from(chars, {
      alpha: 0,
      duration: 0.01,
      ease: 'none',
      stagger: {
        each: 0.1,
        onStart() {
          const char = this.targets()[0];
          const rectChar = char.getBoundingClientRect();

          let y = rectChar.y - rectElm.y;

          if (y !== 0) {
            posY = y - posY > 10 ? y : posY;
            console.log(posY);
          }

          animationCursor({
            x: rectChar.x - rectElm.x,
            y: posY
          });
        },
      },
      onStart: () => {
        this.elm.style.opacity = '1';
        this.isComplete = false;
      },
      onComplete: () => {
        posY = 0;
        this.isComplete = true;
      }
    });
  }

  play() {
    this.tween.restart();
  }

  pause() {
    this.tween.pause();
  }

  init() {
    this.elm.dataset.typewrite = 'true';
    this.elm.style.opacity = '0';

    this.replaceNode(this.elm.childNodes);
    this.getCharElms();
    this.createCursor();
    this.tween = this.animation(this.chars).pause();
  }
}
