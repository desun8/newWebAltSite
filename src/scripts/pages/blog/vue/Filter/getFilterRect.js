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