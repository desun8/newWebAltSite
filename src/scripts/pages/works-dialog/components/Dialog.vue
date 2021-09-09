<template>
  <div
    ref="dialogElm"
    :id="id"
    class="dialog-container works-dialog"
    aria-labelledby="dialog-works-title"
    aria-hidden="true"
  >
    <div class="dialog-overlay" data-a11y-dialog-hide></div>
    <div class="dialog-content" role="document">
      <div class="dialog-close">
        <button
          class="page-menu__close"
          type="button"
          aria-label="Закрыть диалог."
          data-a11y-dialog-hide
        >
          <span class="icon-cross"></span>close
        </button>
      </div>

      <h2 id="dialog-works-title" class="sr-only">Все работы.</h2>

      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import useDialog from "../composables/useDialog";

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup() {
    return { ...useDialog() };
  },
});
</script>

<style lang="scss" scoped>
@use "@/styles/_config/mixins/base-property" as *;

@keyframes fade-in {
  from {
    opacity: 0;
  }
}

@keyframes slide-up {
  from {
    transform: translateY(10%);
  }
}

.dialog-container,
.dialog-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.dialog-container {
  @include base-property();

  z-index: 100;
  display: flex;
  overflow: auto;
}

.dialog-container[aria-hidden="true"] {
  display: none;
}

.dialog-overlay {
  background-color: var(--c-black, #131313);
  animation: fade-in 200ms both;

  @media (--lg) {
    background-color: rgba(#000, 0.85);
  }
}

.dialog-content {
  z-index: 2;
  position: relative;
  width: 100%;
  padding-top: 60px;
  color: #fff;
  animation: fade-in 400ms 200ms both, slide-up 400ms 200ms both;

  @media (--lg) {
    padding-top: 0;
    overflow: hidden;
    animation: fade-in 200ms both;
  }
}

.dialog-close {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;

  @media (--lg) {
    top: 27px;
    right: var(--base-page-gap);
  }
}
</style>
