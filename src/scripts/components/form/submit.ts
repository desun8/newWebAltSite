import { RECAPTCHA_KEY } from "@/scripts/app/core/api";

interface ResponseJson {
  message: string;
  status: "ok" | "error";
}

export const submit = (formElm: HTMLFormElement) => {
  const KEY = RECAPTCHA_KEY;
  const url = formElm.action;
  const formData = new FormData(formElm);
  const params = {
    method: "POST",
    body: formData,
  };

  const handleErrors = (response: Response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response.json();
  };

  // TODO: можно удалить. Либо закомментировать и оставить для тестов
  const handleSuccess = (response: ResponseJson) => {
    if (response.status.toLowerCase() !== "ok") {
      throw Error(response.message);
    }
  };

  return new Promise(function (resolve, _) {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(KEY, { action: "form" })
        .then((token: string) => {
          // добавляем в отправляемые данные токен рекаптчи
          formData.append("recaptcha_response", token);

          return fetch(url, params)
            .then(handleErrors)
            .then(handleSuccess)
            .catch((error) => console.error("Форма не отправилась", error));
        })
        .then(() => {
          resolve("success");
        });
    });
  });
};
