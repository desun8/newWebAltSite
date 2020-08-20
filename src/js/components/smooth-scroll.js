function init() {
  new SmoothScroll(document, 120, 12);
}

const menuBtn = document.querySelector('.menu-btn');

// function SmoothScroll(target, speed, smooth) {
//   // const requestFrame = window.requestAnimationFrame;
//   let rAF = null;
//
//   if (target === document)
//     target = (document.scrollingElement
//       || document.documentElement
//       || document.body.parentNode
//       || document.body); // cross browser support for document scrolling
//
//   let moving = false;
//   let pos = target.scrollTop;
//   const frame = target === document.body
//   && document.documentElement
//     ? document.documentElement
//     : target; // safari is the new IE
//
//
//   target.addEventListener('wheel', scrolled, { passive: false });
//
//   // target.addEventListener('DOMMouseScroll', scrolled, {passive: false})
//
//   function scrolled(e) {
//     e.preventDefault(); // disable default scrolling
//
//     const delta = normalizeWheelDelta(e);
//
//     pos += -delta * speed;
//     pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)); // limit scrolling
//
//     if (!moving) update();
//   }
//
//
//   function normalizeWheelDelta(e) {
//     if (e.wheelDelta === undefined) {
//       const mod = e.deltaMode ? 4 : 60;
//       console.log(mod);
//       return e.deltaY / mod * -1;
//     }
//
//     return e.wheelDelta * 0.002;
//   }
//
//   function update() {
//     moving = true;
//
//     const delta = Math.floor((pos - target.scrollTop) / smooth);
//
//     target.scrollTop += delta;
//
//     if (target.scrollTop > 10) {
//       menuBtn.classList.add('menu-btn--fixed');
//     } else {
//       menuBtn.classList.remove('menu-btn--fixed');
//     }
//
//     if (Math.abs(delta) > 0.5) {
//       // requestFrame(update);
//       if (rAF !== null) {
//         cancelAnimationFrame(rAF);
//       }
//
//       rAF = requestAnimationFrame(update);
//     } else {
//       moving = false;
//     }
//   }
//
// }

class SmoothScroll {
  constructor(target, speed, smooth, scrollbarInstance) {
    if (target === document)
      this.target = (document.scrollingElement
        || document.documentElement
        || document.body.parentNode
        || document.body); // cross browser support for document scrolling

    this.speed = speed;
    this.smooth = smooth;
    this.scrollbarInstance = scrollbarInstance;
    this.scrollData = this.scrollbarInstance.scroll();

    this.moving = false;
    this.pos = this.target.scrollTop; // TODO: заменять на scrollData
    this.frame = this.target === document.body
    && document.documentElement
      ? document.documentElement
      : this.target; // safari is the new IE

    this.rAF = null;
    this.scrolled = this.scrolled.bind(this);

    this.scrollEvent = null;
    this.scrollTop = 0;

    this.addEvents();
  }

  scrolled(e) {
    e.preventDefault(); // disable default scrolling

    this.scrollEvent = e;

    const delta = this.normalizeWheelDelta(e);

    this.pos += -delta * this.speed;
    this.pos = Math.max(0, Math.min(this.pos, this.scrollData.max.y)); // limit scrolling

    // if (!this.moving) this.update();

    const { deltaY } = e;
    let pos = Math.floor((this.pos - this.scrollTop) / 2);
    if (deltaY > 0 && pos < 0) pos = Math.abs(pos);
    if (deltaY < 0 && pos > 0) pos *= -1;

    this.scrollTop += pos;
    this.scrollbarInstance.scrollStop();
    this.scrollbarInstance.scroll({y: this.scrollTop}, 1000, 'easeOutCirc')

    if (this.scrollTop > 10) {
      menuBtn.classList.add('menu-btn--fixed');
    } else {
      menuBtn.classList.remove('menu-btn--fixed');
    }
  }

  normalizeWheelDelta(e) {
    if (e.wheelDelta === undefined) {
      const mod = e.deltaMode ? 4 : 60;
      console.log(mod);
      return e.deltaY / mod * -1;
    }

    return e.wheelDelta * 0.002;
  }

  update() {
    this.moving = true;

    const delta = Math.floor((this.pos - this.scrollTop) / this.smooth);

    console.log(`delta: ${delta}, pos: ${this.pos}`);

    this.scrollTop += delta;
    this.scrollbarInstance.scroll({y: this.scrollTop})

    // this.target.scrollTop += delta;

    if (this.scrollTop > 10) {
      menuBtn.classList.add('menu-btn--fixed');
    } else {
      menuBtn.classList.remove('menu-btn--fixed');
    }

    if (Math.abs(delta) > 0.5) {
      // requestFrame(update);
      if (this.rAF !== null) {
        cancelAnimationFrame(this.rAF);
      }

      this.rAF = requestAnimationFrame(this.update.bind(this));
    } else {
      this.moving = false;
    }
  }

  addEvents() {
    this.target.addEventListener('wheel', this.scrolled, { passive: false });
    this.target.addEventListener('DOMMouseScroll', this.scrolled, { passive: false });
  }
}

// let initSmoothScroll = () => init();
export default SmoothScroll;
