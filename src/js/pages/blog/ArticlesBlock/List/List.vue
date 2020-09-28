<template>
  <ul class="blog-list">
    <li v-for="(value, key) in itemList" :key="key" class="blog-list__category">
      <div class="blog-list__date"><span>{{ formatDate(key) }}</span></div>
      <transition-group
          v-on:enter="enter"
          v-on:leave="leave"
          name="item"
          tag="ul"
          class="blog-list__sublist"
      >
        <list-item
            v-for="item in value"
            :key="item.id"
            :type="item.type"
            :date="item.date"
            :title="item.title"
            :describe="item.describe"
            :img="item.img"
            :href="item.href"
        />
      </transition-group>
    </li>
  </ul>
</template>

<script>
import { gsap } from 'gsap';
import ListItem from './ListItem.vue';
import APP from '../../../../app/APP';

export default {
  name: 'List',
  components: {
    ListItem
  },
  data() {
    return {
      duration: 0.35,
    };
  },
  props: {
    itemList: {
      type: Object,
      required: true
    }
  },

  methods: {
    enter(el, done) {
      const { duration } = this;
      const delay = duration;

      console.log(el.classList.contains('item-move'));

      gsap.from(el, {
        x: APP.isDesktop ? -100 : 0,
        y: APP.isDesktop ? 0 : 50,
        alpha: 0,
        duration,
        delay,
        onComplete() {
          done();
        }
      });
    },

    leave(el, done) {
      const { duration } = this;

      gsap.to(el, {
        x: APP.isDesktop ? -100 : 0,
        y: APP.isDesktop ? 0 : 50,
        alpha: 0,
        duration,
        onComplete() {
          done();
        }
      });
    },

    formatDate(dateStr) {
      const date = new Date(dateStr);
      return new Intl.DateTimeFormat('ru', { year: 'numeric', month: 'long' }).format(date).slice(0, -3); // обрезаем ' г.'
    }
  }
};
</script>

<style scoped lang="css">
.item-move {
  transition: transform 0.35s;
}

.item-leave-active {
  position: absolute;
}
</style>