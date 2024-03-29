import ButtonCtrl from "./buttonCtrl";
import submitForm from "./submitForm";
import "@/styles/components/subscribe-banner.scss";

const subscribeBanner = document.querySelector(".subscribe-banner");

if (subscribeBanner) {
  let isActive = false;

  const btnElm = subscribeBanner.querySelector(
    ".subscribe-banner-btn"
  ) as HTMLButtonElement;
  const block = subscribeBanner.querySelector(
    ".subscribe-banner-block"
  ) as HTMLElement;
  const formElm = block.querySelector("form")!;

  // очищаем от инлайн стиля
  block.style.cssText = "";

  new ButtonCtrl(btnElm);

  const toggleActive = (shouldShow: boolean) => {
    if (shouldShow) {
      subscribeBanner.classList.add("is-active");
      isActive = true;
    } else {
      subscribeBanner.classList.remove("is-active");
      isActive = false;
    }
  };

  btnElm.onmouseenter = () => {
    toggleActive(true);
  };

  document.addEventListener("click", (e) => {
    if (!isActive) {
      return;
    }
    const target = e.target as HTMLElement;
    const isOutside = !target.closest(".subscribe-banner");

    if (isOutside) {
      toggleActive(false);
    }
  });

  window.addEventListener(
    "wheel",
    () => {
      toggleActive(false);
    },
    { passive: true }
  );

  submitForm(formElm);
}
