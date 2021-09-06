import { disablePageScroll, enablePageScroll } from "scroll-lock";
import SmoothScrollbar from "smooth-scrollbar";
import {
  disableScroll as disableSmoothScroll,
  enableScroll as enableSmoothScroll,
} from "../components/smoothScroll/plugins/ModalPlugin";

export const disableScroll = (
  element: HTMLElement,
  scrollbar: SmoothScrollbar | undefined
) => {
  if (scrollbar) {
    disableSmoothScroll(scrollbar);
  } else {
    disablePageScroll(element);
  }
};
export const enableScroll = (
  element: HTMLElement,
  scrollbar: SmoothScrollbar | undefined
) => {
  if (scrollbar) {
    enableSmoothScroll(scrollbar);
  } else {
    enablePageScroll(element);
  }
};
