import { RECAPTCHA_KEY } from "../app/core/api";

export const loadRecaptcha = () => {
  if (window.grecaptcha === undefined) {
    const siteKey = RECAPTCHA_KEY;
    const url = "https://www.google.com/recaptcha/api.js?render=";

    const script = document.createElement("script");
    script.src = `${url}${siteKey}`;
    document.head.appendChild(script);
  }
};
