<template>
  <transition-group
    v-on:enter="enter"
    v-on:leave="leave"
    name="item"
    tag="ul"
    class="blog-list"
  >
    <li
      ref="category"
      v-for="[dateKey, items] in itemList"
      :key="dateKey"
      class="blog-list__category"
    >
      <div ref="categoryDate" class="blog-list__date">
        <span>{{ formatDate(dateKey) }}</span>
      </div>
      <transition-group
        v-on:enter="enter"
        v-on:leave="leave"
        name="item"
        tag="ul"
        class="blog-list__sublist"
      >
        <ListItem
          v-for="(item, index) in items"
          :key="item.id"
          :type="item.type"
          :date="item.date"
          :title="item.title"
          :describe="item.describe"
          :img="item.img"
          :href="item.href"
        >
          <SubscribeBanner
            v-if="firstDateKey === dateKey && index === 0"
            :is-only-sm="true"
            id="list"
          />
        </ListItem>
      </transition-group>
    </li>
  </transition-group>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ListItem from "./ListItem.vue";
import APP from "../../../../../app/APP";
import SubscribeBanner from "@/scripts/pages/blog/vue/Subscribes/SubscribeBanner.vue";
import { resizeObserver } from "@/scripts/utils/resizeObserver";

export default {
  name: "List",
  components: {
    SubscribeBanner,
    ListItem,
  },
  data() {
    return {
      duration: 0.35,
      firstDateKey: undefined,
    };
  },
  props: {
    itemList: {
      type: Object,
      required: true,
    },
  },

  methods: {
    enter(el, done) {
      const { duration } = this;
      const delay = duration;

      gsap.from(el, {
        x: APP.isDesktop ? -100 : 0,
        y: APP.isDesktop ? 0 : 50,
        alpha: 0,
        duration,
        delay,
        onComplete() {
          done();
        },
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
        },
      });
    },

    formatDate(dateStr) {
      const date = new Date(dateStr);
      return new Intl.DateTimeFormat("ru", {
        year: "numeric",
        month: "long",
      })
        .format(date)
        .slice(0, -3); // обрезаем ' г.'
    },

    pinCategoryDate() {
      const { category, categoryDate } = this.$refs;

      const scrollTrigger = ScrollTrigger.create({
        trigger: category,
        start: "top 200",
        end: "bottom 500",
        pin: categoryDate,
      });

      resizeObserver(category, scrollTrigger.refresh);
    },
  },

  watch: {
    itemList() {
      setTimeout(() => {
        this.pinCategoryDate();
      }, 0);
    },
  },

  beforeMount() {
    if (this.itemList) {
      for (const dateKey of this.itemList.keys()) {
        if (this.firstDateKey === undefined) {
          this.firstDateKey = dateKey;
        }
      }
    }
  },

  mounted() {
    this.pinCategoryDate();
  },
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
