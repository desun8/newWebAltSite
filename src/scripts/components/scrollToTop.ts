import { throttle } from "lodash-es";
import { resizeObserver } from "../utils/resizeObserver";

export const scrollToTop = () => {
  const btn = document.querySelector(".scroll-to-top");

  if (btn === null) return;

  let clientHeight = document.documentElement.clientHeight + 200;

  resizeObserver(
    document.documentElement,
    () => (clientHeight = document.documentElement.clientHeight + 200)
  );

  const toggleBtnVisibility = (shouldShow: boolean) => {
    if (shouldShow) {
      btn.classList.add("is-show");
    } else {
      btn.classList.remove("is-show");
    }
  };

  const handleScroll = (scrollTop: number) => {
    if (scrollTop > clientHeight) {
      toggleBtnVisibility(true);
    } else {
      toggleBtnVisibility(false);
    }
  };

  const onScroll = throttle(
    () => handleScroll(document.documentElement.scrollTop),
    200
  );

  document.addEventListener("scroll", onScroll, { passive: true });
};
