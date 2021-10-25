import { throttle } from "lodash";
import gsap from "gsap";
import APP from "../app/APP";

enum ScrollDirection {
  Up,
  Down,
}

export const fixedHeader = () => {
  const isSmallScreen = !(APP.isDesktop && APP.scrollbar);
  const fixedHeaderElm = document.querySelector(".page-header-fixed");

  if (isSmallScreen && fixedHeaderElm) {
    let clientHeight = document.documentElement.clientHeight + 200;

    let prevScrollTop = 0;
    let currScrollTop = 0;

    let isHeaderPinned = false;
    const defaultPosY = -100;

    fixedHeaderElm.setAttribute("aria-hidden", "true");
    gsap.set(fixedHeaderElm, {
      y: defaultPosY,
      display: "block",
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

      if (direction === ScrollDirection.Up) {
        if (currScrollTop > clientHeight) {
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
    document.addEventListener("scroll", onScroll, { passive: true });
  }
};
