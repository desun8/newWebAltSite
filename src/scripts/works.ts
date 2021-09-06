import initRoot from "./root";
import { initApp as initWorksCatalog } from "./pages/works/index.js";
import { initApp as initWorksDialog } from "./pages/works-dialog/index.js";
import APP from "./app/APP";
import "@/styles/works.scss";

function prepare() {
  // if (process.env.NODE_ENV === "development") {
  return import("../mocks/browser.js").then((module) => module.worker.start());
  // }

  // return Promise.resolve();
}

initRoot();
prepare().then(() => {
  initWorksCatalog();
  initWorksDialog();
});

if (APP.isDesktop) {
  import("./components/subscribe-banner/index");
}
