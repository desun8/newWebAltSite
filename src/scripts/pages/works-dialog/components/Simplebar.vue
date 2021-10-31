<template>
  <div ref="simplebar" class="simplebar">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from "vue";
import SimpleBar from "simplebar";
import "simplebar/dist/simplebar.css";

export default defineComponent({
  props: {
    setRef: {
      type: Function as PropType<(a: HTMLElement) => void>,
      required: true,
    },
  },

  setup(props) {
    const setRef = props.setRef;

    const simplebar = ref();
    onMounted(() => {
      if (simplebar.value) {
        new SimpleBar(simplebar.value, {
          autoHide: false,
        });

        setRef(simplebar.value);
      }
    });

    return { simplebar };
  },
});
</script>

<style lang="scss" scoped>
.simplebar {
  @apply <md:(mx-$base-page-gap-negative px-$base-page-gap);
}

.simplebar :deep(.simplebar-track.simplebar-horizontal) {
  @apply <md:(left-$base-page-gap right-$base-page-gap);

  bottom: 20px;
  height: 3px;
  background-color: #0f0f0f;

  @media (--lg) {
    bottom: 15px;
  }
}

.simplebar
  :deep(.simplebar-track.simplebar-horizontal
    .simplebar-scrollbar.simplebar-visible) {
  top: 0;
  height: 100%;
}

.simplebar :deep(.simplebar-scrollbar::before) {
  @apply bg-sun opacity-100;
}

.simplebar :deep(.simplebar-content-wrapper::-webkit-scrollbar) {
  display: none;
}
</style>
