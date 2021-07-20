import gsap from "gsap";
import { submit } from "../form/submit";
import {
  handleClearValidation,
  validateEmail,
} from "../form/validation";
import { loadRecaptcha } from "../../utils/loadRecaptcha";

export default (formElm: HTMLFormElement) => {
  let isFetching = false;
  const animationDuration = 0.6;
  const isThemeOrange = () => {
    return document.body.classList.contains("theme-sun");
  };

  const showSuccessMessage = () => {
    const duration = animationDuration;

    gsap
      .timeline()
      .to(fieldElm, { y: 10, alpha: 0, duration })
      .set(msgElm, { display: "block", y: 10, alpha: 0 })
      .to(msgElm, { y: 0, alpha: 1, duration }, "1")
      .to(
        submitBtn,
        { fill: isThemeOrange() ? "#ff5000" : "#fff", duration },
        "1"
      );
  };

  const hideSuccessMessage = () => {
    const duration = animationDuration;

    gsap
      .timeline({
        onStart() {
          emailInput.value = "";
        },
        onComplete() {
          isFetching = false;
        },
      })
      .to(msgElm, { y: 10, alpha: 0, duration })
      .set(msgElm, { display: "" })
      .to(fieldElm, { y: 0, alpha: 1, duration }, "1")
      .to(submitBtn, { fill: "", duration }, "1");
  };

  const emailInput = formElm.querySelector(
    "input[type=email]"
  ) as HTMLInputElement;
  const fieldElm = formElm.querySelector(".form-field");
  const msgElm = formElm.querySelector(
    ".subscribe-banner-block__success"
  ) as HTMLButtonElement;
  const submitBtn = formElm.querySelector(
    "button[type=submit]"
  ) as HTMLButtonElement;

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

        showSuccessMessage();
      })();
    }
  };

  msgElm.onclick = () => {
    hideSuccessMessage();
  };

  handleClearValidation(emailInput);
};
