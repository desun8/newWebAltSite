import TimerSlider from './timerSlider';
import TypewriteAnimation from './typewriteAnimation';

export default class SliderWithTypewrite extends TimerSlider {
  constructor(...props) {
    super(...props);
    // this.speed = 10000;
    this.itemsText = Array.from(this.items).map(elm => elm.querySelector('*'));

    this.instances = this.itemsText.map(text => new TypewriteAnimation(text));
    // console.log(this.itemsText);
  }

  autoplay() {
    // #1
    // Запускается метод родителя (стартуем проигрывание слайдера)
    // После - очищаем интервал (останавливаем проигрывание)
    //
    // Отображаем следующий слайд
    // TODO: добавить метод next() ??? 🤔
    //  Тогда не придеться очищать интервал родителя
    //  и вообще использовать там интервал
    //  ✅ DONE

    // #2
    // Таймаут. Ждем появление слайда и запускаем анимацию набора текста
    //
    // ❗️при реализации next(), скорее всего таймаут останется, но задержка будет меньше

    // #3
    // Интервал - запускаем каждые 500мс
    // Если анимация набора текста завершилась,
    // то очищаем интервал и сбрасываем isComplete.
    // И запускаем повторно метод (рекурсия, если не ошибаюсь)
    //
    // Нужно как то отслеживать завершение анимации набора текста.
    // Если вариант лучше? async/await?
    // В целом данный вариант не должен быть сильно плохим.
    // Единственное смена слайда может быть с задержкой до 500мс, но если это критично, то можно уменьшить до 200мс
    // TODO: вынести id в constructor
    //  Чтобы был доступ снаружи (например для destroy() )

    const { curr } = this;
    const currTextElm = this.itemsText[curr];
    let currInstance = this.instances[curr];

    currTextElm.style.opacity = '0';

    // #1 📌
    super.next();


    // if (currInstance === undefined) {
    //   currInstance = new TypewriteAnimation(currTextElm);
    //   this.instances.push(currInstance);
    // }

    // #2 📌
    setTimeout(() => currInstance.play(), 1000);

    // #3 📌
    this.intervalId = setInterval(() => {
      // console.log(currInstance.isComplete);
      if (currInstance.isComplete) {
        clearInterval(this.intervalId);
        currInstance.isComplete = false;
        setTimeout(() => this.autoplay(), this.speed);
      }
    }, 500);
  }
}