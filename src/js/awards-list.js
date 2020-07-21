import { gsap } from 'gsap';
import { throttle } from 'lodash';

export default class AwardsList {
  constructor() {
    this.$elms = {
      root: document.querySelector('.block--awards'),
      wrap: document.querySelector('.block--awards .block__lists'),
      lists: document.querySelectorAll('.awards-list'),
      img: document.querySelector('.awards-list-bg'),
    };

    this.root = document.querySelector('.block--awards');
    this.wrap = this.root.querySelector('.block__lists');
    this.elms = document.querySelectorAll('.awards-list');
    this.img = document.querySelector('.awards-list-bg');

    // this.height = this.wrap.offsetHeight;
    // this.imgHeight = this.img.offsetHeight;
    // this.scrollParams.pos = 0;
    // this.isMax = false;
    // this.scrollSpeed = 30;
    this.scrollParams = {
      speed: 30,
      pos: 0,
      // isMax: false,
      parentHeight: this.wrap.offsetHeight,
      height: this.img.offsetHeight,
    };

    this.init();
  }

  moveImg(deltaY = 0) {
    // const pos = Math.floor(e.deltaY / 1.5);
    const heightMod = 0.8;
    const pos = deltaY > 0 ? this.scrollParams.speed : -this.scrollParams.speed;

    // if (pos > 0 && this.scrollParams.isMax) {
    //   return null;
    // }
    // this.scrollParams.isMax = false;
    // console.log(this.scrollParams.isMax);

    const maxPos = Math.floor(this.scrollParams.parentHeight * heightMod - this.scrollParams.height);

    this.scrollParams.pos += pos;

    if (this.scrollParams.pos < 0) {
      this.scrollParams.pos = 0;
    }
    if (this.scrollParams.pos + this.scrollParams.height > this.scrollParams.parentHeight * heightMod) {
      this.scrollParams.pos = maxPos;
      // this.scrollParams.isMax = true;
    }


    gsap.to(this.img, { y: this.scrollParams.pos, duration: 1 });
  }

  handleClick(elm, list, height) {
    // list.style.willChange = 'max-height';
    let show = false;

    if (elm.dataset.hidden === 'true') {
      elm.dataset.hidden = 'false';
      show = true;
      // return;
    } else {
      elm.dataset.hidden = 'true';
    }

    gsap.to(list, {
      maxHeight: show ? height : 0,
      duration: 0.3,
      onComplete: () => {
        this.scrollParams.parentHeight = this.wrap.offsetHeight;
        !show && this.moveImg();
      }
    });
  }

  handleScroll(e) {
    this.moveImg(e.deltaY);
  }

  init() {
    this.elms.forEach(elm => {
      const btn = elm.querySelector('.awards-list__btn');
      const list = elm.querySelector('ul');
      const childCount = list.childElementCount;
      const childHeight = list.querySelector('li').offsetHeight;

      btn.addEventListener(
        'click',
        this.handleClick.bind(this, ...[elm, list, childHeight * childCount])
      );
    });

    const throttleScroll = throttle(this.handleScroll, 200);

    this.root.addEventListener(
      'wheel',
      throttleScroll.bind(this),
      { passive: true }
    );
  }
}




