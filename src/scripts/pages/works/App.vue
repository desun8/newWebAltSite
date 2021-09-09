<template>
  <div class="works">
    <filter-elm
      :filter-items="filterItems"
      :set-active-filter="setActiveFilter"
    ></filter-elm>
    <card-list :cards-data="worksCardsFiltered"></card-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
    const { activeFilter, setActiveFilter, filterItems } = useFilters();
    const { worksCardsFiltered } = useWorksCards(activeFilter);

    return { worksCardsFiltered, activeFilter, setActiveFilter, filterItems };
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
