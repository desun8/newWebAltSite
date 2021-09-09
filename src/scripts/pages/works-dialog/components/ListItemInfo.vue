<template>
  <div
    ref="infoElm"
    class="
      <lg:hidden
      grid
      items-center
      content-center
      justify-center
      h-screen
      p-$base-page-gap
    "
    data-a11y-dialog-hide
  >
    <img
      v-show="image"
      :src="image"
      class="max-h-70vh mb-3"
      alt=""
      role="presentation"
    />
    <span
      ref="kind"
      class="mb-1 text-2xl leading-none text-sun font-semibold uppercase"
      >{{ kind }}</span
    >
    <span ref="tags" class="text-xs">{{ tags }}</span>
    <span v-show="!image" v-html="text" class="text"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  props: {
    setInfoElm: {
      type: Function,
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
    image: String,
    text: String,
  },

  setup(props) {
    const infoElm = ref<HTMLElement>();
    onMounted(() => {
      if (infoElm.value) {
        props.setInfoElm(infoElm.value);
      }
    });

    return {
      infoElm,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "@/styles/_config/mixins/typographic" as *;

.text {
  @include font-size(64, 64);

  margin-top: 16px;
  font-weight: 600;
  text-transform: uppercase;
}
</style>
