class FilterRect {
  constructor(root) {
    this.root = root;
    this.rect = this.root.getBoundingClientRect();
    this.ticking = false;

    this.addEvents();
  }

  handleResize() {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        console.log('%c blogFilterTopPos.js -> resize event -> getBoundingClientRect()', 'padding: 0.5em; color: #fff; background: red; font-weight: bold;');

        this.rect = this.root.getBoundingClientRect();
        this.ticking = false;
      });

      this.ticking = true;
    }
  }

  addEvents() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  getTop() {
    return this.rect.top;
  }
}

export default FilterRect;