import { gsap } from 'gsap';

export default class ProgressBar {
  constructor() {
    this.elm = document.querySelector('.progress-bar');
  }

  update(size) {
    gsap.to(this.elm, { scaleY: size, ease: 'circ.out' });
  }
}