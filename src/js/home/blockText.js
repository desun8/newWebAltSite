import { TypewriteAnimationWithBg } from '../components/typewriteAnimation';

class BlockText {
  constructor(block) {
    this.block = block;
    this.elm = this.block.querySelector('.block__text');

    this.isStart = false;

    this.instance = new TypewriteAnimationWithBg(this.elm);

    this.init();
  }

  intersectionObserver() {
    const isVisible = (entries) => {
      entries.forEach(entry => {
        const { isIntersecting } = entry;

        if (!this.isStart && isIntersecting) {
          this.isStart = true;
          this.instance.play();
        }
      });
    };

    return new IntersectionObserver(isVisible, { threshold: 0.5 });
  }

  init() {
    this.instance.init();
    this.observer = this.intersectionObserver();
    this.observer.observe(this.elm);
  }
}

export default BlockText;