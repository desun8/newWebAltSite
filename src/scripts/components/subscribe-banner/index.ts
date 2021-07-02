import ButtonCtrl from "./buttonCtrl";
import submitForm from "./submitForm";
import "@/styles/components/subscribe-banner.css";

const subscribeBanner = document.querySelector(".subscribe-banner");

if (subscribeBanner) {
  let isActive = false;

  const btnElm = subscribeBanner.querySelector(".subscribe-banner-btn") as HTMLButtonElement;
  const block = subscribeBanner.querySelector(".subscribe-banner-block")!;
  const formElm = block.querySelector("form")!;

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

  window.addEventListener("wheel", () => {
      toggleActive(false);
    }, {passive: true},
  );

  submitForm(formElm);

}

