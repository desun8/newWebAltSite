import { Ref, ComputedRef } from "vue";
import { resizeObserver } from "@/scripts/utils/resizeObserver";
import { throttle } from "lodash-es";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function usePinFilterMobile(
  root: Ref,
  pinContainer: Ref,
  content: ComputedRef
) {
  const pageHeader = document.querySelector(".page-header-pin") as HTMLElement;

  const scrollPinMobile = () => {
    if (!pinContainer.value || !pageHeader || !content.value) {
      return;
    }

    const pinHeader = () => {
      if (root.value) {
        const headerDefaultTopPos = -pageHeader.offsetHeight;
        gsap.set(pageHeader, { y: headerDefaultTopPos });

        const duration = 0.5;
        let isHeaderPinned = false;
        let triggerScrollPos = document.documentElement.clientHeight + 200;

        resizeObserver(document.documentElement, () => {
          triggerScrollPos = document.documentElement.clientHeight + 200;
        });

        const pin = gsap
          .timeline({
            onStart() {
              isHeaderPinned = true;
            },
            paused: true,
          })
          .to(pageHeader, { y: 0, duration }, "one")
          .to(root.value, { y: pageHeader.offsetHeight, duration }, "one");

        const unpin = gsap
          .timeline({
            onComplete() {
              isHeaderPinned = false;
            },
            paused: true,
          })
          .to(pageHeader, { y: headerDefaultTopPos, duration }, "one")
          .to(root.value, { y: 0, duration }, "one");

        const unpinReset = () => {
          isHeaderPinned = false;

          gsap.set(pageHeader, { y: headerDefaultTopPos });
          gsap.set(root.value!, { y: 0 });
        };

        let isPlaying = () => pin.isActive() || unpin.isActive();
        let isScrollUp = false;

        ScrollTrigger.create({
          trigger: document.documentElement,
          end: () => {
            const end = content.value.offsetHeight;

            return `${end} top`;
          },
          onUpdate({ direction }) {
            const isScrolled =
              document.documentElement.scrollTop >= triggerScrollPos;

            if (document.documentElement.scrollTop === 0) {
              unpinReset();
              return;
            }

            setTimeout(() => {
              isScrollUp = direction === -1;
            }, 100);

            if (!isPlaying()) {
              if (isScrollUp) {
                if (isScrolled) {
                  if (!isHeaderPinned) {
                    pin.restart();
                  }
                } else {
                  if (isHeaderPinned) {
                    unpin.restart();
                  }
                }
              } else {
                if (isHeaderPinned) {
                  unpin.restart();
                }
              }
            }
          },
        });
      }
    };

    const pinFilter = () => {
      if (root.value && pinContainer.value) {
        let scrollLeft = root.value.scrollLeft;

        root.value.addEventListener(
          "scroll",
          throttle(() => {
            scrollLeft = root.value!.scrollLeft;
          }, 200),
          { passive: true }
        );

        ScrollTrigger.create({
          id: "filter-pin",
          trigger: pinContainer.value,
          start: "top top",
          end: () => {
            const end =
              content.value.offsetHeight -
              (window.screen.height - pinContainer.value!.offsetHeight * 10);

            return `${end} top`;
          },
          pin: true,
          pinSpacing: false,
          onRefresh() {
            root.value!.scrollLeft = scrollLeft;
          },
        });
      }
    };

    pinHeader();
    pinFilter();
  };

  return {
    scrollPinMobile,
  };
}
