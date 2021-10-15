import { computed, ref } from "vue";
import APP from "@/scripts/app/APP";
import checkWebpFeature, { Features } from "@/scripts/utils/checkWebpFeature";
import { CardImage } from "../types";

const bgImgStyle = (path: string) => `background-image: url(${path})`;

export default function useCardImage(images: CardImage) {
  const webpSupport = ref(false);
  const png = APP.isDesktop ? images.large[0] : images.small[0];
  let webp = APP.isDesktop ? images.large[1] : images.small[1];

  if (!webp) {
    webp = png;
  }

  checkWebpFeature(Features.lossy, (_: Features, result: boolean) => {
    if (result) {
      webpSupport.value = true;
    } else {
      webpSupport.value = false;
    }
  });

  const cardImage = computed(() =>
    webpSupport ? bgImgStyle(webp) : bgImgStyle(png)
  );

  return { cardImage };
}
