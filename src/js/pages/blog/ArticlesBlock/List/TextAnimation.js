import { mediaQueryEvent } from '../../../../utils/mediaQueryEvent';

class TextAnimation {
  constructor(el, textElm) {
    this.CHAR_SET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ1234567890+>?-$#@%&*';
    this.root = el;
    this.textElm = textElm;
    this.text = this.textElm.innerText;
    this.sib = undefined;
    this.runs = 0;

    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);

    this.init();
  }

  animation(text) {
    if (this.runs >= 3) {
      this.runs = 0;
      text.innerText = this.text;
      return;
    }

    const chars = text.innerText.split('');
    const rand = Math.floor(Math.random() * (chars.length));
    const randRep = Math.floor(Math.random() * (this.CHAR_SET.length));

    if (chars[rand] !== this.CHAR_SET[randRep] && chars[rand] !== ' ') {
      chars[rand] = this.CHAR_SET[randRep];
    } else {
      this.animation(text);
    }

    text.innerText = chars.join('');
    this.runs += 1;
  }

  handleEnter() {
    this.sib = setInterval(() => this.animation(this.textElm), 100);

    setTimeout(() => {
      clearInterval(this.sib);
      this.textElm.innerText = this.text;
    }, 1000);
  }

  handleLeave() {
    clearInterval(this.sib);
    this.textElm.innerText = this.text;
  }

  init() {
    const addEvents = () => {
      this.root.addEventListener('pointerenter', this.handleEnter);
      this.root.addEventListener('pointerleave', this.handleLeave);
    }

    const removeEvents = () => {
      this.root.removeEventListener('pointerenter', this.handleEnter);
      this.root.removeEventListener('pointerleave', this.handleLeave);
    }

    addEvents();
    mediaQueryEvent(removeEvents, addEvents);
  }
}

export default TextAnimation;