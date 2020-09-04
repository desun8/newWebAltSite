function init() {
  new SmoothScroll(document, 480, 12);
}

const menuBtn = document.querySelector('.menu-btn');

function SmoothScroll(target, speed, smooth) {
  // const requestFrame = window.requestAnimationFrame;
  let rAF = null;

  if (target === document)
    target = (document.scrollingElement
      || document.documentElement
      || document.body.parentNode
      || document.body); // cross browser support for document scrolling

  let moving = false;
  let pos = target.scrollTop;
  const frame = target === document.body
  && document.documentElement
    ? document.documentElement
    : target; // safari is the new IE



  target.addEventListener('wheel', scrolled, { passive: false });

  // target.addEventListener('DOMMouseScroll', scrolled, {passive: false})

  function scrolled(e) {
    e.preventDefault(); // disable default scrolling

    const delta = normalizeWheelDelta(e);

    pos += -delta * speed;
    pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)); // limit scrolling

    if (!moving) update();
  }


  function normalizeWheelDelta(e) {
    if (e.wheelDelta === undefined) {
      const mod = e.deltaMode ? 4 : 60;
      console.log(mod);
      return e.deltaY / mod * -1;
    }

    return e.wheelDelta * 0.002;
  }

  function update() {
    moving = true;

    const delta = Math.floor((pos - target.scrollTop) / smooth);

    target.scrollTop += delta;

    if (target.scrollTop > 10) {
      menuBtn.classList.add('menu-btn--fixed');
    } else {
      menuBtn.classList.remove('menu-btn--fixed');
    }

    if (Math.abs(delta) > 0.5) {
      // requestFrame(update);
      if (rAF !== null) {
        cancelAnimationFrame(rAF);
      }

      rAF = requestAnimationFrame(update);
    } else {
      moving = false;
    }
  }

}

export default function SmoothScrollInit()
{
  init();
};