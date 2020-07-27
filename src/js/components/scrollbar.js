import OverlayScrollbars from 'overlayscrollbars';
import 'overlayscrollbars/css/OverlayScrollbars.min.css';
import ProgressBar from './progressBar';

export class Scrollbar {
  constructor(elm, options = {}) {
    this.elm = elm;
    this.instance = OverlayScrollbars(this.elm, options);
  }
}

export class ScrollbarPage extends Scrollbar {
  constructor(...props) {
    super(...props);

    this.instance.options({
      callbacks: {
        onScroll: this.onScroll.bind(this)
      }
    });

    this.ticking = false;
    this.scrollData = null;

    this.progressBar = new ProgressBar();
  }

  onScroll() {
    this.scrollData = this.instance.scroll();

    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.progressBar.update(this.getScrollRatioY(this.scrollData));
        this.ticking = false;
      });

      this.ticking = true;
    }
  }

  getScrollRatioY(scroll) {
    // console.log(scroll);
    return scroll.ratio.y;
  }
}