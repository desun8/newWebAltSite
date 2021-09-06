<template>
  <div
    ref="card"
    class="
      card
      relative
      text-dark-grey
      <md(:mx-$base-page-gap-negative
      px-$base-page-gap)
      lg:(px-30px
      py-25px
      h-full
      overflow-hidden)
    "
  >
    <div
      ref="bgArrowsWrapper"
      class="absolute top-1/20 -left-1/20 w-6/5 h-6/5 -z-1 <lg:hidden"
    >
      <div ref="bgArrows" class="bg-arrows"></div>
    </div>

    <card-item-header
      :title="title"
      :kind="kind"
      :tags="formattedTags"
    ></card-item-header>

    <card-item-body
      :text="text"
      :bgImage="cardImage"
      :set-img-elm="setCardImgElm"
    ></card-item-body>

    <a
      :href="href"
      class="absolute top-0 left-0 w-full h-full"
      aria-label="Подробнее."
    ></a>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  PropType,
  ref,
  toRefs,
} from "vue";
import CardItemHeader from "./CardItemHeader.vue";
import useCardImage from "../composables/useCardImage";
import useCardAnimations from "../composables/useCardAnimations";
import CardItemBody from "./CardItemBody.vue";

export default defineComponent({
  components: {
    CardItemHeader,
    CardItemBody,
  },
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
      type: Array as PropType<string[]>,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const card = ref<HTMLElement>();
    const bgArrowsWrapper = ref<HTMLElement>();
    const bgArrows = ref<HTMLElement>();
    const cardImgElm = ref<HTMLElement>();
    const setCardImgElm = (elm: HTMLElement) => {
      cardImgElm.value = elm;
    };

    const { tags, imgPath, id } = toRefs(props);

    const formattedTags = computed(() => `#${tags.value.join(" #")}`);
    const { cardImage } = useCardImage(imgPath.value);

    onMounted(() => {
      if (
        card.value &&
        bgArrowsWrapper.value &&
        bgArrows.value &&
        cardImgElm.value
      ) {
        useCardAnimations(
          id.value,
          card.value,
          bgArrowsWrapper.value,
          bgArrows.value,
          cardImgElm.value
        );
      }
    });

    return {
      card,
      bgArrowsWrapper,
      bgArrows,
      formattedTags,
      cardImage,
      cardImgElm,
      setCardImgElm,
    };
  },
});
</script>

<style lang="scss" scoped>
.bg-arrows {
  height: 100%;
  background-image: url("/images/works/bg-arrows.svg");
  background-position: center top;
  background-size: contain;
  opacity: 0;
}
</style>
