import { shuffle } from 'lodash';
import { gsap } from 'gsap';

const DURATION = 0.2;

const topTextElms = shuffle(Array.from(document.querySelectorAll('.blog-deco-top__item')));
const topCrossElm = document.querySelector('.blog-deco-top__cross');

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

const blogOnScrollAnimation = (pos) => {
  topTextElms && topTextElms.length > 0 && topCrossElm && topAnimation(pos);
};

export default blogOnScrollAnimation;
