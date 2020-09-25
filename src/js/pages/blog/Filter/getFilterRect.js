import APP from '../../../app/APP';

const getFilterRect = (elm) => {
  if (!elm) return undefined;

  return elm.getBoundingClientRect();
};

let ticking = false;

const handleResize = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      console.log('%c blogFilterTopPos.js -> window.resize -> getBoundingClientRect()', 'padding: 0.5em; color: #fff; background: red; font-weight: bold;');
      APP.blogFilter.top = getFilterRect().top
      ticking = false;
    });

    ticking = true;
  }
}

if (APP.isDesktop) {
  window.addEventListener('resize', handleResize);
}

export default getFilterRect;