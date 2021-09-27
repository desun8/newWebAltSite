import APP from "@/scripts/app/APP";
import { disableScroll, enableScroll } from "@/scripts/helpers/scrollLock";
import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";
import "@/styles/components/lightbox.scss";

export const lightbox = (elms: HTMLElement[]) => {
  elms.forEach((elm) => {
    const instance = basicLightbox.create(elm.children[0].outerHTML, {
      onShow: (instance) => {
        document.onkeydown = (event) => {
          if (event.key === "Escape") {
            instance.close();
          }
        };

        disableScroll(instance.element() as HTMLElement, APP.scrollbar);
        return true;
      },
      onClose: (instance) => {
        document.onkeydown = null;

        enableScroll(instance.element() as HTMLElement, APP.scrollbar);
        return true;
      },
    });

    elm.onclick = (event) => {
      event.preventDefault();
      instance.show();
    };
  });
};
