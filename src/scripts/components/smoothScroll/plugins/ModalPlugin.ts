import SmoothScrollbar, { ScrollbarPlugin } from "smooth-scrollbar";
import { Data2d } from "smooth-scrollbar/interfaces";

export class ModalPlugin extends ScrollbarPlugin {
  static pluginName = "modal";

  static defaultOptions = {
    open: false,
  };

  transformDelta(delta: Data2d) {
    return this.options.open ? { x: 0, y: 0 } : delta;
  }
}

export const disableScroll = (scrollBarInstance: SmoothScrollbar) => {
  scrollBarInstance.updatePluginOptions("modal", { open: true });
};

export const enableScroll = (scrollBarInstance: SmoothScrollbar) => {
  scrollBarInstance.updatePluginOptions("modal", { open: false });
};
