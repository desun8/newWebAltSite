import initRoot from "./root";
import { initApp } from "./pages/works/index.js";
import APP from "./app/APP";
import "@/styles/works.scss";

function prepare() {
  // if (process.env.NODE_ENV === "development") {
  return import("../mocks/browser.js").then((module) => module.worker.start());
  // }

  // return Promise.resolve();
}

initRoot();
prepare().then(() => initApp());

if (APP.isDesktop) {
  import("./components/subscribe-banner/index");
}
