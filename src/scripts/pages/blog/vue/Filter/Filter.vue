<template>
  <div ref="pinContainer" class="pin-filter-container">
    <div
      ref="root"
      :class="{ 'is-pinned': isPinned, 'is-active': isPinned && isActive }"
      class="filter"
    >
      <button
        ref="btnToggle"
        @click="throttleClick"
        class="filter__collapse"
        type="button"
      >
        Переключить видимость фильтра
      </button>

      <div class="filter__icon">
        <svg viewBox="0 0 14 12" width="14" height="12">
          <path d="M.938.5L7 11 13.062.5H.938z" />
        </svg>
        <span class="icon-text">filter</span>
      </div>

      <fieldset class="filter__group">
        <legend class="visually-hidden">Фильтр статей</legend>
        <filter-item
          v-for="item in filterItems"
          :key="item.type"
          :value="item.value"
          :name="item.name"
          :checked="item.checked"
          :handleChange="setActiveFilter"
        />
      </fieldset>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { throttle } from "lodash";

import FilterItem from "./FilterItem.vue";
import APP from "../../../../app/APP";

export default {
  name: "FilterElm",
  components: {
    FilterItem,
  },
  data() {
    return {
      config: {
        widthShrink: 0,
        widthExpand: 0,
        posLeft: 0,
        duration: 0.3,
      },
      isPinned: false,
      isActive: false,
    };
  },
  props: {
    filterItems: {
      type: Array,
      required: true,
    },
    setActiveFilter: {
      type: Function,
      required: true,
    },
  },

  methods: {
    setWidthExpand(isUpdate = false) {
      if (this.config.widthExpand === 0 || isUpdate) {
        this.config.widthExpand = this.$refs.root.offsetWidth + 10;
      }
    },
    setWidthShrink() {
      if (this.config.widthShrink === 0) {
        this.config.widthShrink = getComputedStyle(
          this.$refs.pinContainer
        ).getPropertyValue("--width-shrink");
      }
    },
    setPosLeft() {
      this.config.posLeft =
        this.$refs.pinContainer.getBoundingClientRect().left * -1;
    },

    expand() {
      gsap.set(this.$refs.pinContainer, { clearProps: "width" });

      setTimeout(() => {
        this.setWidthExpand();

        gsap
          .timeline()
          .set(this.$refs.pinContainer, {
            width: this.config.widthExpand,
          })
          .to(this.$refs.pinContainer, {
            background: "#131313",
            duration: this.config.duration,
          });
      }, 100);
    },
    shrink() {
      gsap.to(this.$refs.pinContainer, {
        background: "transparent",
        duration: this.config.duration,
      });

      if (this.isPinned) {
        setTimeout(() => {
          this.setWidthShrink();

          gsap.set(this.$refs.pinContainer, {
            width: this.config.widthShrink,
          });
        }, 500);
      }
    },
    pin() {
      gsap.to(this.$refs.pinContainer, {
        x: this.config.posLeft,
        duration: this.config.duration,
      });
    },
    unpin(shouldClearWidth = true) {
      gsap.to(this.$refs.pinContainer, {
        x: 0,
        background: "transparent",
        duration: this.config.duration,
        onStart: () => {
          if (shouldClearWidth) {
            gsap.set(this.$refs.pinContainer, {
              clearProps: "width",
            });
          }
        },
      });
    },

    handleClick() {
      this.isActive = !this.isActive;

      if (this.isActive) {
        this.expand();
      } else {
        this.shrink();
      }
    },

    throttleClick: throttle(function () {
      this.handleClick();
    }, 600),

    handleClickOutside(e) {
      const isOutside = !e.target.closest("div.filter");

      if (isOutside) {
        this.isActive = false;
        this.shrink();
      }
    },

    scrollPin() {
      const pinContainer = this.$refs.pinContainer;
      if (pinContainer === null) {
        console.warn(
          "🚀 ~ file: Filter.vue ~ line 92 ~ fixFilter ~ triggerElm",
          pinContainer
        );
        return;
      }

      ScrollTrigger.create({
        trigger: pinContainer,
        start: "top 90",
        end: 99999,
        pin: true,
        pinSpacing: false,
        onToggle: ({ isActive }) => {
          if (isActive) {
            this.isPinned = true;
            this.pin();
          } else {
            let isWasActive = this.isActive;

            this.$refs.btnToggle.blur();
            this.isPinned = false;
            this.isActive = false;

            this.unpin(!isWasActive);
          }
        },

        onRefresh: ({ isActive }) => {
          this.setPosLeft();

          if (isActive) {
            this.pin();
          }

          if (this.isActive) {
            this.setWidthExpand(true);
            this.expand();
          }
        },
      });
    },
  },

  mounted() {
    if (APP.isDesktop) {
      if (APP.scrollbar) {
        this.scrollPin();
      }

      document.addEventListener("pointerup", this.handleClickOutside);
    }
  },
};
</script>
