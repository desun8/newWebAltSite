import { shuffle } from 'lodash';

import { gsap } from 'gsap';

const DURATION = 0.4;

const topElms = shuffle(Array.from(document.querySelectorAll('.blog-deco-top__item')));
const sideElm = document.querySelector('.blog-deco-side');

const topAnimation = (pos) => {
  gsap.to(topElms, {
    y: pos * -1,
    duration: 0.2,
    delay: (i) => (i + 1) / 50,
    ease: 'none'
  })
}

const sideAnimation = (pos) => {
  gsap.killTweensOf(sideElm);
  gsap.to(sideElm, { y: `${pos * -0.1}vh`, duration: DURATION, ease: 'none' });
};

const blogOnScrollAnimation = (pos) => {
  topElms && topElms.length > 0 && topAnimation(pos);
  sideElm && pos < 450 && sideAnimation(pos);
};

export default blogOnScrollAnimation;