<template>
  <li
      ref="root"
      :class="{'blog-item--event': type === 'event'}"
      :data-img="img"
      class="blog-list__item  blog-item"
  >
    <a :href="href" class="blog-item__link"></a>

    <img :src="img" alt="" loading="lazy" class="blog-item__img">

    <h2 ref="title" class="blog-item__title">{{ title }}</h2>

    <span class="blog-item__describe">{{ describe }}</span>

    <span class="blog-item__date">
      {{ dayDate }}
      <span class="blog-item__full-date">
        {{ fullDate }}
      </span>
    </span>
  </li>
</template>

<script>
import ImgHover from './imgHover';
import TextAnimation from './TextAnimation';
import APP from '../../../../app/APP';

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
    if (APP.isDesktop) {
      const { root, title } = this.$refs;
      new ImgHover(root);
      new TextAnimation(root, title);
    }
  }
};
</script>
