import "@/scripts/home.js";

if (process.env.NODE_ENV === "development") {
  import("./mocks/browser.js")
    .then((module) => {
      module.worker.start();
    });
}
