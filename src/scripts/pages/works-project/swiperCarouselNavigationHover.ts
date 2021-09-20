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
  const elm = document.querySelector(".carousel") as HTMLElement;
  const btnNext = elm.querySelector<HTMLElement>(
    ".carousel .swiper-button-next"
  );
  const btnPrev = elm.querySelector<HTMLElement>(
    ".carousel .swiper-button-prev"
  );

  if (btnNext && btnPrev) {
    let mousePos = { x: 0, y: 0 };
    let rect = elm.getBoundingClientRect();

    resizeObserver(elm, () => {
      rect = elm.getBoundingClientRect();
    });

    const renderedStyles: {
      [key: string]: RenderedStyle;
    } = {
      tx: { previous: 0, current: 0, amt: 0.2 },
      ty: { previous: 0, current: 0, amt: 0.2 },
    };

    const move = (prevPosX: number, x: number, y: number) => {
      let elm: HTMLElement | undefined = undefined;

      if (prevPosX > 0) {
        elm = btnNext;
      }

      if (prevPosX < 0) {
        elm = btnPrev;
      }

      if (elm) {
        const duration = 0.8;

        gsap.killTweensOf(elm);
        gsap.to(elm, {
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

        const scrollTop = APP.scrollbar!.scrollTop;

        let x = 0;
        let y = 0;

        if (mousePos.y + scrollTop >= rect.top + rect.height / 2) {
          x =
            (mousePos.x + window.scrollX - (rect.left + rect.width / 2)) * 0.3;
          y = (mousePos.y + scrollTop - (rect.top + rect.height / 2)) * 0.3;

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
      },
      { passive: true }
    );
  }
};
