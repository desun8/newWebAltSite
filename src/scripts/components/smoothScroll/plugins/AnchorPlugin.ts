import { ScrollbarPlugin } from "smooth-scrollbar";

export class AnchorPlugin extends ScrollbarPlugin {
  static pluginName = "anchor";

  onHashChange = () => {
    this.handleHash(location.hash);
  };

  onClick = (event: Event) => {
    const target = event.target as HTMLElement;

    if (target.tagName !== "A") {
      return;
    }

    const hash = target.getAttribute("href");

    if (!hash || hash.charAt(0) !== "#") {
      return;
    }

    this.handleHash(hash);
  };

  handleHash = (hash: string) => {
    if (!hash) {
      return;
    }

    if (hash === "#top") {
      this.scrollbar.setMomentum(0, -this.scrollbar.scrollTop);
    } else {
      this.scrollbar.scrollIntoView(document.querySelector(hash)!, {
        offsetTop: -this.scrollbar.containerEl.scrollTop,
      });
    }
  };

  onInit() {
    this.handleHash(location.hash);

    window.addEventListener("hashchange", this.onHashChange);
    document.body.addEventListener("click", this.onClick);
  }

  onDestory() {
    window.removeEventListener("hashchange", this.onHashChange);
    document.body.removeEventListener("click", this.onClick);
  }
}
