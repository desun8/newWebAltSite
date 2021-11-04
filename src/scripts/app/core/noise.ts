import getCssProp from "@/scripts/utils/getCssProp";

export const addNoise = () => {
  const elms = [
    document.body,
    document.querySelector<HTMLElement>(".page-menu"),
    document.querySelector<HTMLElement>(".page-footer"),
    document.querySelector<HTMLElement>(".footer-redirect"),
    ...Array.from(document.querySelectorAll<HTMLElement>(".js-noise")),
  ];

  elms.forEach((elm) => {
    if (elm) {
      if (getCssProp("position", elm) === "static") {
        elm.style.position = "relative";
      }

      elm.classList.add("js-bg-noise");
    }
  });
};
