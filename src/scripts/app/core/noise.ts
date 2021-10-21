import Grained from "@/scripts/_lib/Grained";

const options = {
  animate: true,
  patternWidth: 145,
  patternHeight: 118,
  grainOpacity: 0.04,
  grainDensity: 1,
  grainWidth: 1,
  grainHeight: 1,
};

export const addNoise = () => {
  const elms = [
    document.body,
    document.querySelector(".page-menu"),
    document.querySelector(".page-footer"),
    document.querySelector(".footer-redirect"),
    document.querySelector("main.project .review"),
    document.querySelector("main.page-about .founder"),
    document.querySelector("#dialog-form .dialog-overlay"),
  ];

  elms.forEach((elm) => {
    if (elm) {
      new Grained(elm, options);
    }
  });
};
