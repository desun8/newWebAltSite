import APP from "@/scripts/app/APP";
import { disableScroll, enableScroll } from "@/scripts/helpers/scrollLock";
import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";
import "@/styles/components/lightbox.scss";

export const lightbox = (elms: HTMLElement[]) => {
  elms.forEach((elm) => {
    const isWideLightbox = elm.classList.contains("js-lightbox--wide");

    const img = elm.classList.contains("js-lightbox")
      ? elm.children[0].outerHTML
      : elm.outerHTML;

    const instance = basicLightbox.create(img, {
      onShow: (instance) => {
        document.onkeydown = (event) => {
          if (event.key === "Escape") {
            instance.close();
          }
        };

        disableScroll(instance.element() as HTMLElement, APP.scrollbar);

        if (isWideLightbox) {
          document.body.classList.add("lightbox-wide");
        }

        return true;
      },
      onClose: (instance) => {
        document.onkeydown = null;

        enableScroll(instance.element() as HTMLElement, APP.scrollbar);

        if (isWideLightbox) {
          setTimeout(() => {
            document.body.classList.remove("lightbox-wide");
          }, 500);
        }
        return true;
      },
    });

    elm.onclick = (event) => {
      event.preventDefault();
      instance.show();
    };
  });
};
