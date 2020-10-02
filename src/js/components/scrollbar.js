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

    this.progressBar = new ProgressBar();
    this.pageHeader = document.querySelector('.page-header');
    this.btnToTop = document.querySelector('#go-to-top');

    this.isBlogPage = document.querySelector('.page-blog');
  }

  onScroll() {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.scrollData = this.instance.scroll();
        this.progressBar.update(this.getScrollRatioY(this.scrollData));

        // позиционирование кнопки "меню"
        if (this.scrollData.position.y > 10) {
          this.pageHeader.classList.add('is-fixed');
        } else {
          this.pageHeader.classList.remove('is-fixed');
        }

        // появление/скрытие кнопки "вверх"
        if (this.btnToTop) {
          if (this.scrollData.position.y > 200) {
            this.btnToTop.classList.add('is-show');
          } else {
            this.btnToTop.classList.remove('is-show');
          }
        }

        // анимация на странице "БЛОГ"
        if (this.blogAnimation) {
          this.blogAnimation(this.scrollData.position.y);
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
      this.smoothScroll = new SmoothScroll(this.scrollTarget, 480, 10);
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

    // "БЛОГ" импорт и присвоение анимации
    if (this.isBlogPage) {
      (async () => {
        const module = await import('../pages/blog/blogOnScrollAnimation');
        this.blogAnimation = module.default;
      })();
    }
  }
}