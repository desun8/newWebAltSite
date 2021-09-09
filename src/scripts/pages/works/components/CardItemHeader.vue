<template>
  <div
    class="
      card-header
      grid
      content-start
      mb-10
      md:min-h-24
      lg:min-h-28
      1.5xl:min-h-36 1.5xl:mb-22
    "
    style="word-break: break-word"
  >
    <h2
      class="
        card-title
        mb-2.5
        text-5xl
        leading-9
        font-semibold
        uppercase
        @md:(text-4xl
        leading-7)
        1.5xl:text-6xl 1.5xl:leading-45px 1.5xl:mb-3.5
      "
    >
      {{ title }}
    </h2>
    <span
      class="
        card-kind
        mb-1
        text-sun text-sm
        !leading-none
        font-semibold
        uppercase
        1.5xl:text-xl
      "
      >{{ kind }}</span
    >
    <span class="card-tags text-xs !leading-none opacity-50 1.5xl:text-sm">{{
      tags
    }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
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
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@use "@/styles/_config/index" as *;

@media (--xl-2) {
  .card-header {
    min-height: vw(160);
  }

  .card-title {
    @include font-size(72, 54);
  }

  .cart-kind {
    @include font-size(24);
  }

  .cart-tags {
    @include font-size(16);
  }
}
</style>
