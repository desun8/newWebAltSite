import gsap from "gsap/all";
import { checkValidationRequiredInputs } from "./contactInputs";
import { RECAPTCHA_KEY } from "@/scripts/app/core/api";

type Status = "OK" | "ERROR";
type StatusLowerCase = "ok" | "error";
interface ResponseJson {
  message: string;
  status: Status;
}

const getInvalidateInput = (form: HTMLFormElement) => {
  return (
    form.querySelector("[required][data-valid='false']") ||
    form.querySelector("[required]:not([data-valid])")
  );
};

const isInputFileValid = (form: HTMLFormElement) => {
  const inputFile = form.querySelector<HTMLInputElement>("input[type='file'")!;

  return inputFile.dataset.valid !== "false";
};

const isFormValid = (form: HTMLFormElement) => {
  if (getInvalidateInput(form) !== null) {
    return false;
  }

  return true;
};

const replaceSubmitBtnText = (
  btn: HTMLButtonElement,
  textElm: Element,
  newText: string
) => {
  const defaultText = textElm.textContent || "отправить";

  if (btn.disabled) {
    return;
  }

  const play = (config: { disabled: boolean; text: string }) => {
    gsap.to(btn, {
      x: 20,
      alpha: 0,
      duration: 0.4,
      onComplete() {
        btn.disabled = config.disabled;
        textElm.textContent = config.text;

        gsap.to(btn, {
          x: 0,
          alpha: 1,
          duration: 0.4,
        });
      },
    });
  };

  play({ disabled: true, text: newText });

  setTimeout(() => {
    play({ disabled: false, text: defaultText });
  }, 3000);
};

let isSubmiting = false;

export const handleSubmit = (event: Event, reset: () => void) => {
  event.preventDefault();

  if (isSubmiting) return;

  const formElm = <HTMLFormElement>event.currentTarget;
  const submitBtn = formElm.querySelector<HTMLButtonElement>(
    "button[type='submit']"
  )!;
  const submitBtnText = submitBtn.querySelector(".link__text")!;

  const url = formElm.action;
  const key = RECAPTCHA_KEY;

  const showFinallyMsg = (type: "ok" | "error") => {
    const msg = type === "ok" ? "спасибо" : "ошибка";
    replaceSubmitBtnText(submitBtn, submitBtnText, msg);
  };

  if (isFormValid(formElm)) {
    if (isInputFileValid(formElm) === false) {
      console.warn(
        "Размер прикрепленных файлов больше 15мб! Форма не отправилась."
      );

      return;
    }

    try {
      isSubmiting = true;

      const formData = new FormData(formElm);

      // подключается через <script>
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(key, { action: "form" })
          .then((token: string) => {
            // добавляем в отправляемые данные токен рекаптчи
            formData.append("recaptcha_response", token);

            return fetch(url, { method: "POST", body: formData })
              .then((res: Response) => {
                if (!res.ok) {
                  throw Error(res.statusText);
                }

                return res.json();
              })
              .catch((error) => {
                console.error("Форма не отправилась", error);
              });
          })
          .then((res: ResponseJson) => {
            const status = res.status.toLowerCase() as StatusLowerCase;
            showFinallyMsg(status);

            setTimeout(() => {
              reset();
            }, 500);
            return res;
          });
      });
    } catch (e) {
      console.error("Что-то не так с рекаптчей.", e);
      showFinallyMsg("error");
    } finally {
      isSubmiting = false;
    }
  } else {
    checkValidationRequiredInputs(formElm);
    showFinallyMsg("error");

    console.warn(
      `Возникла проблема с отправкой формы 😿\nЗаполните обязательные поля.`
    );
  }
};
