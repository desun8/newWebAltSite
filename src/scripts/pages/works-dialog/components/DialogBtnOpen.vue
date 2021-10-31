<template>
  <button
    class="
      link link--btn
      flex
      justify-between
      items-center
      w-full
      h-full
      px-$base-page-gap
      py-11
      bg-sun
      !text-black
      text-1.5xl
      leading-8
      tracking-wide
      font-semibold
      text-left
      uppercase
      lg:(justify-end
      text-2xl text-right)
      xl:(text-32px
      font-medium)
    "
    aria-label="Открыть модальное окно со всеми проектами."
    :data-a11y-dialog-show="dialogId"
  >
    <span class="link__text">
      <span class="inline-block mb-2">все проекты</span><br />
      <span :class="{ 'opacity-0': !totalItems }"
        >{{ `(${totalItems})` }}
      </span>
    </span>

    <span
      class="
        link__icon
        opacity-10
        !w-78px
        !h-78px
        !lg:(
        ml-10)
        !xl:(w-150px
        h-150px
        ml-14)
        !2xl:(w-216px
        h-216px)
      "
    >
      <svg
        class="link__arrow !w-full !h-full"
        width="12"
        height="12"
        aria-hidden="true"
      >
        <use xlink:href="#icon-arrow"></use>
      </svg>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    dialogId: {
      type: String,
      required: true,
    },
    totalItems: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped>
.link--btn * ::selection {
  background-color: var(--c-dark-grey);
}
</style>
