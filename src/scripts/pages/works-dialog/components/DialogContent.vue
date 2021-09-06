<template>
  <div class="lg:(grid grid-cols-2)">
    <div
      ref="infoElm"
      class="
        <lg:hidden
        grid
        items-center
        content-center
        justify-center
        h-screen
        p-$base-page-gap
      "
      data-a11y-dialog-hide
      :img="itemInfo.img"
      :kind="itemInfo.kind"
      :tags="itemInfo.tags"
      :text="itemInfo.text"
    >
      <img
        v-show="itemInfo.img"
        :src="itemInfo.img"
        class="max-h-70vh mb-3"
        alt=""
        role="presentation"
      />
      <span
        ref="kind"
        class="mb-1 text-2xl leading-none text-sun font-semibold uppercase"
        >{{ itemInfo.kind }}</span
      >
      <span ref="tags" class="text-xs">{{ itemInfo.tags }}</span>
      <span
        v-show="!itemInfo.img"
        ref="text"
        v-html="itemInfo.text"
        class="text"
      ></span>
    </div>

    <div ref="listElm" class="list">
      <!-- 
        TODO: нужно завернуть в header.
        Так же перенести сюда кнопку закрытия.
      -->
      <simplebar>
        <filter-element
          :filter-items="filterItems"
          :set-active-filter="setActiveFilter"
          :is-static="true"
          filter-name="filter-dialog"
        ></filter-element>
      </simplebar>

      <list-element
        :items="itemsFiltered"
        :set-item-info="setItemInfo"
      ></list-element>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, watch } from "vue";
import { gsap } from "gsap";
import FilterElement from "../../blog/vue/Filter/Filter.vue";
import ListElement from "./List.vue";
import Simplebar from "./Simplebar.vue";
import useFilters from "../composables/useFilters";
import useItems from "../composables/useItems";
import { ItemInfo } from "../types";
import SmoothScroll from "@/scripts/components/smoothScroll/SmoothScroll";

export default defineComponent({
  components: { FilterElement, Simplebar, ListElement },

  props: {
    setTotal: {
      type: Function as PropType<(a: number) => void>,
      required: true,
    },
  },

  setup(props) {
    const { activeFilter, setActiveFilter, filterItems } = useFilters();
    const { itemsFiltered, total } = useItems(activeFilter);

    const setTotal = props.setTotal;
    watch(total, (newValue) => {
      setTotal(newValue);
    });

    const infoElm = ref<HTMLElement>();
    const itemInfo = ref<ItemInfo>({ img: "", kind: "", tags: "", text: "" });
    const setItemInfo = (
      kind: string,
      tags: string,
      text: string,
      img: string
    ) => {
      if (infoElm.value) {
        gsap.killTweensOf(infoElm.value);
        gsap
          .timeline()
          .to(infoElm.value, {
            alpha: 0,
            duration: 0.1,
            onComplete() {
              itemInfo.value = {
                img,
                kind,
                tags,
                text,
              };
            },
          })
          .to(infoElm.value, { alpha: 1, duration: 0.2, delay: 0.1 });
      }
    };

    const listElm = ref<HTMLElement>();
    const scrollbar = ref();
    onMounted(() => {
      if (listElm.value) {
        scrollbar.value = new SmoothScroll(listElm.value);
        console.log(
          "🚀 ~ file: DialogContent.vue ~ line 121 ~ onMounted ~ scrollbar.value",
          scrollbar.value
        );
        scrollbar.value.init();
      }
    });

    return {
      activeFilter,
      setActiveFilter,
      filterItems,
      itemsFiltered,
      total,
      itemInfo,
      setItemInfo,
      infoElm,
      listElm,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "@/styles/_config/mixins/typographic" as *;

.list {
  padding: 0 var(--base-page-gap);
  color: #fff;
  background-color: var(--c-black, #131313);

  @media (--lg) {
    padding-left: 36px;
    padding-right: calc(var(--base-page-gap) * 2);
  }
}

.list :deep(.pin-filter-container) {
  padding-top: 25px;
  margin-bottom: 45px;

  @media (--lg) {
    padding-top: 22px;
  }
}

.list :deep(.filter) {
  @media (--lg) {
    padding: 0;
  }
}

.list :deep(.filter__item) {
  display: inline-block;

  @media (--lg) {
    margin-left: var(--padding);
  }
}

.text {
  @include font-size(64, 64);

  margin-top: 16px;
  font-weight: 600;
  text-transform: uppercase;
}
</style>
