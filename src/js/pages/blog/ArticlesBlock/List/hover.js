import { gsap } from 'gsap';

const mapNumber = (X, A, B, C, D) => (X - A) * (D - C) / (B - A) + C;

const getMousePos = (e) => {
  let posX = 0;
  let posY = 0;
  if (!e) e = window.event;
  if (e.pageX || e.pageY) {
    posX = e.pageX;
    posY = e.pageY;
  } else if (e.clientX || e.clientY) {
    posX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    posY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  return { x: posX, y: posY };
};

const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

class Hover {
  constructor(el) {
    this.DOM = { el: el };

    this.DOM.reveal = document.createElement('div');
    this.DOM.reveal.className = 'hover-reveal';
    this.totalImages = 5;
    let inner = '';
    for (let i = 0; i <= this.totalImages - 1; ++i) {
      inner += `<div class="hover-reveal__img" style="position: absolute; background-image:url(${this.DOM.el.dataset.img})"></div>`;
    }
    this.DOM.reveal.innerHTML = inner;
    this.DOM.el.appendChild(this.DOM.reveal);
    this.DOM.revealImgs = [...this.DOM.reveal.querySelectorAll('.hover-reveal__img')];
    // charming(this.DOM.el);
    // this.DOM.letters = [...this.DOM.el.querySelectorAll('span')];
    this.initEvents();
  }

  initEvents() {
    this.positionElement = (ev) => {
      const mousePos = getMousePos(ev);
      const docScrolls = {
        left: document.body.scrollLeft + document.documentElement.scrollLeft,
        top: document.body.scrollTop + document.documentElement.scrollTop
      };
      this.DOM.reveal.style.top = `${mousePos.y + 20 - docScrolls.top}px`;
      this.DOM.reveal.style.left = `${mousePos.x + 20 - docScrolls.left}px`;
    };
    this.mouseenterFn = (ev) => {
      this.positionElement(ev);
      // this.animateLetters();
      this.showImage();
    };
    this.mousemoveFn = ev => requestAnimationFrame(() => {
      this.positionElement(ev);
    });
    this.mouseleaveFn = () => {
      this.hideImage();
    };

    this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
    this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
    this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
  }

  showImage() {
    gsap.killTweensOf(this.DOM.revealImgs);
    this.tl = gsap.timeline({
      onStart: () => {
        this.DOM.reveal.style.opacity = '1';
        gsap.set(this.DOM.el, { zIndex: 1000 });
      }
    })
      .set(this.DOM.revealImgs, { opacity: 0 });

    for (let i = 0; i <= this.totalImages - 1; ++i) {
      gsap.set(this.DOM.revealImgs[i], {
        x: `${(this.totalImages - 1 - i) * 5}%`,
        y: `${(this.totalImages - 1 - i) * 10}%`
      });

      this.tl.add(gsap.to(this.DOM.revealImgs[i], {
        x: i === this.totalImages - 1 ? '0%' : null,
        y: i === this.totalImages - 1 ? '0%' : null,
        opacity: i === this.totalImages - 1 ? 1 : 0,
        ease: i === this.totalImages - 1 ? 'power4.easeOut' : 'power1.easeOut',
        duration: i === this.totalImages - 1 ? 1.2 : 0.55,
        startAt: i === this.totalImages - 1 ? { opacity: 1, x: '5%', y: '10%' } : { opacity: 1 },
      }), i * 0.04);
    }
  }

  hideImage() {
    gsap.killTweensOf(this.DOM.revealImgs);
    this.tl = gsap.timeline({
      onStart: () => {
        gsap.set(this.DOM.el, { zIndex: 999 });
      },
      onComplete: () => {
        gsap.set(this.DOM.el, { zIndex: '' });
        gsap.set(this.DOM.reveal, { opacity: 0 });
      }
    })
      .add(gsap.to(this.DOM.revealImgs[this.totalImages - 1], {
        opacity: 0,
        ease: 'sine.easeOut',
        duration: 0.15
      }));
  }

  // animateLetters() {
  //   TweenMax.killTweensOf(this.DOM.letters);
  //   this.DOM.letters.forEach((letter) => {
  //     const opts = Math.round(Math.random()) === 0 ? {x: '100%', y: '100%', opacity: 0} : {opacity: 0};
  //     TweenMax.set(letter, opts);
  //   });
  //   TweenMax.to(this.DOM.letters, 1, {
  //     ease: Expo.easeOut,
  //     x: '0%',
  //     y: '0%',
  //     opacity: 1
  //   });
  // }
}

export default Hover;