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
      // FIREFOX
      const MAX_DELTA_Y = 7;
      let { deltaY } = e;
      const isPositive = deltaY >= 0;

      deltaY = isPositive ? Math.min(deltaY, MAX_DELTA_Y) : Math.max(deltaY, -MAX_DELTA_Y);

      console.log(e.deltaMode);
      const mod = e.deltaMode ? 1 : 25;
      console.log('firefox deltaY: ', deltaY);
      return deltaY / mod * -1;
    }

    let wheelDelta = Math.abs(e.wheelDelta);

    if (wheelDelta > 360) {
      this.reduceScrollSpeed = true;
    }

    return this.reduceScrollSpeed ? e.wheelDelta * 0.002 : e.wheelDelta * 0.008;
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
        this.scrollbarInstance.scroll({ y: this.scrollTop }, 250, 'easeOutQuad');

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
