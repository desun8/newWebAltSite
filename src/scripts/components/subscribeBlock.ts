import gsap from "gsap";
import { submit } from "./form/submit";
import { validateEmail } from "./form/validation";

export const initSubscribeBlock = (subscribeBlock?: HTMLElement) => {
  if (!subscribeBlock) {
    subscribeBlock = document.querySelector(".subscribe-block") as HTMLElement;
  }

  let isFetching = false;

  if (subscribeBlock && subscribeBlock.dataset.isInit !== "true") {
    subscribeBlock.dataset.isInit = "true";

    const showSuccessMessage = (elm: HTMLElement) => {
      const defaultText = elm.textContent!;
      const successText = elm.dataset.message || "";
      const duration = 0.6;

      const changeText = (newText: string) => {
        gsap.to(elm, {
          y: 10,
          alpha: 0,
          duration,
          onComplete() {
            elm.textContent = newText;
            gsap.to(elm, { y: 0, alpha: 1, duration });
          },
        });
      };

      if (successText) {
        changeText(successText);

        setTimeout(() => {
          changeText(defaultText);
          isFetching = false;
          emailInput.value = "";
        }, duration * 4 * 1000);
      }
    };

    const formElm = subscribeBlock.querySelector("form")!;
    const emailInput = formElm.querySelector(
      "input[type=email]"
    ) as HTMLInputElement;
    const msgElm = formElm.querySelector(".js-text") as HTMLElement;

    formElm.onsubmit = (event) => {
      event.preventDefault();

      const isValid = validateEmail(emailInput);

      if (!isFetching && isValid) {
        isFetching = true;

        (async () => {
          await submit(formElm);

          showSuccessMessage(msgElm);
        })();
      }
    };
  }
};
