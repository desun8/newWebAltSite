<template>
  <div class="page-blog__articles">
    <filter-elm :setActiveFilter="setActiveFilter"/>
    <articles-block :active-filter="activeFilter" />
  </div>
</template>

<script>
import FilterElm from './Filter/Filter.vue';
import ArticlesBlock from './ArticlesBlock/ArticlesBlock.vue';


export default {
  components: {
    FilterElm,
    ArticlesBlock
  },
  data() {
    return {
      activeFilter: 'all',
    };
  },
  methods: {
    setActiveFilter(newVal) {
      this.activeFilter = newVal;
    }
  },
  watch: {
    // TODO: нужно ли?
    activeFilter(curr, prev) {
    }
  }
};
</script>