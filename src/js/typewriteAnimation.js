import { gsap } from 'gsap';

export default class TypewriteAnimation {
  constructor(elm) {
    this.elm = elm;
    this.chars = null;
    this.className = 'js-typewrite-char';

    this.isComplete = false;

    this.init();
  }

  wrapChar(char) {
    const elm = document.createElement('span');
    elm.innerHTML = char;
    elm.classList.add(this.className);

    return elm;
  }

  insertChars(text) {
    const split = text.split('');

    return split.map(el => this.wrapChar(el));
  }

  replaceNode(nodes) {
    // nodes.forEach(node => {
    //   if (node.nodeName !== '#text') {
    //     // для ссылок в тексте
    //     node?.childNodes[0].nodeName === '#text'
    //     &&
    //     node.childNodes[0].replaceWith(...this.insertChars(node.innerText));
    //   } else {
    //     node.replaceWith(...this.insertChars(node.nodeValue));
    //   }
    // });

    for (const node of nodes) {
      if (node.nodeName !== '#text') {
        // для ссылок в тексте
        node?.childNodes[0]?.nodeName === '#text'
        && node.childNodes[0].replaceWith(...this.insertChars(node.innerText));
      } else {
        node.replaceWith(...this.insertChars(node.nodeValue));
      }
    }
  }

  getCharElms() {
    this.chars = this.elm.querySelectorAll(`.${this.className}`);
  }

  animation(chars) {
    gsap.from(chars, {
      alpha: 0,
      duration: 0.01,
      delay: (i) => i * 0.05,
      ease: 'none',
      onStart: () => {
        this.elm.style.opacity = '1';
        this.isComplete = false;
      },
      onComplete: () => this.isComplete = true
    });
  }

  play() {
    this.animation(this.chars);
  }

  init() {
    this.elm.dataset.typewrite = true;
    this.elm.style.opacity = '0';

    this.replaceNode(this.elm.childNodes);
    this.getCharElms();
    // this.animation(this.chars);
  }
}
