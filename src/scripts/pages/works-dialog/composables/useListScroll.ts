import SmoothScroll from "@/scripts/components/smoothScroll/SmoothScroll";
import { onMounted, ref } from "@vue/runtime-core";

export default function useListScroll() {
  const listElm = ref<HTMLElement>();
  const scrollbar = ref();

  onMounted(() => {
    if (listElm.value) {
      scrollbar.value = new SmoothScroll(listElm.value);
      scrollbar.value.init();
    }
  });

  return { listElm, scrollbar };
}
