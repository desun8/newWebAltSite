<template>
  <li class="not-last:mb-5 lg:not-last:mb-9">
    <article ref="item" class="relative grid hover:text-sun">
      <h3
        class="
          title
          text-32px
          leading-none
          font-semibold
          uppercase
          transition-colors
        "
      >
        {{ title }}
      </h3>
      <span
        class="
          mb-0.5
          text-sun text-xs
          leading-none
          font-semibold
          uppercase
          lg:hidden
        "
        >{{ kind }}</span
      >
      <span class="text-xs leading-none opacity-50 lg:hidden">{{
        formatedTags
      }}</span>

      <a class="absolute top-0 left-0 w-full h-full" :href="href"></a>
    </article>
  </li>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, toRefs } from "vue";

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    kind: {
      type: String,
      required: true,
    },
    tags: {
      type: Array as PropType<string[]>,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    imgPath: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    setItemInfo: {
      type: Function as PropType<
        (kind: string, tags: string, text: string, img: string) => void
      >,
      required: true,
    },
  },

  setup(props) {
    const item = ref<HTMLElement>();
    const { kind, tags, imgPath, text, setItemInfo } = toRefs(props);
    const formatedTags = `#${tags.value.join(" #")}`;

    const handleMouseEnter = () => {
      setItemInfo.value(kind.value, formatedTags, text.value, imgPath.value);
    };

    onMounted(() => {
      if (item.value) {
        item.value.addEventListener("mouseenter", handleMouseEnter, {
          passive: true,
        });
      }
    });

    return { item, formatedTags };
  },
});
</script>

<style lang="scss" scoped>
@use "@/styles/_config/mixins/typographic" as *;

.title {
  @media (--lg) {
    @include font-size(52, 42);
  }
}
</style>
