export const alertBeforeUnload = (form: HTMLFormElement) => {
  const isFormEmpty = () => {
    const formData = new FormData(form);
    let isEmpty = true;

    formData.forEach((value, name) => {
      if (isEmpty) {
        if (name === "file") {
          isEmpty = (<{ name: string }>value).name === "";
        } else {
          isEmpty = value === "";
        }
      }
    });

    return isEmpty;
  };
  window.onbeforeunload = function (event) {
    if (isFormEmpty()) return;

    event.preventDefault();
    event.returnValue = "";
  };
};
