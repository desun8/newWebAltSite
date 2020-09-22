<template>
  <!--  <ul class="blog-list">-->
  <transition-group
      v-on:enter="enter"
      v-on:leave="leave"
      name="item"
      tag="ul"
      class="blog-list"
  >
    <list-item
        v-for="item in itemList"
        :key="item.id"
        :type="item.type"
        :date="item.date"
        :title="item.title"
        :describe="item.describe"
        :img="item.img"
        :href="item.href"
    />
  </transition-group>
  <!--  </ul>-->
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
      duration: 0.65,
    };
  },
  props: {
    itemList: {
      type: Array,
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
      })
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
      })
    },
  }
};
</script>

<style scoped lang="css">
.item-move {
  transition: transform 0.65s;
}

.item-leave-active {
  position: absolute;
}
</style>