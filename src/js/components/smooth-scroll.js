class SmoothScroll {
  constructor(target, speed, scrollbarInstance) {
    if (target === document)
      this.target = (document.scrollingElement
        || document.documentElement
        || document.body.parentNode
        || document.body); // cross browser support for document scrolling

    this.speed = speed;
    this.scrollbarInstance = scrollbarInstance;
    this.scrollData = this.scrollbarInstance.scroll();

    this.moving = false;
    this.pos = this.scrollData.position.y;
    this.scrollTop = 0;


    this.scrolled = this.scrolled.bind(this);


    this.addEvent();
  }

  scrolled(e) {
    e.preventDefault(); // disable default scrolling

    const delta = this.normalizeWheelDelta(e);

    this.pos += -delta * this.speed;
    this.pos = Math.max(0, Math.min(this.pos, this.scrollData.max.y)); // limit scrolling


    if (!this.moving) this.update(e);
  }

  normalizeWheelDelta(e) {
    if (e.wheelDelta === undefined) {
      const mod = e.deltaMode ? 4 : 60;
      console.log(mod);
      return e.deltaY / mod * -1;
    }

    return e.wheelDelta * 0.002;
  }

  update(e) {
    if (!this.moving) {
      requestAnimationFrame(() => {
        const { deltaY } = e;
        let pos = Math.floor((this.pos - this.scrollTop) / 2);
        if (deltaY > 0 && pos < 0) pos = Math.abs(pos);
        if (deltaY < 0 && pos > 0) pos *= -1;


        this.scrollTop += pos;


        this.scrollbarInstance.scrollStop();
        this.scrollbarInstance.scroll({ y: this.scrollTop }, 500, 'easeOutSine');

        this.moving = false;
      });

      this.moving = true;
    }
  }

  addEvent() {
    this.target.addEventListener('wheel', this.scrolled, { passive: false });
  }

  removeEvent() {
    this.target.removeEventListener('wheel', this.scrolled, { passive: false });
  }

  resize() {
    this.scrollData = this.scrollbarInstance.scroll();
  }
}

export default SmoothScroll;
