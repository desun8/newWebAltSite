<template>
  <div class="works">
    <filter-elm
      :filter-items="filterItems"
      :set-active-filter="setActiveFilter"
      :contentList="contentListElm"
    ></filter-elm>
    <card-list
      :cards-data="worksCardsFiltered"
      :set-content-list-elm="setContentListElm"
    ></card-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import FilterElm from "@/scripts/pages/blog/vue/Filter/Filter.vue";
import CardList from "./components/CardList.vue";
import { FilterTypes } from "./types";
import useWorksCards from "./composables/useWorksCards";
import useFilters from "./composables/useFilters";

export default defineComponent({
  components: {
    FilterElm,
    CardList,
  },

  setup() {
    const contentListElm = ref<Element>();
    const setContentListElm = (elm: Element) => {
      contentListElm.value = elm;
    };

    const { activeFilter, setActiveFilter, filterItems } = useFilters();
    const { worksCardsFiltered } = useWorksCards(activeFilter);

    return {
      contentListElm,
      setContentListElm,
      worksCardsFiltered,
      activeFilter,
      setActiveFilter,
      filterItems,
    };
  },

  methods: {
    setActiveFilter(newValue: FilterTypes) {
      this.activeFilter = newValue;
    },
  },
});
</script>

<style lang="scss" scoped>
.works :deep(.filter__item) {
  @apply <lg:inline-block;
}
</style>
