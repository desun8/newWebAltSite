const dragScroll = () => {
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