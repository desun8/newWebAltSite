import TimerSlider from '../components/timerSlider';
import TypewriteAnimation from '../components/typewriteAnimation';

export default class SliderWithTypewrite extends TimerSlider {
  constructor(...props) {
    super(...props);
    this.itemsText = Array.from(this.items).map(elm => elm.querySelector('*'));
    this.instances = this.itemsText.map(text => new TypewriteAnimation(text));
  }

  autoplay() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
    }

    const { curr } = this;
    const currTextElm = this.itemsText[curr];
    const currInstance = this.instances[curr];

    if (currInstance.isComplete) {
      currInstance.isComplete = false;
    }

    currTextElm.style.opacity = '0';

    super.next();

    // запускаем анимацию "набор текста"
    setTimeout(() => currInstance.play(), 1000);


    this.intervalId = setInterval(() => {
      if (currInstance.isComplete) {
        // console.log('is instance completed');
        clearInterval(this.intervalId);
        currInstance.isComplete = false;
        setTimeout(() => this.autoplay(), this.speed);
      }
    }, 20);
  }

  // проигрываем/останавливаем если блок видимый
  intersectionObserver() {
    const isVisible = (entries) => {
      entries.forEach(entry => {
        const { isIntersecting } = entry;

        if (isIntersecting) {
          clearInterval(this.intervalId);
          this.autoplay();
          // console.log('play slider');
        } else {
          clearInterval(this.intervalId);
          // console.log('pause slider');
        }
      });
    };

    return new IntersectionObserver(isVisible, { threshold: 0.5 });
  }

  init() {
    super.init();
    this.observer = this.intersectionObserver();
    this.observer.observe(this.root);
  }
}