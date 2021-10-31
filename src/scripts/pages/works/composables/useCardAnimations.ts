import { onUnmounted } from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { throttle } from "lodash-es";

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

export default function useCardAnimations(
  scrollTriggerId: string,
  card: HTMLElement,
  bgArrowsWrapper: HTMLElement,
  bgArrows: HTMLElement,
  imageElm: HTMLElement
) {
  const hoverAnimation = () => {
    const duration = 0.5;
    let cardRect: DOMRect;
    let cardPosCenter: Pos;

    const hover = gsap
      .timeline({ paused: true })
      .to(bgArrows, { autoAlpha: 1, duration }, "same")
      .to(bgArrows, { x: 300, y: -300, duration: 100 }, "same");

    const updateArrowsPos = (pos: Pos) => {
      const x = pos.x * -0.015;
      const y = pos.y * -0.015;
      gsap.to([bgArrowsWrapper, imageElm], {
        x: (_, el) => (el === imageElm ? x * -1 : x),
        y: (_, el) => (el === imageElm ? y * -1 : y),
        duration: 0.2,
      });
    };

    const handleMouseEnter = () => {
      cardRect = card.getBoundingClientRect();
      cardPosCenter = {
        x: cardRect.width / 2,
        y: cardRect.height / 2,
      };

      hover.restart();
    };

    const handleMouseMove = (event: MouseEvent) => {
      const mousePos: Pos = getMousePos(event);
      const insidePos: Pos = getInsidePos(
        mousePos.x,
        mousePos.y,
        cardRect.x,
        cardRect.y,
        cardPosCenter
      );

      updateArrowsPos(insidePos);
    };

    const handleMouseLeave = () => {
      hover.pause();
      gsap.to(bgArrows, { autoAlpha: 0, duration });
    };

    card.addEventListener("mouseenter", handleMouseEnter, { passive: true });
    card.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    card.addEventListener("mousemove", throttle(handleMouseMove, 100), {
      passive: true,
    });
  };

  const viewportAnimation = () => {
    ScrollTrigger.create({
      id: scrollTriggerId,
      trigger: card,
      start: () => "top 40%",
      end: () => "bottom 40%",
      toggleClass: "is-active",
    });
  };

  hoverAnimation();
  viewportAnimation();

  onUnmounted(() => {
    ScrollTrigger.getById(scrollTriggerId)?.kill();
  });
}
