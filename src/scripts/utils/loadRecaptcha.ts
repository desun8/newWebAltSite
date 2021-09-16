import { RECAPTCHA_KEY } from "../app/core/api";

export const loadRecaptcha = () => {
  if (window.grecaptcha === undefined) {
    const siteKey = RECAPTCHA_KEY;
    const url = "https://www.google.com/recaptcha/api.js?render=";
    console.log(
      "🚀 ~ file: loadRecaptcha.ts ~ line 6 ~ loadRecaptcha ~ url",
      url
    );

    const script = document.createElement("script");
    script.src = `${url}${siteKey}`;
    document.head.appendChild(script);
  }
};
