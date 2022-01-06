export const resizeObserver = (elm: Element, cb: () => void) => {
  const ro = new ResizeObserver((entries) => {
    for (let _entry of entries) {
      cb();
    }
  });

  // Observe one or multiple elements
  ro.observe(elm);
};
