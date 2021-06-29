import gsap from "gsap";
import { submit } from "./form/submit";
import { validateEmail } from "./form/validation";
import { loadRecaptcha } from "../utils/loadRecaptcha";

const subscribeBlock = document.querySelector(".subscribe-block") as HTMLElement;

let isFetching = false;

if (subscribeBlock) {
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
          gsap.to(elm, {y: 0, alpha: 1, duration});
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
  const emailInput = formElm.querySelector("input[type=email]") as HTMLInputElement;
  const msgElm = formElm.querySelector(".js-text") as HTMLElement;

  formElm.addEventListener("focusin", () => {
    loadRecaptcha();
  });

  formElm.onsubmit = (event) => {
    event.preventDefault();

    const isValid = validateEmail(emailInput);

    if (!isFetching && isValid) {
      isFetching = true;

      (async () => {
        const a = await submit(formElm);
        console.log(a);

        showSuccessMessage(msgElm);
      })()
    }
  };
}
