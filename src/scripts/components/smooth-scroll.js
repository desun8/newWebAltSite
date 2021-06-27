import { MAC_OS } from '../utils/getOS';
import APP from '../app/APP';

class SmoothScroll {
  constructor(target, speed, smooth) {
    this.target = target;
    this.speed = speed;
    this.smooth = smooth;

    this.pos = this.target.scrollTop;
    this.moving = false;
    this.rAF = null;

    this.scrolled = this.scrolled.bind(this);
    this.update = this.update.bind(this);

    this.addEvent();
  }

  scrolled(e) {
    // если скролл происходит в меню, то скролл страницы отключается
    if (!this.target.closest('.page-menu') && e.target.closest('.page-menu')) {
      return undefined;
    }

    e.preventDefault(); // disable default scrolling

    const delta = this.normalizeWheelDelta(e);
    const MAX_POS = this.target.scrollHeight - this.target.offsetHeight;

    this.pos += -delta * this.speed;
    this.pos = Math.max(0, Math.min(this.pos, MAX_POS)); // limit scrolling

    if (!this.moving) this.update(e);
  }

  normalizeWheelDelta(e) {
    const { wheelDelta } = e;

    // FIREFOX
    if (wheelDelta === undefined) {
      let { deltaY } = e;
      let mod = 5;

      if (APP.os === MAC_OS) {
        mod = e.deltaMode ? 20 : 500; // mouseWheel | touchpad
      }

      return deltaY / mod * -1;
    }

    const mod = APP.os === MAC_OS ? 0.0006 : 0.0015;

    return wheelDelta * mod;
  }

  update() {
    this.moving = true;

    let pos = Math.floor((this.pos - this.target.scrollTop) / this.smooth);
    this.target.scrollTop += pos;

    if (Math.abs(pos) > 0.5) {
      if (this.rAF !== null) {
        cancelAnimationFrame(this.rAF);
      }

      this.rAF = requestAnimationFrame(this.update);
    } else {
      this.moving = false;
    }
  }

  addEvent() {
    this.target.addEventListener('wheel', this.scrolled, { passive: false });
  }

  removeEvent() {
    this.target.removeEventListener('wheel', this.scrolled, { passive: false });
  }
}

export default SmoothScroll;
