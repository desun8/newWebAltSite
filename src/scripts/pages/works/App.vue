<template>
  <div class="page-blog__articles">
    <!-- <filter-elm></filter-elm> -->
    <card-list :cards-data="worksCardsFiltered"></card-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import FilterElm from "@/scripts/pages/blog/vue/Filter/Filter.vue";
import CardList from "./components/CardList.vue";
import { FilterTypes } from "./types";
import useWorksCards from "./composables/useWorksCards";

export default defineComponent({
  components: {
    FilterElm,
    CardList,
  },

  setup() {
    const activeFilter = ref<FilterTypes>(FilterTypes.DEVELOPMENT);

    const { worksCardsFiltered } = useWorksCards(activeFilter.value);

    return { worksCardsFiltered, activeFilter };
  },

  methods: {
    setActiveFilter(newValue: FilterTypes) {
      this.activeFilter = newValue;
    },
  },
});
</script>
