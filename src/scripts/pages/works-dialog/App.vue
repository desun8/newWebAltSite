<template>
  <dialog-btn-open :dialog-id="dialogId" :total-items="total"></dialog-btn-open>

  <teleport to="body">
    <dialog-element :id="dialogId">
      <dialog-content :set-total="setTotal"></dialog-content>
    </dialog-element>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import DialogElement from "./components/Dialog.vue";
import DialogContent from "./components/DialogContent.vue";
import DialogBtnOpen from "./components/DialogBtnOpen.vue";

export default defineComponent({
  components: {
    DialogElement,

    DialogBtnOpen,
    DialogContent,
  },

  setup() {
    const total = ref(0);
    const setTotal = (value: number) => {
      total.value = value;
    };
    const dialogId = "dialog-works";

    return { total, setTotal, dialogId };
  },
});
</script>
