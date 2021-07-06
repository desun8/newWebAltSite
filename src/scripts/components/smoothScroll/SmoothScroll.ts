import Scrollbar from "smooth-scrollbar";
import { ModalPlugin } from "./plugins/ModalPlugin";
import { AnchorPlugin } from "./plugins/AnchorPlugin";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import APP from "@/scripts/app/APP";

gsap.registerPlugin(ScrollTrigger);

class SmoothScroll {
  private smoothScrollInstance?: Scrollbar;
  private options = {
    damping: 0.1,
    delegateTo: document,
    alwaysShowTracks: APP.isDesktop,
  };

  constructor(private element: HTMLElement | null) {}

  private addPlugins() {
    Scrollbar.use(ModalPlugin, AnchorPlugin);
  }

  private addStyles() {
    document.body.style.overflow = "hidden";
    this.element!.style.height = "100vh";
    const scrollContent = this.element!.querySelector(
      ".scroll-content"
    ) as HTMLElement;

    if (scrollContent) {
      scrollContent.style.willChange = "transform";
    }
  }

  private addToGlobal() {
    APP.scrollbar = this.smoothScrollInstance;
  }

  private setupScrollTrigger() {
    const smoothScrollInstance = this.smoothScrollInstance!;

    ScrollTrigger.scrollerProxy(this.element!, {
      scrollTop(value) {
        if (arguments.length) {
          if (typeof value === "number") {
            smoothScrollInstance.scrollTop = value;
          }
        }

        return smoothScrollInstance.scrollTop;
      },
    });

    smoothScrollInstance.addListener(ScrollTrigger.update);

    ScrollTrigger.defaults({ scroller: this.element! });
  }

  private setup() {
    this.addStyles();
    this.addToGlobal();
    this.setupScrollTrigger();
  }

  getInstance() {
    return this.smoothScrollInstance;
  }

  destroy() {
    if (this.smoothScrollInstance) {
      this.smoothScrollInstance.destroy();
    }
  }

  init() {
    if (this.element) {
      if (!APP.isTouchScreen) {
        this.addPlugins();
        this.smoothScrollInstance = Scrollbar.init(this.element, this.options);

        this.setup();
      }
    } else {
      console.warn("Не удалось инициализировать плавный скролл.");
    }
  }
}

export default SmoothScroll;
