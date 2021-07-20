import initRoot from "./root";
import "../styles/form.scss";
import APP from "./app/APP";

initRoot();

if (APP.isDesktop) {
  import("./components/subscribe-banner/index");
} else {
  import("./components/subscribeBlock");
}