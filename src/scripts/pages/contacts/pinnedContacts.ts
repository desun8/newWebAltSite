import APP from "@/scripts/app/APP";
import { mediaQueryEvent } from "@/scripts/utils/mediaQueryEvent";
import ScrollTrigger from "gsap/ScrollTrigger";

export const pinnedContacts = () => {
  if (!APP.isDesktop || window.screen.height > 1200) {
    return;
  }

  const getStart = (elm: Element): string => {
    const viewportPos = elm.getBoundingClientRect().top;
    return `top ${viewportPos}`;
  };

  const breadcrumbsElm = document.querySelector(".page-breadcrumbs")!;
  const contactsElm = document.querySelector(".contacts")!;

  const breadcrumbsTrigger = ScrollTrigger.create({
    trigger: breadcrumbsElm,
    start: () => getStart(breadcrumbsElm),
    end: "top -100%",
    pin: true,
    pinSpacing: false,
  });

  const contactsTrigger = ScrollTrigger.create({
    trigger: contactsElm,
    start: () => getStart(contactsElm),
    pin: true,
    pinSpacing: false,
  });

  mediaQueryEvent(
    () => {
      breadcrumbsTrigger.disable();
      contactsTrigger.disable();
    },
    () => {
      breadcrumbsTrigger.enable();
      contactsTrigger.enable();
    }
  );
};
