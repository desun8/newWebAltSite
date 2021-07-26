type ValidationElement = HTMLInputElement | HTMLTextAreaElement;

interface MyFile extends File {
  size: number;
}

const setValid = (el: ValidationElement, isValid: boolean) => {
  el.dataset.valid = `${isValid}`;
};

export const textValidation = (el: ValidationElement) => {
  const value = el.value.trim();
  return value.length > 1;
};

export const nameValidation = (el: ValidationElement) => {};

export const telValidation = (el: ValidationElement) => {
  const MASK = "+7 (999) 999 99 99";
  const value = el.value.trim();
  return value.length === MASK.length;
};

export const emailValidation = (el: ValidationElement) => {
  const value = el.value.trim();
  return (
    value.match(
      /^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]+)])$/i
    ) !== null
  );
};

export const fileValidation = (el: ValidationElement) => {
  const files = (<HTMLInputElement>el).files;
  let totalSize = 0;

  if (files) {
    for (const file in files) {
      if (Object.prototype.hasOwnProperty.call(files, file)) {
        const fileSize = Math.floor(files[file].size / 1024 / 1024); // MB

        totalSize += fileSize;
      }
    }
  }

  return totalSize <= 15;
};

export const validation = (
  el: ValidationElement,
  validationCb: (a: ValidationElement) => boolean
) => {
  const isValid = validationCb(el);
  setValid(el, isValid);
};
