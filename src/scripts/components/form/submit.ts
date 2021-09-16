interface ResponseJson {
  message: string;
  status: string;
}

export const submit = (formElm: HTMLFormElement) => {
  const KEY = window.RECAPTCHA_KEY;
  console.log("🚀 ~ file: submit.ts ~ line 8 ~ submit ~ KEY", KEY);
  const url = formElm.action;
  const formData = new FormData(formElm);
  const params = {
    method: "POST",
    body: formData,
  };

  const handleErrors = (response: Response) => {
    console.log(
      "🚀 ~ file: submit.ts ~ line 11 ~ handleErrors ~ response",
      response
    );

    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response.json();
  };

  // TODO: можно удалить. Либо закомментировать и оставить для тестов
  const handleSuccess = (response: ResponseJson) => {
    console.log(
      "🚀 ~ file: submit.ts ~ line 30 ~ handleSuccess ~ response",
      response
    );
    if (response.status === "ok") {
      console.log("форма отправилась");
    } else {
      throw Error(response.message);
    }

    console.log(response);
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
