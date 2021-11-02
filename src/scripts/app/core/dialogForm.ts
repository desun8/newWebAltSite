import SmoothScroll from "@/scripts/components/smoothScroll/SmoothScroll";
import { disableScroll, enableScroll } from "@/scripts/helpers/scrollLock";
import { initForm } from "@/scripts/pages/form/initForm";
import { loadRecaptcha } from "@/scripts/utils/loadRecaptcha";
import { mediaQueryEvent } from "@/scripts/utils/mediaQueryEvent";
import { resizeObserver } from "@/scripts/utils/resizeObserver";
import A11yDialog from "a11y-dialog";
import APP from "../APP";
import { Status } from "./smoothScroll";

export const initDialogForm = () => {
  const dialogElm = document.querySelector("#dialog-form") as HTMLElement;

  if (!dialogElm) {
    console.warn(
      "Диалог формы не инициализировался. Отсутствует элемент #dialog-form"
    );
    return;
  }

  const formElm = dialogElm.querySelector("form.form") as HTMLFormElement;
  let smoothScroll: SmoothScroll | undefined;

  const initSmoothScroll = () => {
    const dialogScrollContainer = dialogElm.querySelector(
      "#dialog-form-scroll-container"
    ) as HTMLElement;
    const dialogHeader = dialogElm.querySelector(".page-header");

    if (dialogScrollContainer && APP.isDesktop && dialogHeader) {
      smoothScroll = new SmoothScroll(dialogScrollContainer);

      mediaQueryEvent(
        () => smoothScroll?.destroy(),
        () => {
          smoothScroll?.init();

          smoothScroll?.getInstance()?.addListener((status: Status) => {
            const posY = status.offset.y;

            // позиционирование кнопки "меню"
            if (posY > 10) {
              dialogHeader.classList.add("is-fixed");
            } else {
              dialogHeader.classList.remove("is-fixed");
            }
          });
        }
      );
    }
  };

  const initDialog = () => {
    const dialogBtnsOpen = document.querySelectorAll(
      ".js-dialog-form-open"
    ) as NodeListOf<HTMLButtonElement>;
    const dialogBtnClose = dialogElm.querySelector(
      ".dialog-close"
    ) as HTMLElement;

    if (!dialogElm || !dialogBtnsOpen.length || !dialogBtnClose) {
      console.warn("Отсутствует элемент диалога формы или кнопка открытия!");
      return;
    }

    if (APP.isDesktop) {
      const headerFeedbackBtn = dialogBtnsOpen[0];
      resizeObserver(headerFeedbackBtn, () => {
        dialogBtnClose.style.width = `${headerFeedbackBtn.offsetWidth}px`;
      });
    }

    const dialog = new A11yDialog(dialogElm);
    initSmoothScroll();
    let isStartRecaptchaLoad = false;

    dialog.on("show", () => {
      if (!isStartRecaptchaLoad) {
        isStartRecaptchaLoad = true;
        loadRecaptcha();
      }

      disableScroll(dialogElm, APP.scrollbar);
    });
    dialog.on("hide", () => {
      enableScroll(dialogElm, APP.scrollbar);
      smoothScroll?.getInstance()?.scrollTo(0, 0);
    });

    dialogBtnsOpen.forEach((btnOpen) => {
      btnOpen.addEventListener("click", () => {
        dialog.show();
      });
    });
  };

  if (dialogElm && formElm) {
    initDialog();
    initForm(formElm, smoothScroll?.getInstance());
  }
};
