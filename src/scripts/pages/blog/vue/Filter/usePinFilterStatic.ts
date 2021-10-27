import { gsap } from "gsap";
import SmoothScrollbar from "smooth-scrollbar";

export default function usePinFilterStatic() {
  const scrollPinStatic = (
    simplebar: HTMLElement,
    scrollbar: SmoothScrollbar
  ) => {
    if (simplebar && scrollbar) {
      const setHeaderY = gsap.quickSetter(simplebar, "y", "px");

      scrollbar.addListener((status: { offset: { y: number } }) => {
        setHeaderY(status.offset.y);
      });
    }
  };

  return {
    scrollPinStatic,
  };
}
