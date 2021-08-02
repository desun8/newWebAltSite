import { throttle } from "lodash";
import initRoot from "./root";
import "../styles/form.scss";
import APP from "./app/APP";
import { initCheckbox } from "./pages/form/checkbox";
import { initContactInputs } from "./pages/form/contactInputs";
import { initInputFile } from "./pages/form/inputFile";
import { loadRecaptcha } from "./utils/loadRecaptcha";
import { handleSubmit } from "./pages/form/submit";
import { alertBeforeUnload } from "./alertBeforeUnload";

initRoot();

const form = document.querySelector<HTMLFormElement>(".form")!;
const typesChekboxContainer = form.querySelector<HTMLElement>("#types-data")!;
const contactInputContainer =
  form.querySelector<HTMLElement>("#contacts-data")!;

if (process.env.NODE_ENV !== "development") {
  alertBeforeUnload(form);
}

initCheckbox(typesChekboxContainer);
initContactInputs(contactInputContainer);
initInputFile(form.querySelector(".form__input-file")!);

const onSubmit = throttle(handleSubmit, 500);
form.onsubmit = (event) => {
  event.preventDefault();
  onSubmit(event);
};

if (APP.isDesktop) {
  import("./components/subscribe-banner/index");
  import("./pages/form/addScrollAnimation").then(({ addScrollAnimation }) => {
    addScrollAnimation();
  });
} else {
  import("./components/subscribeBlock").then(({initSubscribeBlock}) => {
    initSubscribeBlock();
  });
}

loadRecaptcha();
