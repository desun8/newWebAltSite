import { ref } from "vue";
import { ItemInfo } from "../types";
import { gsap } from "gsap";

export default function useItemInfo() {
  const infoElm = ref<HTMLElement>();
  const setInfoElm = (elm: HTMLElement) => {
    infoElm.value = elm;
  };

  const itemInfo = ref<ItemInfo>({ img: "", kind: "", tags: "", text: "" });

  const setItemInfo = (
    kind: string,
    tags: string,
    text: string,
    img: string
  ) => {
    if (infoElm.value) {
      gsap.killTweensOf(infoElm.value);
      gsap
        .timeline()
        .to(infoElm.value, {
          alpha: 0,
          duration: 0.1,
          onComplete() {
            console.log("text", text);
            itemInfo.value = {
              img,
              kind,
              tags,
              text,
            };
          },
        })
        .to(infoElm.value, { alpha: 1, duration: 0.2, delay: 0.1 });
    }
  };

  return {
    setInfoElm,
    itemInfo,
    setItemInfo,
  };
}
