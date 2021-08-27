<template>
  <ul class="<md:block grid grid-cols-2 xl:grid-cols-3">
    <li v-for="card in cardsData" :key="card.id" class="list-item">
      <card-item
        :title="card.title"
        :kind="card.kind"
        :tags="card.tags"
        :text="card.text"
        :imgPath="card.imgPath.small"
        :href="card.href"
      ></card-item>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { CardResponse } from "../types";
import CardItem from "./CardItem.vue";

export default defineComponent({
  components: { CardItem },
  props: {
    cardsData: {
      type: Array as PropType<CardResponse[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@use "@/styles/_config/utilities/custom-media";

.list-item {
  @apply shadow-collapsing <md:(mx-$base-page-gap-negative p-$base-page-gap);

  --shadow-color: #dfdddf;
  --tw-shadow: 1px 0 0 0 var(--shadow-color), 0 0 0 0 var(--shadow-color),
    0 0 0 0 var(--shadow-color), 0 0 0 0 var(--shadow-color) inset,
    0 1px 0 0 var(--shadow-color) inset;
}

@media (--md) {
  .list-item {
    --tw-shadow: 1px 0 0 0 var(--shadow-color), 0 1px 0 0 var(--shadow-color),
      1px 1px 0 0 var(--shadow-color), 1px 0 0 0 var(--shadow-color) inset,
      0 1px 0 0 var(--shadow-color) inset;
  }

  .list-item:nth-child(1),
  .list-item:nth-child(2) {
    // убираем верхний бордер
    --tw-shadow: 1px 0 0 0 var(--shadow-color), 0 1px 0 0 var(--shadow-color),
      1px 1px 0 0 var(--shadow-color), 1px 0 0 0 var(--shadow-color) inset,
      0 0 0 0 var(--shadow-color) inset;
  }
}

@media (--md) and (width < 80em) {
  .list-item:nth-last-child(1),
  .list-item:nth-last-child(2):not(:nth-child(2n)) {
    // убираем нижний бордер
    --tw-shadow: 1px 0 0 0 var(--shadow-color), 0 0 0 0 var(--shadow-color),
      1px 0 0 0 var(--shadow-color), 1px 0 0 0 var(--shadow-color) inset,
      0 1px 0 0 var(--shadow-color) inset;
  }
}

@media (--xl) {
  .list-item:nth-child(3) {
    // убираем верхний бордер
    --tw-shadow: 1px 0 0 0 var(--shadow-color), 0 1px 0 0 var(--shadow-color),
      1px 1px 0 0 var(--shadow-color), 1px 0 0 0 var(--shadow-color) inset,
      0 0 0 0 var(--shadow-color) inset;
  }

  .list-item:nth-last-child(1),
  .list-item:nth-last-child(2):not(:nth-child(3n)),
  .list-item:nth-last-child(3):not(:nth-child(3n)):not(:nth-child(3n-1)) {
    // убираем нижний бордер
    --tw-shadow: 1px 0 0 0 var(--shadow-color), 0 0 0 0 var(--shadow-color),
      1px 0 0 0 var(--shadow-color), 1px 0 0 0 var(--shadow-color) inset,
      0 1px 0 0 var(--shadow-color) inset;
  }
}
</style>