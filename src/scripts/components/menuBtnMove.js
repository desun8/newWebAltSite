import {gsap} from 'gsap'

export default class MenuBtnMove {
  constructor(btn, scrollTop) {
    this.btn = btn;
    this.scrollTop = scrollTop;
    this.isFixed = true;
  }

  update() {
    if (this.scrollTop !== 0) {
      gsap.to(this.btn, {position: 'fixed', x: 20})
    }
  }

  init() {

  }
}