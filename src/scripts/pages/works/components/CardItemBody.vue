<template>
  <div class="card-body min-h-52 relative grid 1.5xl:min-h-72">
    <div
      ref="imgElm"
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
          <use xlink:href="/images/sprite.symbol.svg#icon-arrow"></use>
        </svg>
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

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

    setImgElm: {
      type: Function,
      required: true,
    },
  },

  setup(props) {
    const imgElm = ref<HTMLElement>();

    onMounted(() => {
      if (imgElm.value) {
        props.setImgElm(imgElm.value);
      }
    });

    return {
      imgElm,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "@/styles/_config/index" as *;

.card-body {
  @media (--xxxl) {
    min-height: vw(460);
  }
}

.card:not(.is-visible) .card-img {
  background-image: none !important;
}

.card-img {
  background-size: 80%;
  background-position: 95% 10%;
  filter: brightness(1.6) saturate(0);

  @media (--xxl) {
    background-position: 90% 40%;
  }

  @media (--xxxl) {
    background-size: 100%;
    background-position: vw(20) 45%;
  }
}

.is-active .card-img {
  filter: brightness(1) saturate(1);
}

.card-text {
  @media (--xxxl) {
    @include font-size(42);
  }
}
</style>
