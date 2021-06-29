import { EventEmitter } from "events";
import { lerp, getMousePos, distance } from "./utils";

type RenderedStyle = {
  previous: number,
  current: number,
  amt: number
}

// Track the mouse position
let mousePos = {x: 0, y: 0};
window.addEventListener("mousemove", ev => mousePos = getMousePos(ev));

export default class ButtonCtrl extends EventEmitter {
  private DOM: {
    el: HTMLElement,
    decoTop: HTMLElement,
    decoBottom: HTMLElement
  };

  private readonly renderedStyles: {
    [key: string]: RenderedStyle
  };
  private state: {
    hover: boolean
  };
  private rect!: DOMRect;
  private distanceToTrigger!: number;
  private onResize!: () => void;

  constructor(el: HTMLElement) {
    super();

    const decoImages = Array.from(el.querySelectorAll(".subscribe-banner-btn__img")) as HTMLElement[];
    // DOM elements
    this.DOM = {
      el,
      decoTop: decoImages[0],
      decoBottom: decoImages[1],
    };

    // amounts the button will translate/scale
    this.renderedStyles = {
      tx: {previous: 0, current: 0, amt: 0.1},
      ty: {previous: 0, current: 0, amt: 0.1},
      tx2: {previous: 0, current: 0, amt: 0.05},
      ty2: {previous: 0, current: 0, amt: 0.05},
    };

    // button state (hover)
    this.state = {
      hover: false,
    };
    // calculate size/position
    this.calculateSizePosition();
    // init events
    this.initEvents();
    // loop fn
    requestAnimationFrame(() => this.render());
  }

  calculateSizePosition() {
    // size/position
    this.rect = this.DOM.el.getBoundingClientRect();
    // the movement will take place when the distance from the mouse to the center of the button is lower than this value
    this.distanceToTrigger = this.rect.width * 8;
    // this.distanceToTrigger = window.innerWidth / 3;
  }

  initEvents() {
    this.onResize = () => this.calculateSizePosition();
    window.addEventListener("resize", this.onResize);
  }

  render() {
    // calculate the distance from the mouse to the center of the button
    const distanceMouseButton = distance(mousePos.x + window.scrollX, mousePos.y + window.scrollY, this.rect.left + this.rect.width / 2, this.rect.top + this.rect.height / 2);
    // new values for the translations and scale
    let x = 0;
    let y = 0;

    if (distanceMouseButton < this.distanceToTrigger) {
      if (!this.state.hover) {
        this.enter();
      }
      x = (mousePos.x + window.scrollX - (this.rect.left + this.rect.width / 2)) * .3;
      y = (mousePos.y + window.scrollY - (this.rect.top + this.rect.height / 2)) * .3;
    } else if (this.state.hover) {
      this.leave();
    }

    this.renderedStyles["tx"].current = this.renderedStyles["tx2"].current = x;
    this.renderedStyles["ty"].current = this.renderedStyles["ty2"].current = y;

    for (const key in this.renderedStyles) {
      this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
    }

    this.DOM.decoTop.style.transform = `translate3d(${this.renderedStyles["tx"].previous}px, ${this.renderedStyles["ty"].previous}px, 0)`;
    this.DOM.decoBottom.style.transform = `translate3d(${this.renderedStyles["tx2"].previous}px, ${this.renderedStyles["ty2"].previous}px, 0)`;

    requestAnimationFrame(() => this.render());
  }

  enter() {
    this.emit("enter");
    this.state.hover = true;
  }

  leave() {
    this.emit("leave");
    this.state.hover = false;
  }
}
