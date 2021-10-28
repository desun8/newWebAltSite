<template>
  <div class="flex flex-col min-h-full lg:(grid grid-cols-2)">
    <list-item-info
      :kind="itemInfo.kind"
      :tags="itemInfo.tags"
      :image="itemInfo.img"
      :text="itemInfo.text"
      :set-info-elm="setInfoElm"
    ></list-item-info>

    <div ref="listElm" class="list flex-grow">
      <simplebar :setRef="setSimplebar">
        <filter-element
          :filter-items="filterItems"
          :set-active-filter="setActiveFilter"
          :is-static="true"
          :static-elms="staticElms"
          :contentList="contentListElm"
          filter-name="filter-dialog"
        ></filter-element>
      </simplebar>

      <list-element
        :items="itemsFiltered"
        :set-item-info="setItemInfo"
        :set-content-list-elm="setContentListElm"
      ></list-element>
    </div>

    <btn-to-top></btn-to-top>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watch } from "vue";
import FilterElement from "../../blog/vue/Filter/Filter.vue";
import ListElement from "./List.vue";
import ListItemInfo from "./ListItemInfo.vue";
import Simplebar from "./Simplebar.vue";
import BtnToTop from "./BtnToTop.vue";
import useFilters from "../composables/useFilters";
import useItems from "../composables/useItems";
import useItemInfo from "../composables/useItemInfo";
import useListScroll from "../composables/useListScroll";
import useSimplebarRef from "../composables/useSimplebarRef";

export default defineComponent({
  components: { FilterElement, Simplebar, ListElement, ListItemInfo, BtnToTop },

  props: {
    setTotal: {
      type: Function as PropType<(a: number) => void>,
      required: true,
    },
  },

  setup(props) {
    const contentListElm = ref<Element>();
    const setContentListElm = (elm: Element) => {
      contentListElm.value = elm;
    };

    const { activeFilter, setActiveFilter, filterItems } = useFilters();

    const { itemsFiltered, total } = useItems(activeFilter);

    const setTotal = props.setTotal;
    watch(total, (newValue) => {
      setTotal(newValue);
    });

    const { setInfoElm, itemInfo, setItemInfo } = useItemInfo();
    const { listElm, scrollbar } = useListScroll();

    const { simplebar, setSimplebar } = useSimplebarRef();

    const staticElms = computed(() => ({
      simplebar: simplebar.value,
      scrollbar: scrollbar.value,
    }));

    return {
      contentListElm,
      setContentListElm,
      activeFilter,
      setActiveFilter,
      filterItems,
      itemsFiltered,
      total,
      setInfoElm,
      itemInfo,
      setItemInfo,
      listElm,
      scrollbar,
      simplebar,
      setSimplebar,
      staticElms,
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
  margin-bottom: 20px;

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
