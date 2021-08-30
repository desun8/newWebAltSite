<template>
  <div class="card-body min-h-52 relative grid 1.5xl:min-h-72">
    <div
      :style="bgImage"
      class="
        card-img
        absolute
        -z-1
        top-1/2
        left-0
        transform
        -translate-y-1/2
        w-5/4
        h-4/2
        bg-no-repeat
      "
    ></div>

    <span
      v-html="text"
      class="
        card-text
        max-w-3/5
        inline-block
        text-26px
        font-thin
        text-justify
        uppercase
        @md:(text-2xl
        leading-none)
        1.5xl:text-4xl 1.5xl:leading-none
      "
    ></span>

    <span
      class="
        card-more
        link link--underline link--uppercase link--bold
        block
        mt-14
        self-end
        text-sm
        lg:hidden
      "
    >
      <span class="link__text">подробнее</span>
      <span class="link__icon">
        <svg class="link__arrow" width="12" height="12">
          <use xlink:href="#icon-arrow"></use>
        </svg>
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    bgImage: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@use "@/styles/_config/index" as *;

.card-body {
  @media (--xl-2) {
    min-height: vw(460);
  }
}

.card-img {
  background-size: 70%;
  background-position: 120% 20%;

  @media (--xl-1) {
    background-size: 80%;
    background-position: 130% 40%;
  }

  @media (--xl-2) {
    background-size: 100%;
    background-position: vw(100) 50%;
  }
}

.no-saturate .card-img {
  filter: saturate(0);
}

.card-text {
  @media (--xl-2) {
    @include font-size(42);
  }
}
</style>
