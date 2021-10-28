import { throttle } from "lodash-es";
import SmoothScrollbar from "smooth-scrollbar";
import { initCheckbox } from "./checkbox";
import { initContactInputs, setInputHasValueClass } from "./contactInputs";
import { InputFile } from "./inputFile";
import { handleSubmit } from "./submit";

export const initForm = (
  form: HTMLFormElement,
  scrollbar: SmoothScrollbar | undefined
) => {
  if (!form) {
    console.error("Ошибка инициализации формы!");
    return;
  }

  const typesChekboxContainer = form.querySelector<HTMLElement>("#types-data")!;
  const contactInputContainer =
    form.querySelector<HTMLElement>("#contacts-data")!;

  initCheckbox(typesChekboxContainer);
  initContactInputs(contactInputContainer);

  const inputFile = new InputFile(
    form.querySelector(".form__input-file")!,
    scrollbar
  );

  const resetForm = () => {
    const contactInputs = Array.from(
      contactInputContainer.querySelectorAll<HTMLInputElement>("input")
    );

    form.reset();
    inputFile.clear();

    contactInputs.forEach((input) => {
      setInputHasValueClass(input);
      input.removeAttribute("data-valid");
    });
  };

  const onSubmit = throttle(handleSubmit, 500);
  form.onsubmit = (event) => {
    event.preventDefault();
    onSubmit(event, resetForm);
  };
};
