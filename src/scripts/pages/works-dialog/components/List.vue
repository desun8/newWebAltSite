<template>
  <div ref="list">
    <transition-group
      name="works-list"
      tag="ul"
      class="pb-5"
      @enter="enter"
      @leave="leave"
    >
      <list-item
        v-for="item in items"
        :key="item.id"
        :id="`${item.id}`"
        :title="item.title"
        :kind="item.kind"
        :tags="item.tags"
        :text="item.text"
        :imgPath="item.imgPath"
        :href="item.href"
        :set-item-info="setItemInfo"
      ></list-item>
    </transition-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { gsap } from "gsap";
import { Item } from "../types";
import ListItem from "./ListItem.vue";

export default defineComponent({
  components: { ListItem },
  props: {
    items: {
      type: Array as PropType<Item[]>,
      required: true,
    },
    setItemInfo: {
      type: Function as PropType<
        (a: string, b: string, c: string, d: string) => void
      >,
      required: true,
    },
    setContentListElm: {
      type: Function as PropType<(a: Element) => void>,
      required: true,
    },
  },

  data() {
    return {
      duration: 0.5,
    };
  },

  methods: {
    enter(el: Element, done: () => void) {
      const { duration } = this;
      const delay = duration;

      gsap.from(el, {
        y: 50,
        alpha: 0,
        duration,
        delay,
        onComplete() {
          done();
        },
      });
    },

    leave(el: Element, done: () => void) {
      const { duration } = this;

      gsap.to(el, {
        y: 50,
        alpha: 0,
        duration,
        onComplete() {
          done();
        },
      });
    },
  },

  mounted() {
    if (this.$refs.list) {
      this.setContentListElm(this.$refs.list as Element);
    }
  },
});
</script>
