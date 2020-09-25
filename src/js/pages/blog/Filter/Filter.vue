<template>
  <div ref="root" class="filter">
    <div @click="handleClick" class="filter__icon">
      <svg viewBox="0 0 14 12" width="14" height="12" xmlns="http://www.w3.org/2000/svg">
        <path d="M.938.5L7 11 13.062.5H.938z"/>
      </svg>
    </div>
    <fieldset class="filter__group">
      <legend class="visually-hidden">Фильтр статей</legend>
      <filter-item
          v-for="item in filterItems"
          :key="item.type"
          :value="item.value"
          :name="item.name"
          :checked="item.checked"
          :handleChange="setActiveFilter"
      />
    </fieldset>
  </div>
</template>

<script>
import FilterItem from './FIlterItem.vue';
import getFilterRect from './getFilterRect';

export default {
  name: 'FilterElm',
  components: {
    FilterItem
  },
  data() {
    return {
      filterItems: [
        {
          value: 'all',
          name: 'все',
          checked: true
        },
        {
          value: 'event',
          name: 'события',
          checked: false
        },
        {
          value: 'article',
          name: 'статьи',
          checked: false
        }
      ]
    };
  },
  props: {
    setActiveFilter: {
      type: Function,
      required: true
    }
  },

  methods: {
    handleClick() {
      console.log('click');
      this.$refs.root.classList.toggle('is-active')
    }
  },

  mounted() {
    APP.blogFilter = {
      elm: this.$refs.root,
      top: getFilterRect(this.$refs.root)?.top
    };
  }
};
</script>