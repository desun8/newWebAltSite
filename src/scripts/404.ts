import { throttle } from "lodash-es";
import { gsap } from "gsap";
import APP from "./app/APP";
import initRoot from "./root";
import "@/styles/404.scss";

initRoot();

// Анимация изображения 404 при движении курсора
(() => {
  type Pos = { x: number; y: number };

  const getMousePos = (event: MouseEvent) => ({
    x: event.clientX,
    y: event.clientY,
  });

  const getInsidePos = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    center: { x: number; y: number }
  ) => {
    const x = x1 - x2 - center.x;
    const y = y1 - y2 - center.y;

    return { x, y };
  };

  if (APP.isDesktop && !APP.isTouchScreen) {
    const imageElm = document.querySelector(".image-404");

    if (imageElm) {
      let wrapperRect = imageElm.getBoundingClientRect();
      let wrapperCenter = {
        x: wrapperRect.width / 2,
        y: wrapperRect.height / 2,
      };

      const updateArrowsPos = (pos: Pos) => {
        const x = pos.x * -0.015;
        const y = pos.y * -0.015;
        gsap.to(imageElm, {
          x: () => x * -1,
          y: () => y * -1,
          duration: 0.2,
        });
      };

      const handleMouseMove = (event: MouseEvent) => {
        const mousePos: Pos = getMousePos(event);
        const insidePos: Pos = getInsidePos(
          mousePos.x,
          mousePos.y,
          wrapperRect.x,
          wrapperRect.y,
          wrapperCenter
        );

        updateArrowsPos(insidePos);
      };

      document.addEventListener("mousemove", throttle(handleMouseMove, 100), {
        passive: true,
      });
    }
  }
})();
