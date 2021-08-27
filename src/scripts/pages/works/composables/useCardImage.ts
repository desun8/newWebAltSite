import checkWebpFeature, { Features } from "@/scripts/utils/checkWebpFeature";
import { computed, ref } from "vue";

const bgImgStyle = (path: string) => `background-image: url(${path})`;

export default function useCardImage(images: string[]) {
  const webpSupport = ref(false);
  const png = images[0];
  const webp = images[1] || png;

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
