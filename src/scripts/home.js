import initRoot from "./root";
import HomeApp from "./app/homeApp";

import "@/styles/home.scss";
import "@/styles/components/subscribe-block.scss";
import APP from "@/scripts/app/APP";

initRoot();

const app = new HomeApp();
app.init();

if (APP.isDesktop) {
  import("./components/subscribe-banner/index");
} else {
  import("./components/subscribeBlock").then(({initSubscribeBlock}) => {
    initSubscribeBlock();
  });
}
