import Menu from "@/scripts/components/menu";
import { mediaQueryEvent } from "@/scripts/utils/mediaQueryEvent";
import APP from "../APP";

export const initMenu = () => {
  const menuElm = document.querySelector(".page-menu");
  const navElm = document.querySelector(".page-nav");
  const btnOpen = document.querySelector(".menu-btn");
  const btnClose = document.querySelector(".page-menu__close");
  const tickerElms = document.querySelectorAll(".page-menu .ticker");
  const config = {
    isDesktop: APP.isDesktop,
  };

  const menu = new Menu(menuElm, btnOpen, btnClose, navElm, config);

  menu.init();

  mediaQueryEvent(menu.mobile, menu.desktop, menu.update);
};

