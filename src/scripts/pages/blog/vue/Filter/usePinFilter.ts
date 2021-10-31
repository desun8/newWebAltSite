import { ref, Ref } from "vue";
import { throttle } from "lodash-es";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function usePinFilter(root: Ref, pinContainer: Ref) {
  const config = ref({
    widthShrink: 0,
    widthExpand: 0,
    posLeft: 0,
    duration: 0.3,
  });

  const isPinned = ref(false);
  const isActive = ref(false);
  const btnToggle = ref<HTMLButtonElement>();

  const setWidthExpand = (isUpdate = false) => {
    if (root.value) {
      if (config.value.widthExpand === 0 || isUpdate) {
        config.value.widthExpand = root.value.offsetWidth + 10;
      }
    }
  };

  const setWidthShrink = () => {
    if (pinContainer.value) {
      if (config.value.widthShrink === 0) {
        config.value.widthShrink = +getComputedStyle(
          pinContainer.value
        ).getPropertyValue("--width-shrink");
      }
    }
  };

  const setPosLeft = () => {
    if (pinContainer.value) {
      config.value.posLeft =
        pinContainer.value.getBoundingClientRect().left * -1;
    }
  };

  const expand = (isRefresh = false) => {
    if (pinContainer.value) {
      if (isRefresh) {
        gsap.set(pinContainer.value, {
          width: config.value.widthExpand,
        });
      } else {
        gsap.set(pinContainer.value, {
          clearProps: "width",
        });

        setTimeout(() => {
          setWidthExpand();

          gsap
            .timeline()
            .set(pinContainer.value!, {
              width: config.value.widthExpand,
            })
            .to(pinContainer.value!, {
              background: "#131313",
              duration: config.value.duration,
            });
        }, 100);
      }
    }
  };

  const shrink = () => {
    if (pinContainer.value) {
      gsap.to(pinContainer.value, {
        background: "transparent",
        duration: config.value.duration,
      });

      if (isPinned.value) {
        setTimeout(() => {
          setWidthShrink();

          gsap.set(pinContainer.value!, {
            width: config.value.widthShrink,
          });
        }, 500);
      }
    }
  };

  const pin = (isRefresh = false) => {
    if (pinContainer.value) {
      if (isRefresh) {
        gsap.set(pinContainer.value, {
          x: config.value.posLeft,
        });
      } else {
        gsap.to(pinContainer.value, {
          x: config.value.posLeft,
          duration: config.value.duration,
        });
      }
    }
  };

  const unpin = (shouldClearWidth = true) => {
    if (pinContainer.value) {
      gsap.to(pinContainer.value, {
        x: 0,
        background: "transparent",
        duration: config.value.duration,
        onStart: () => {
          if (shouldClearWidth) {
            gsap.set(pinContainer.value!, {
              clearProps: "width",
            });
          }
        },
      });
    }
  };

  const handleClick = () => {
    console.log("click btn");
    isActive.value = !isActive.value;

    if (isActive.value) {
      expand();
    } else {
      shrink();
    }
  };

  const throttleClick = throttle(() => {
    handleClick();
  }, 600);

  const handleClickOutside = (e: Event) => {
    const isOutside = !(e.target as HTMLElement).closest("div.filter");

    if (isOutside) {
      isActive.value = false;
      shrink();
    }
  };

  const scrollPin = () => {
    if (!pinContainer.value) {
      return;
    }

    ScrollTrigger.create({
      trigger: pinContainer.value,
      start: "top 90",
      end: 99999,
      pin: true,
      pinSpacing: false,
      onToggle: ({ isActive: isActiveTrigger }) => {
        if (isActiveTrigger) {
          isPinned.value = true;
          pin();
          shrink();
        } else {
          let isWasActive = isActive.value;

          if (btnToggle.value) {
            btnToggle.value.blur();
          }

          isPinned.value = false;
          isActive.value = false;

          unpin(!isWasActive);
        }
      },

      onRefresh: ({ isActive: isActiveTrigger }) => {
        setPosLeft();

        if (isActiveTrigger) {
          pin(true);
        }

        if (isActive.value) {
          setWidthExpand(true);
          expand(true);
        }

        if (isActiveTrigger && !isActive.value) {
          shrink();
        }
      },
    });
  };

  return {
    root,
    pinContainer,
    btnToggle,
    isActive,
    isPinned,
    scrollPin,
    handleClickOutside,
    throttleClick,
  };
}
