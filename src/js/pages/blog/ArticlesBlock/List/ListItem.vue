<template>
<!--  <transition name="fade" appear>-->
    <li
        ref="elm"
        :class="{'blog-item--event': type === 'event'}"
        :data-img="img"
        class="blog-list__item  blog-item"
    >
      <a :href="href" class="blog-item__link"></a>

      <img :src="img" alt="" loading="lazy" class="blog-item__img">

      <h2 class="blog-item__title">{{ title }}</h2>

      <span class="blog-item__describe">{{ describe }}</span>

      <span class="blog-item__date">
      {{ dayDate }}
      <span class="blog-item__full-date">
        {{ fullDate }}
      </span>
    </span>
    </li>
<!--  </transition>-->
</template>

<script>
import "../../../../../imageRevealHover/css/base.css"
import Hover from './hover';

const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

export default {
  name: 'ListItem',
  props: {
    type: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    describe: {
      type: String,
      required: true
    },
    img: {
      type: String | undefined,
      required: true
    },
    href: {
      type: String,
      required: true
    }
  },
  computed: {
    getNewDate() {
      return new Date(this.date);
    },

    dayDate() {
      return this.getNewDate.getDate();
    },

    fullDate() {
      if (!APP.isDesktop) {
        const mm = month[this.getNewDate.getMonth()];
        const yyyy = this.getNewDate.getFullYear();
        return `${mm} ${yyyy}`;
      }

      return '';
    }
  },
  mounted() {
    new Hover(this.$refs.elm);
  }
};
</script>

<style scoped>
//.fade-enter-active,
//.fade-leave-active {
//  transition: all 1s;
//}
//
//.fade-enter {
//  opacity: 0;
//  transform: translateY(-100px);
//}
//
//.fade-move {
//  transition: transform 1s;
//}
</style>