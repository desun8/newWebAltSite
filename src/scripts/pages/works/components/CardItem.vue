<template>
  <div
    class="
      card
      relative
      text-dark-grey
      <md(:mx-$base-page-gap-negative
      px-$base-page-gap) px-30px
      py-25px
      overflow-hidden
    "
  >
    <div class="bg-arrows <lg:hidden"></div>

    <card-item-header
      :title="title"
      :kind="kind"
      :tags="formattedTags"
    ></card-item-header>

    <card-item-body :text="text" :bgImage="cardImage"></card-item-body>

    <a
      :href="href"
      class="absolute top-0 left-0 w-full h-full"
      aria-label="Подробнее."
    ></a>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";
import CardItemHeader from "./CardItemHeader.vue";
import useCardImage from "../composables/useCardImage";
import CardItemBody from "./CardItemBody.vue";

export default defineComponent({
  components: {
    CardItemHeader,
    CardItemBody,
  },
  props: {
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
      type: Array as PropType<string[]>,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const { tags, imgPath } = toRefs(props);

    const formattedTags = computed(() => `#${tags.value.join(" #")}`);

    const { cardImage } = useCardImage(imgPath.value);

    return {
      formattedTags,
      cardImage,
    };
  },
});
</script>
