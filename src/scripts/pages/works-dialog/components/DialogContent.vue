<template>
  <div class="lg:(grid grid-cols-2)">
    <list-item-info
      :kind="itemInfo.kind"
      :tags="itemInfo.tags"
      :image="itemInfo.img"
      :text="itemInfo.text"
      :set-info-elm="setInfoElm"
    ></list-item-info>

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

    <btn-to-top></btn-to-top>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, watch } from "vue";
import FilterElement from "../../blog/vue/Filter/Filter.vue";
import ListElement from "./List.vue";
import ListItemInfo from "./ListItemInfo.vue";
import Simplebar from "./Simplebar.vue";
import BtnToTop from "./BtnToTop.vue";
import useFilters from "../composables/useFilters";
import useItems from "../composables/useItems";
import useItemInfo from "../composables/useItemInfo";
import useListScroll from "../composables/useListScroll";

export default defineComponent({
  components: { FilterElement, Simplebar, ListElement, ListItemInfo, BtnToTop },

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

    const { setInfoElm, itemInfo, setItemInfo } = useItemInfo();
    const { listElm } = useListScroll();

    return {
      activeFilter,
      setActiveFilter,
      filterItems,
      itemsFiltered,
      total,
      setInfoElm,
      itemInfo,
      setItemInfo,
      listElm,
    };
  },
});
</script>

<style lang="scss" scoped>
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
</style>
