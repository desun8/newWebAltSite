import initRoot from "./root";
import "../styles/form.scss";
import APP from "./app/APP";
import { loadRecaptcha } from "./utils/loadRecaptcha";
import { alertBeforeUnload } from "./alertBeforeUnload";
import { initForm } from "./pages/form/initForm";

initRoot();

const form = document.querySelector<HTMLFormElement>(".form")!;

initForm(form, APP.scrollbar);

if (process.env.NODE_ENV !== "development") {
  alertBeforeUnload(form);
}

if (APP.isDesktop) {
  import("./components/subscribe-banner/index");
} else {
  import("./components/subscribeBlock").then(({ initSubscribeBlock }) => {
    initSubscribeBlock();
  });
}

loadRecaptcha();
