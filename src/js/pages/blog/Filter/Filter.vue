<template>
  <div ref="root"
       :class="{'is-fixed': isFixed, 'is-active': isFixed && isActive}"
       class="filter"
  >
    <button @click="handleClick" class="filter__collapse">Переключить видимость фильтра</button>
    <div class="filter__icon">
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
import FilterItem from './FilterItem.vue';
import FilterRect from './getFilterRect';
import APP from '../../../app/APP';
import getCssProp from '../../../utils/getCssProp';

export default {
  name: 'FilterElm',
  components: {
    FilterItem
  },
  data() {
    return {
      isFixed: false,
      isActive: false,
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
      this.isActive = !this.isActive;
    },

    changePosition(target) {
      const rect = new FilterRect(this.$refs.root);
      const topGap = parseFloat(getCssProp('--top', this.$refs.root));

      let ticking = false;
      let start = 0;

      target.addEventListener('wheel', () => {
        if (!ticking) {
          requestAnimationFrame((time) => {
            console.log('%c Filter.vue -> wheel event', 'padding: 0.5em; color: #fff; background: red; font-weight: bold;');

            if (time - start > 50) {
              start = time;

              if (target.scrollTop + topGap >= rect.getTop()) {
                this.isFixed = true;
              } else {
                this.isFixed = false;
                this.isActive = false;
              }
            }

            ticking = false;
          });

          ticking = true;
        }
      });
    }
  },

  mounted() {
    if (APP.isDesktop) {
      const intervalId = setInterval(() => {
        const scrollTarget = document.querySelector('body > .os-padding > .os-viewport.os-viewport-native-scrollbars-invisible');

        if (scrollTarget) {
          this.changePosition(scrollTarget);
          clearInterval(intervalId);
        }
      }, 200);
    }
  }
};
</script>