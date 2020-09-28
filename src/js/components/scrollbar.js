import OverlayScrollbars from 'overlayscrollbars';
import 'overlayscrollbars/css/OverlayScrollbars.min.css';
import ProgressBar from './progressBar';
import SmoothScroll from './smooth-scroll';

export class Scrollbar {
  constructor(elm, options = {}) {
    this.elm = elm;
    this.options = options;
    this.instance = null;
  }

  destroy() {
    this.instance.destroy();
  }

  init() {
    this.instance = OverlayScrollbars(this.elm, this.options);
  }
}

export class SmoothScrollbarMenu extends Scrollbar {
  destroy() {
    super.destroy();
    this.smoothScroll.removeEvent();
  }

  init() {
    super.init();
    this.scrollTarget = document.querySelector('.page-menu .os-padding > .os-viewport.os-viewport-native-scrollbars-invisible');
    if (this.scrollTarget) {
      console.log('menu smooth scroll');
      this.smoothScroll = new SmoothScroll(this.scrollTarget, 480, 10);
    }
  }
}

export class ScrollbarPage extends Scrollbar {
  constructor(...props) {
    super(...props);

    this.ticking = false;
    this.scrollData = null;

    this.menuBtn = document.querySelector('.menu-btn');
    this.btnToTop = document.querySelector('#go-to-top');
    this.progressBar = new ProgressBar();
  }

  onScroll() {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.scrollData = this.instance.scroll();
        this.progressBar.update(this.getScrollRatioY(this.scrollData));

        if (this.scrollData.position.y > 10) {
          this.menuBtn.classList.add('menu-btn--fixed');
        } else {
          this.menuBtn.classList.remove('menu-btn--fixed');
        }

        if (this.btnToTop) {
          if (this.scrollData.position.y > 200) {
            this.btnToTop.classList.add('is-show');
          } else {
            this.btnToTop.classList.remove('is-show');
          }
        }

        this.ticking = false;
      });

      this.ticking = true;
    }
  }

  getScrollRatioY(scroll) {
    return scroll.ratio.y;
  }

  destroy() {
    super.destroy();
    this.smoothScroll.removeEvent();
  }

  dragScroll() {
    // обновляем данные "плавного скролла"
    // если скролл был через перетаскивание бара
    let isHold = false;
    const bar = document.querySelector('.os-scrollbar.os-scrollbar-vertical .os-scrollbar-handle');

    bar.addEventListener('pointerdown', () => {
      isHold = true;
    });
    document.addEventListener('pointerup', () => {
      if (isHold) {
        isHold = false;


        if (this.scrollTarget) {
          this.smoothScroll.pos = this.scrollTarget.scrollTop;
        }
      }
    });
  }

  init() {
    super.init();

    this.instance.options({
      callbacks: {
        onScroll: this.onScroll.bind(this)
      }
    });

    // Инициализируем плавный скролл
    this.scrollTarget = document.querySelector('body > .os-padding > .os-viewport.os-viewport-native-scrollbars-invisible');
    if (this.scrollTarget) {
      // this.smoothScroll = new SmoothScroll(this.scrollTarget, 480, 10);
    }

    this.dragScroll();

    // фуникционал кнопки "вверх"
    // только для десктопа
    if (this.btnToTop) {
      this.btnToTop.addEventListener('pointerup', () => {
        if (this.instance) {
          this.instance.scroll({ y: 0 }, 500);
        }
      });
    }
  }
}