import { gsap } from 'gsap';

class TypewriteAnimation {
  constructor(elm) {
    this.elm = elm;
    this.chars = null;
    this.className = 'js-typewrite-char';

    this.isComplete = false;

    this.tween = null;

    // this.init();
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
          if (node.classList.contains('link')) {
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

  animation(chars) {
    return gsap.from(chars, {
      alpha: 0,
      duration: 0.01,
      stagger: {
        each: 0.1,
      },
      ease: 'none',
      onStart: () => {
        this.elm.style.opacity = '1';
        this.isComplete = false;
      },
      onComplete: () => this.isComplete = true
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
    this.tween = this.animation(this.chars);
  }
}

export class TypewriteAnimationWithCursor extends TypewriteAnimation {
  constructor(...props) {
    super(...props);

    this.cursorConfig = {
      ...this.getLinesCount(),
      prevY: 0,
      styles: {
        height: 15
      }
    };

    // this.rectElm = this.elm.getBoundingClientRect();
  }

  getLinesCount() {
    const height = this.elm.offsetHeight;
    const lineHeight = Math.round(parseFloat(window.getComputedStyle(this.elm).getPropertyValue('line-height')));
    const lines = Math.round(height / lineHeight);

    return { lines, lineHeight };
  }

  createCursor() {
    const height = this.cursorConfig.styles.height;

    const elm = document.createElement('span');
    elm.style.cssText = `position: absolute; top: 0; left: 0; width: 5px; height: ${height}px; border: 1px solid #000; margin-left: 15px`;

    this.elm.style.position = 'relative';
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

    linesPos.some((val, i) => {
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
    gsap.to(this.cursor, { x, y, duration: 0.05, ease: 'none' });
  }

  animation(chars) {
    let { updateCursorPos, animationCursor } = this;

    updateCursorPos = updateCursorPos.bind(this);
    animationCursor = animationCursor.bind(this);

    return gsap.from(chars, {
      alpha: 0,
      duration: 0.01,
      ease: 'none',
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
        this.elm.style.opacity = '1';
        this.isComplete = false;
      },
      onComplete: () => {
        this.isComplete = true;
      }
    });
  }

  init() {
    this.createCursor();
    super.init();
  }
}

export class TypewriteAnimationWithBg extends TypewriteAnimation {
  constructor(...props) {
    super(...props);

    this.animationEase = 'power2.out';
    this.classNameWord = 'js-typewrite-word';
  }

  wrapChar(char) {
    const elm = document.createElement('span');
    const elmText = document.createElement('span');
    if (char) {
      elmText.innerHTML = char;
    }
    elm.classList.add(this.className);
    elm.appendChild(elmText);

    return elm;
  }

  wrapWord(word) {
    const elm = document.createElement('span');
    if (word) {
      elm.innerHTML = word;
    }
    elm.classList.add(this.classNameWord);

    return elm;
  }

  insertChars(text) {
    const words = text.split(' ');
    let wordsWithSpaces = [];

    for (let i = 0; i < words.length; i++) {
      wordsWithSpaces.push(words[i]);
      wordsWithSpaces.push(' ');
    }

    wordsWithSpaces = wordsWithSpaces.map(word => {
      const wordElm = this.wrapWord(word);
      const split = wordElm.innerText.split('');
      // split.push(' ');
      const elms = split.map(el => this.wrapChar(el));

      wordElm.innerHTML = '';
      elms.forEach(el => wordElm.appendChild(el));

      return wordElm;
    });

    return wordsWithSpaces;
  }

  animation(chars) {
    chars = Array.from(chars);
    const length = chars.length;
    const start = Math.floor((length / 2) + (length / 4));
    const formMid = chars.slice(start, length);
    return gsap.from(formMid, {
      alpha: 0,
      duration: 0.01,
      stagger: {
        each: 0.06,
      },
      ease: 'none',
      onStart: () => {
        this.elm.style.opacity = '1';
        this.isComplete = false;
      },
      onComplete: () => this.isComplete = true
    });
  }

  init() {
    super.init();
    this.elm.style.opacity = '1';
  }
}

export default TypewriteAnimation;
