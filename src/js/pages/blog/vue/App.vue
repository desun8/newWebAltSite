<template>
  <fragment>
    <div class="page-blog__articles">
      <filter-elm :setActiveFilter="setActiveFilter"/>
      <articles-block :active-filter="activeFilter"/>
    </div>

    <instagram/>
  </fragment>
</template>

<script>
import FilterElm from './Filter/Filter.vue';
import ArticlesBlock from './ArticlesBlock/ArticlesBlock.vue';
import Instagram from './Instagram/Instagram.vue';


export default {
  components: {
    Instagram,
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