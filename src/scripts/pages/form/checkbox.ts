export const initCheckbox = (parent: HTMLElement) => {
  const checkboxElms = Array.from(
    parent.querySelectorAll<HTMLInputElement>(
      "input[type='checkbox']:not(#all)"
    )
  );

  const checkboxAll = parent.querySelector<HTMLInputElement>(
    "input[type='checkbox']#all"
  )!;

  checkboxElms.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkboxAll.checked) {
        checkboxAll.checked = false;
      }
    });
  });

  checkboxAll.addEventListener("change", () => {
    checkboxElms.forEach((checkbox) => {
      if (checkbox.checked) {
        checkbox.checked = false;
      }
    });
  });
};
