import { throttle } from "lodash";
import gsap from "gsap";
import APP from "../app/APP";

enum ScrollDirection {
  Up,
  Down,
}

export const fixedHeader = () => {
  const isSmallScreen = !(APP.isDesktop && APP.scrollbar);

  if (isSmallScreen) {
    const fixedHeaderElm = document.querySelector(".page-header-fixed");
    let clientHeight = document.documentElement.clientHeight + 200;

    let prevScrollTop = 0;
    let currScrollTop = 0;
    let touchStart = 0;
    let touchEnd = 0;
    let isHeaderPinned = false;
    const defaultPosY = -100;

    fixedHeaderElm?.setAttribute("aria-hidden", "true");
    gsap.set(fixedHeaderElm, {
      y: defaultPosY,
      display: "block",
      // visibility: "hidden",
    });

    const pinHeader = () => {
      if (isHeaderPinned) return;

      gsap.killTweensOf(fixedHeaderElm);
      isHeaderPinned = true;

      gsap.to(fixedHeaderElm, {
        y: 0,
        force3D: true,
        onStart() {
          gsap.set(fixedHeaderElm, { willChange: "transform" });
        },
      });
    };

    const resetStyles = () => {
      isHeaderPinned = false;
    };

    const unpinHeader = () => {
      if (!isHeaderPinned) return;

      gsap.killTweensOf(fixedHeaderElm);

      gsap.to(fixedHeaderElm, {
        y: defaultPosY,
        force3D: true,
        onStart() {
          gsap.set(fixedHeaderElm, { willChange: "transform" });
        },
        onComplete() {
          gsap.set(fixedHeaderElm, { willChange: "" });
          resetStyles();
        },
      });
    };

    const toggleHeader = (scrollTop: number) => {
      currScrollTop = scrollTop;
      const direction =
        currScrollTop > prevScrollTop
          ? ScrollDirection.Down
          : ScrollDirection.Up;
      const touchesDifferent = touchEnd - touchStart >= 5;

      if (direction === ScrollDirection.Up) {
        if (currScrollTop > clientHeight && touchesDifferent) {
          pinHeader();
        } else {
          unpinHeader();
        }
      } else {
        unpinHeader();
      }

      prevScrollTop = currScrollTop;
    };

    const handleScroll = () => {
      toggleHeader(document.documentElement.scrollTop);
    };
    const onScroll = throttle(handleScroll, 200);
    const onTouchStart = throttle((event) => {
      touchStart = event.touches[0].clientY;
    }, 200);
    const onTouchEnd = throttle((event) => {
      touchEnd = event.changedTouches[0].clientY;
    }, 200);

    document.addEventListener("scroll", onScroll, { passive: true });

    document.addEventListener("touchstart", onTouchStart, { passive: true });

    document.addEventListener("touchend", onTouchEnd, { passive: true });
  }
};
