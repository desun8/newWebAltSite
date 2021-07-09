type FormElement = HTMLInputElement | HTMLTextAreaElement;

enum CSSClass {
  Success,
  Error,
}

const errorClass = "has-error";
const successClass = "is-success";

const getFieldElm = (input: FormElement) => input.closest(".form-field");

export const clearValidationClasses = (input: FormElement) => {
  removeClass(input, CSSClass.Success);
  removeClass(input, CSSClass.Error);
};

export const handleClearValidation = (input: FormElement) => {
  input.addEventListener("keydown", () => {
    if (input.hasAttribute("invalid")) {
      clearValidationClasses(input);
    }
  });
};

const addClass = (input: FormElement, type: CSSClass) => {
  const className = type === CSSClass.Success ? successClass : errorClass;
  const elm = getFieldElm(input);

  if (elm) {
    elm.classList.add(className);
    input.setAttribute("invalid", "");
  }
};

const removeClass = (input: FormElement, type: CSSClass) => {
  const className = type === CSSClass.Success ? successClass : errorClass;
  const elm = getFieldElm(input);

  if (elm) {
    elm.classList.remove(className);
    input.removeAttribute("invalid");
  }
};

const setClass = (input: FormElement, type: CSSClass, isAdd: boolean) => {
  if (isAdd) {
    addClass(input, type);
  } else {
    removeClass(input, type);
  }
};

const setValidationClass = (input: FormElement, isValid: boolean) => {
  if (isValid) {
    setClass(input, CSSClass.Error, false);
    setClass(input, CSSClass.Success, true);
  } else {
    setClass(input, CSSClass.Success, false);
    setClass(input, CSSClass.Error, true);
  }
};

export const validateEmail = (input: HTMLInputElement) => {
  // проверка на допустимые символы
  const { value } = input;
  const isValid =
    value.match(
      /^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]+)])$/i
    ) !== null;

  setValidationClass(input, isValid);

  console.warn("Проверка email", isValid);
  return isValid;
};
