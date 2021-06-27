import { shuffle } from 'lodash';

import { gsap } from 'gsap';

const DURATION = 0.2;

const topTextElms = shuffle(Array.from(document.querySelectorAll('.blog-deco-top__item')));
const topCrossElm = document.querySelector('.blog-deco-top__cross');
const sideElm = document.querySelector('.blog-deco-side');

const topAnimation = (pos) => {
  gsap.to([topTextElms, topCrossElm], {
    y: (i, elm) => {
      if (elm === topCrossElm) return pos * -1;
      return (pos / ((i + 1) * 0.55)  ) * -1;
    },
    duration: DURATION,
    ease: 'none'
  });
};

const sideAnimation = (pos) => {
  gsap.killTweensOf(sideElm);
  gsap.to(sideElm, { y: `${pos * -0.1}vh`, duration: DURATION, ease: 'none' });
};

const blogOnScrollAnimation = (pos) => {
  topTextElms && topTextElms.length > 0 && topCrossElm && topAnimation(pos);
  sideElm && pos < 1000 && sideAnimation(pos);
};

export default blogOnScrollAnimation;