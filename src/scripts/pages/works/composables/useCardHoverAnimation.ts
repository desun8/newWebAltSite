import { gsap } from "gsap";
import { throttle } from "lodash";

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

type Pos = { x: number; y: number };

export default function useCardHoverAnimation(
  card: HTMLElement,
  bgArrowsWrapper: HTMLElement,
  bgArrows: HTMLElement
) {
  let cardRect: DOMRect;
  let cardPosCenter: Pos;

  const duration = 0.5;

  const hoverAnimation = gsap
    .timeline({ paused: true })
    .to(bgArrows, { autoAlpha: 1, duration }, "same")
    .to(bgArrows, { x: 300, y: -300, duration: 100 }, "same");

  const hoverParallax = (pos: Pos) => {
    const x = pos.x * -0.015;
    const y = pos.y * -0.015;
    gsap.to(bgArrowsWrapper, { x, y, duration: 0.2 });
  };

  const handleMouseEnter = () => {
    cardRect = card.getBoundingClientRect();
    cardPosCenter = {
      x: cardRect.width / 2,
      y: cardRect.height / 2,
    };
    hoverAnimation.restart();
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

    hoverParallax(insidePos);
  };

  const handleMouseLeave = () => {
    hoverAnimation.pause();
    gsap.to(bgArrows, { autoAlpha: 0, duration });
  };

  card.addEventListener("mouseenter", handleMouseEnter, { passive: true });
  card.addEventListener("mouseleave", handleMouseLeave, { passive: true });
  card.addEventListener("mousemove", throttle(handleMouseMove, 100), {
    passive: true,
  });
}
