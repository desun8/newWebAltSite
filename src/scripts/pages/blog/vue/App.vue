<template>
  <div class="page-blog__articles">
    <FilterElm :filterItems="filterItems" :setActiveFilter="setActiveFilter" />
    <ArticlesBlock :active-filter="activeFilter" />
  </div>

  <InstagramBlock />
</template>

<script>
import FilterElm from "./Filter/Filter.vue";
import ArticlesBlock from "./ArticlesBlock/ArticlesBlock.vue";
import InstagramBlock from "@/scripts/pages/blog/vue/Instagram/InstagramBlock.vue";

export default {
  components: {
    InstagramBlock,
    FilterElm,
    ArticlesBlock,
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
    };
  },
  methods: {
    setActiveFilter(newVal) {
      this.activeFilter = newVal;
    },
  },
};
</script>
