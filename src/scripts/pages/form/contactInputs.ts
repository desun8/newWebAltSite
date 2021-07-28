import IMask from "imask/esm/imask";
import {
  emailValidation,
  telValidation,
  textValidation,
  validation,
} from "./validation";

enum ValidationType {
  "TEXT" = "text",
  "TEL" = "tel",
  "EMAIL" = "email",
}

const inputValidation = (input: HTMLInputElement, type: string) => {
  let validationCb;

  switch (type) {
    case ValidationType.TEXT:
      validationCb = textValidation;
      break;
    case ValidationType.TEL:
      validationCb = telValidation;
      break;
    case ValidationType.EMAIL:
      validationCb = emailValidation;
      break;
    default:
      break;
  }

  if (validationCb) {
    validation(input, validationCb);
  }
};

export const checkValidationRequiredInputs = (parent: HTMLElement) => {
  const inputElms = Array.from(
    parent.querySelectorAll<HTMLInputElement>("input")
  );

  inputElms.forEach((input) => {
    const isRequired = input.hasAttribute("required");
    const validationType = input.dataset.validation;

    if (validationType) {
      inputValidation(input, validationType);
    }

    if (isRequired && input.dataset.valid !== undefined) {
      const isValid = input.dataset.valid === "true";

      if (isValid) {
        input.classList.remove("has-error");
      } else {
        input.classList.add("has-error");
      }
    }
  });
};

export const setInputHasValueClass = (input: HTMLInputElement) => {
  if (input.value !== "") {
    input.classList.add("has-value");
  } else {
    input.classList.remove("has-value");
  }
};

export const initContactInputs = (parent: HTMLElement) => {
  const inputElms = Array.from(
    parent.querySelectorAll<HTMLInputElement>("input")
  );

  inputElms.forEach((input) => {
    const isRequired = input.hasAttribute("required");
    const validationType = input.dataset.validation;

    input.addEventListener("change", () => {
      setInputHasValueClass(input);
    });

    if (validationType) {
      input.addEventListener("change", () => {
        inputValidation(input, validationType);
      });
    }

    if (isRequired) {
      input.addEventListener("change", () => {
        if (input.dataset.valid !== undefined) {
          const isValid = input.dataset.valid === "true";

          if (isValid) {
            input.classList.remove("has-error");
          } else {
            input.classList.add("has-error");
          }
        }
      });
    }

    if (input.id === "tel") {
      IMask(input, {
        mask: "+{7} (000) 000 00 00",
      });
    }
  });
};
