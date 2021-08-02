import initRoot from "./root";
import { initApp } from "./pages/blog/vue";
import "@/styles/blog.scss";

function prepare() {
  if (process.env.NODE_ENV === "development") {
    return import("../mocks/browser.js")
      .then((module) => module.worker.start());
  }

  return Promise.resolve();
}

initRoot();
prepare().then(() => initApp());
