import initRoot from "./root";
import "@/styles/contacts.scss";
import APP from "./app/APP";
import RedirectFooter from "./pages/home/redirectFooter.js";
import { mediaQueryEvent } from "./utils/mediaQueryEvent";
import TextRunner from "./components/textRunner";
import { addMap } from "./pages/contacts/addMap";
import { siteTimer } from "./pages/contacts/siteTimer";

initRoot();

const initFooterAnimation = () => {
  const elm = document.querySelector(".footer-redirect");
  if (elm) {
    const redirectFooter = new RedirectFooter(elm);

    mediaQueryEvent(
      () => redirectFooter.initMobile(),
      () => redirectFooter.initDesktop()
    );
  }
};

const initTicker = () => {
  const tickerElms = document.querySelectorAll(".page-contacts .ticker");

  if (tickerElms.length) {
    tickerElms.forEach((elm) => {
      new TextRunner(elm);
    });
  }
};

addMap();
siteTimer();
initFooterAnimation();
initTicker();

if (APP.isDesktop) {
  import("./pages/contacts/pinnedContacts").then(({ pinnedContacts }) => {
    pinnedContacts();
  });
}
