import { TypewriteAnimationWithBg } from '../components/typewriteAnimation';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import { gsap } from "gsap";


// class BlockText {
//   constructor(block) {
//     this.block = block;
//     this.elm = this.block.querySelector('.block__text');
//
//     this.isStart = false;
//
//     this.instance = new TypewriteAnimationWithBg(this.elm);
//
//     this.init();
//   }
//
//   intersectionObserver() {
//     const isVisible = (entries) => {
//       entries.forEach(entry => {
//         const { isIntersecting } = entry;
//
//         if (!this.isStart && isIntersecting) {
//           this.isStart = true;
//           this.instance.play();
//         }
//       });
//     };
//
//     return new IntersectionObserver(isVisible, { threshold: 0.5 });
//   }
//
//   init() {
//     this.instance.init();
//     this.observer = this.intersectionObserver();
//     this.observer.observe(this.elm);
//   }
// }
class BlockTextNew {
  constructor(block) {
    this.block = block;
    this.elm = this.block.querySelector('.block__text');

    this.isStart = false;

    this.init();
  }

  createElm(text, isSplitting) {
    const elm = document.createElement('span');
    elm.innerText = text;
    elm.classList.add(isSplitting ? 'js-splitting' : 'js-static');

    this.splittingElm = elm;

    return elm;
  }

  split() {
    const { elm } = this;
    const text = elm.innerText;
    const { length } = text;
    const startPos = Math.floor((length / 2) + (length / 4));

    const newText = text.slice(0, startPos);
    const splittingText = text.slice(startPos, length);

    console.log(newText);
    console.log(splittingText);

    elm.innerHTML = '';
    elm.appendChild(this.createElm(newText));

    Splitting({
      target: this.elm,
      by: 'words'
    })

    elm.appendChild(this.createElm(splittingText, true));

    Splitting({
      target: this.splittingElm,
      by: 'chars'
    });

    this.chars = this.elm.querySelectorAll('.js-splitting .char')
    console.log(this.chars);
  }

  intersectionObserver() {
    const isVisible = (entries) => {
      entries.forEach(entry => {
        const { isIntersecting } = entry;

        if (!this.isStart && isIntersecting) {
          this.isStart = true;
          gsap.to(this.chars, {
            alpha: 1,
            duration: 0.01,
            stagger: {
              each: 0.06,
            },
            ease: 'none',
            // onStart: () => {
            //   this.elm.style.opacity = '1';
            //   this.isComplete = false;
            // },
            // onComplete: () => this.isComplete = true
          });
        }
      });
    };

    return new IntersectionObserver(isVisible, { threshold: 0.5 });
  }

  init() {
    this.split();

    this.observer = this.intersectionObserver();
    this.observer.observe(this.elm);
  }
}

export default BlockTextNew;