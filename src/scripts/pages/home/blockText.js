import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import { gsap } from 'gsap';


class BlockTextNew {
  constructor(block) {
    this.block = block;
    this.elm = this.block.querySelector('.block__text');

    this.chars = undefined;

    this.init();
  }

  split() {
    Splitting({
      target: this.elm,
      by: 'chars'
    });
  }

  getChars() {
    const childNodes = Array.from(this.elm.childNodes);
    const size = Math.floor(childNodes.length * 0.3); // берем ~30% элементов (слова | пробелы)
    const elms = childNodes.slice(-size);

    const chars = [];

    elms.forEach(node => {
      if (node.className === 'whitespace') {
        node.style.opacity = '0';
        chars.push(node);
      } else {
        const childNodes = Array.from(node.childNodes);
        childNodes.forEach(char => char.style.opacity = '0');
        chars.push(...childNodes);
      }
    });

    return chars;
  }

  intersectionObserver() {
    const isVisible = (entries) => {
      entries.forEach(entry => {
        const { isIntersecting } = entry;

        if (isIntersecting) {
          this.observer.unobserve(this.elm);

          gsap.to(this.chars, {
            alpha: 1,
            duration: 0.01,
            stagger: {
              each: 0.06,
            },
            ease: 'none',
          });
        }
      });
    };

    return new IntersectionObserver(isVisible, { threshold: 0.5 });
  }

  init() {
    this.split();
    this.chars = this.getChars();

    this.observer = this.intersectionObserver();
    this.observer.observe(this.elm);
  }
}

export default BlockTextNew;