import OverlayScrollbars from 'overlayscrollbars';
import 'overlayscrollbars/css/OverlayScrollbars.min.css';

export default class Scrollbar {
  constructor(elm, options = {}) {
    this.elm = elm;
    this.instance = OverlayScrollbars(this.elm, options);
  }
}