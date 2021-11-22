import { gsap } from "gsap";

import APP from "@/scripts/app/APP";
import { getMousePos, lerp } from "@/scripts/components/subscribe-banner/utils";
import { resizeObserver } from "@/scripts/utils/resizeObserver";

type RenderedStyle = {
  previous: number;
  current: number;
  amt: number;
};

export const swiperCarouselNavigationHover = () => {
  const elm = document.querySelector(
    ".wysiwyg-gallery-carousel"
  ) as HTMLElement;
  const btnNext = elm.querySelector<HTMLElement>(
    ".wysiwyg-gallery-carousel .swiper-button-next"
  );
  const btnPrev = elm.querySelector<HTMLElement>(
    ".wysiwyg-gallery-carousel .swiper-button-prev"
  );

  if (btnNext && btnPrev) {
    const getElmRect = (elm: HTMLElement) => {
      let rect = elm.getBoundingClientRect();

      if (APP.scrollbar) {
        rect.y += APP.scrollbar.scrollTop;
      }

      return rect;
    };

    let mousePos = { x: 0, y: 0 };
    let rect = getElmRect(elm);

    resizeObserver(document.documentElement, () => {
      rect = getElmRect(elm);
    });

    const renderedStyles: {
      [key: string]: RenderedStyle;
    } = {
      tx: { previous: 0, current: 0, amt: 0.2 },
      ty: { previous: 0, current: 0, amt: 0.2 },
    };

    const move = (prevPosX: number, x: number, y: number) => {
      let btnElm: HTMLElement | undefined = undefined;

      if (prevPosX > 0) {
        btnElm = btnNext;
      }

      if (prevPosX < 0) {
        btnElm = btnPrev;
      }

      if (btnElm) {
        const duration = 0.8;

        gsap.killTweensOf(btnElm);
        gsap.to(btnElm, {
          x,
          y,
          duration,
        });
      }
    };

    elm.addEventListener(
      "mousemove",
      (event) => {
        mousePos = getMousePos(event as MouseEvent);

        if (APP.scrollbar) {
          const scrollTop = APP.scrollbar.scrollTop;

          let x = 0;
          let y = 0;

          const mousePosY = mousePos.y + scrollTop;
          const elmPosMiddle = rect.y + rect.height / 2;
          const isAllowMousePos = mousePosY >= elmPosMiddle;

          if (isAllowMousePos) {
            x =
              (mousePos.x + window.scrollX - (rect.left + rect.width / 2)) *
              0.3;
            y = (mousePos.y + scrollTop - (rect.y + rect.height / 2)) * 0.3;

            const rectLeft = rect.left * 1.5;

            renderedStyles["tx"].current =
              Math.abs(x) > rectLeft ? rectLeft * (x / Math.abs(x)) : x;
            renderedStyles["ty"].current = y;

            for (const key in renderedStyles) {
              renderedStyles[key].previous = lerp(
                renderedStyles[key].previous,
                renderedStyles[key].current,
                renderedStyles[key].amt
              );
            }

            move(
              renderedStyles["tx"].previous,
              renderedStyles["tx"].previous * -1,
              renderedStyles["ty"].previous * -1
            );
          }
        }
      },
      { passive: true }
    );
  }
};
