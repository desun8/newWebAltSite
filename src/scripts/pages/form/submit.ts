import gsap from "gsap/all";
import { checkValidationRequiredInputs } from "./contactInputs";

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

export const handleSubmit = (event: Event) => {
  event.preventDefault();

  if (isSubmiting) return;

  const formElm = <HTMLFormElement>event.currentTarget;
  const submitBtn = formElm.querySelector<HTMLButtonElement>(
    "button[type='submit']"
  )!;
  const submitBtnText = submitBtn.querySelector(".link__text")!;

  const url = formElm.action;
  const key = "6Lf4h2IbAAAAAEUP39XfYoMe17xWsxuai_kNP5vf";

  const showFinallyMsg = (type: "success" | "error") => {
    const msg = type === "success" ? "спасибо" : "ошибка";
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
      // TODO: Возможно нужно будет добавить input с токеном

      // подключается через <script>
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(key, { action: "form" })
          .then((token: string) => {
            // добавляем в отправляемые данные токен рекаптчи
            formData.append("recaptcha_response", token);

            fetch(url, { method: "POST", body: formData })
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
          .then((res: Response | Object) => {
            showFinallyMsg("success");
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
