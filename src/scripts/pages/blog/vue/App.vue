<template>
  <div class="page-blog__articles">
    <FilterElm
      :filterItems="filterItems"
      :setActiveFilter="setActiveFilter"
      :contentList="contentListElm"
    />
    <ArticlesBlock
      :active-filter="activeFilter"
      :set-content-list-elm="setContentListElm"
    />
  </div>

  <MarketingBlock />
</template>

<script>
import FilterElm from "./Filter/Filter.vue";
import ArticlesBlock from "./ArticlesBlock/ArticlesBlock.vue";
import MarketingBlock from "./MarketingCrisis/MarketingBlock.vue";

export default {
  components: {
    FilterElm,
    ArticlesBlock,
    MarketingBlock,
  },
  data() {
    return {
      activeFilter: "all",
      filterItems: [
        {
          value: "all",
          name: "все",
          checked: true,
        },
        {
          value: "event",
          name: "события",
          checked: false,
        },
        {
          value: "article",
          name: "статьи",
          checked: false,
        },
      ],
      contentListElm: null,
    };
  },
  methods: {
    setActiveFilter(newVal) {
      this.activeFilter = newVal;
    },

    setContentListElm(elm) {
      this.contentListElm = elm;
    },
  },
};
</script>
