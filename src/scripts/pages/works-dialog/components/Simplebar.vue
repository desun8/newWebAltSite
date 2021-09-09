<template>
  <div ref="simplebar" class="simplebar">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import SimpleBar from "simplebar";
import "simplebar/dist/simplebar.css";

export default defineComponent({
  setup() {
    const simplebar = ref();
    onMounted(() => {
      if (simplebar.value) {
        new SimpleBar(simplebar.value, {
          autoHide: false,
        });
      }
    });

    return { simplebar };
  },
});
</script>

<style lang="scss" scoped>
.simplebar {
  @apply <md:(mx-$base-page-gap-negative px-$base-page-gap) lg:(mr-10);
}

.simplebar :deep(.simplebar-track.simplebar-horizontal) {
  @apply <md:(left-$base-page-gap right-$base-page-gap);

  bottom: 35px;
  height: 3px;
  background-color: #0f0f0f;
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
