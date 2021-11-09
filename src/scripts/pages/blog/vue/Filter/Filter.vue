<template>
  <div
    ref="pinContainer"
    :class="{ 'is-active': isPinned && isActive }"
    class="pin-filter-container"
  >
    <div
      ref="root"
      :class="{ 'is-pinned': isPinned, 'is-active': isPinned && isActive }"
      class="filter"
    >
      <button
        v-if="!isStatic"
        ref="btnToggle"
        @click="throttleClick"
        class="filter__collapse"
        type="button"
      >
        Переключить видимость фильтра
      </button>

      <div v-if="!isStatic" class="filter__icon">
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
          :text="item.name"
          :checked="item.checked"
          :handleChange="setActiveFilter"
          :name="filterName"
        />
      </fieldset>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "@/styles/page-blog/filter.scss";
import FilterItem from "./FilterItem.vue";
import APP from "../../../../app/APP";
import { resizeObserver } from "@/scripts/utils/resizeObserver";
import SmoothScroll from "@/scripts/components/smoothScroll/SmoothScroll";
import usePinFilter from "./usePinFilter";
import usePinFilterMobile from "./usePinFilterMobile";
import usePinFilterStatic from "./usePinFilterStatic";
import { log } from "@/scripts/utils/log";

export default defineComponent({
  name: "FilterElm",

  components: {
    FilterItem,
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
    filterName: {
      type: String,
      default: "filter",
    },
    isStatic: {
      type: Boolean,
      default: false,
    },
    staticElms: {
      type: Object as PropType<{
        simplebar: HTMLElement;
        scrollbar: SmoothScroll;
      }>,
    },
    contentList: {
      type: Object as PropType<HTMLElement>,
      required: true,
    },
  },

  setup(props) {
    const isStatic = props.isStatic;

    const root = ref<HTMLElement>();
    const pinContainer = ref<HTMLElement>();

    const contentElm = computed(() => props.contentList);
    const simplebar = computed(() => props.staticElms?.simplebar);
    const scrollbar = computed(() => {
      if (props.staticElms?.simplebar) {
        return props.staticElms?.scrollbar.getInstance();
      }

      return undefined;
    });

    const {
      btnToggle,
      isActive,
      isPinned,
      scrollPin,
      handleClickOutside,
      throttleClick,
    } = usePinFilter(root, pinContainer);
    const { scrollPinMobile } = usePinFilterMobile(
      root,
      pinContainer,
      contentElm
    );
    const { scrollPinStatic } = usePinFilterStatic();

    const runInterval = (cb: (id: NodeJS.Timeout) => void) => {
      let count = 0;
      const idInterval = setInterval(() => {
        if (count > 30) {
          log("clear interval...", "warn");
          clearInterval(idInterval);
        }

        cb(idInterval);

        count++;
      }, 100);
    };

    onMounted(() => {
      if (!isStatic) {
        if (APP.isDesktop) {
          if (APP.scrollbar) {
            scrollPin();
          }

          document.addEventListener("pointerup", handleClickOutside);
        } else {
          log("Запуск интервала закрепления фильтра");

          runInterval((id: NodeJS.Timeout) => {
            console.log(
              "🚀 ~ file: Filter.vue ~ line 154 ~ runInterval ~ contentElm.value",
              contentElm.value
            );
            if (contentElm.value) {
              clearInterval(id);

              log("run filter pin mobile");
              scrollPinMobile();
              resizeObserver(contentElm.value as HTMLElement, () => {
                ScrollTrigger.getById("filter-pin")?.refresh();
              });
            }
          });
        }
      } else {
        runInterval((id: NodeJS.Timeout) => {
          if (simplebar.value && scrollbar.value) {
            clearInterval(id);
            scrollPinStatic(simplebar.value, scrollbar.value);
          }
        });
      }
    });

    return {
      root,
      pinContainer,
      btnToggle,
      isActive,
      isPinned,
      throttleClick,
      scrollPin,
      handleClickOutside,
      scrollPinMobile,
    };
  },
});
</script>
