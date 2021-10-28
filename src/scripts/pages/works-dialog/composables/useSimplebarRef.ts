import { ref } from "@vue/runtime-core";

export default function useSimplebarRef() {
  const simplebar = ref<HTMLElement>();
  const setSimplebar = (elm: HTMLElement) => {
    simplebar.value = elm;
  };

  return { simplebar, setSimplebar };
}
