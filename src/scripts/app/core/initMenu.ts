import Menu from "@/scripts/components/menu";
import { mediaQueryEvent } from "@/scripts/utils/mediaQueryEvent";
import { resizeObserver } from "@/scripts/utils/resizeObserver";
import APP from "../APP";
import TextRunner from "@/scripts/components/textRunner";

export const initMenu = () => {
  const menuElm = document.querySelector(".page-menu")!;
  const navElm = document.querySelector(".page-nav");
  const btnOpen = document.querySelector(".page-header .menu-btn");
  const btnFixedOpen = document.querySelector(".page-header-fixed .menu-btn");
  const btnClose = document.querySelector(".page-menu__close");

  const tickerElms = document.querySelectorAll(".page-menu .ticker");

  const config = {
    isDesktop: APP.isDesktop,
  };

  const menu = new Menu(
    menuElm,
    [btnOpen, btnFixedOpen],
    btnClose,
    navElm,
    config
  );

  menu.init();

  if (tickerElms.length) {
    tickerElms.forEach((elm) => {
      new TextRunner(elm);
    });
  }

  mediaQueryEvent(menu.mobile, menu.desktop);
  resizeObserver(menuElm, menu.update);
};
