import A11yDialog from "a11y-dialog";
import "@/styles/page-form/dialog.scss";

import APP from "@/scripts/app/APP";
import { disableScroll, enableScroll } from "@/scripts/helpers/scrollLock";
import { resizeObserver } from "@/scripts/utils/resizeObserver";

interface MyHTMLVideoElement extends HTMLVideoElement {
  webkitRequestFullscreen: any;
}

interface MyDocument extends Document {
  webkitFullscreenElement: any;
}

interface MyHTMLElement extends HTMLElement {
  webkitFullscreenElement: any;
  webkitRequestFullscreen: any;
}

type VideoSrc = string | undefined;

const setZIndex = (element: HTMLElement, value: string) => {
  element.style.zIndex = value;
};

class StyleIOSFix {
  static add(id: string) {
    const styleElement = document.createElement("style");
    styleElement.id = "video-ios-fix";
    styleElement.innerHTML = `#${id}:not(:-webkit-full-screen){display: none;}`;
    document.head.appendChild(styleElement);
  }

  static remove() {
    const styleElm = document.querySelector("style#video-ios-fix");

    if (styleElm) styleElm.remove();
  }
}

class VideoElement {
  elm: MyHTMLVideoElement;

  constructor(mp4: VideoSrc, webm: VideoSrc) {
    this.elm = this.create(mp4, webm);
  }

  private create(mp4: VideoSrc, webm: VideoSrc) {
    const video = document.createElement("video") as MyHTMLVideoElement;
    video.id = "video-review";
    video.controls = true;
    video.preload = "none";
    video.style.width = "100%";

    [webm, mp4].forEach((src) => {
      if (src) {
        const isWebm = src === webm;

        const source = document.createElement("source");
        source.src = src;
        source.type = isWebm ? "video/webm" : "video/mp4";

        video.appendChild(source);
      }
    });

    return video;
  }
}

class MobileVideoElement extends VideoElement {
  private isInit = false;

  constructor(mp4: VideoSrc, webm: VideoSrc) {
    super(mp4, webm);

    this.elm.style.position = "absolute";
  }

  private add() {
    document.body.appendChild(this.elm);
  }

  private remove() {
    this.elm.remove();
  }

  destroy() {
    if (this.isInit) {
      this.isInit = false;

      this.remove();
      StyleIOSFix.remove();
    }
  }

  init() {
    if (!this.isInit) {
      this.isInit = true;

      this.add();
      StyleIOSFix.add(this.elm.id);
    }
  }
}

class Fullscreen {
  private video: MobileVideoElement;

  constructor(mp4: VideoSrc, webm: VideoSrc) {
    this.video = new MobileVideoElement(mp4, webm);
    this.video.init();
    this.addEvents();
  }

  private handleFullscreenchange(e: Event) {
    if (
      document.fullscreenElement === null ||
      (document as MyDocument).webkitFullscreenElement === null
    ) {
      const ct = e.currentTarget as MyHTMLVideoElement;

      ct.pause();
      ct.src = "";
      ct.style.display = "none";
      setZIndex(ct, "");
    }
  }

  private addEvents() {
    this.video.elm.addEventListener(
      "fullscreenchange",
      this.handleFullscreenchange
    );
    this.video.elm.addEventListener(
      "webkitfullscreenchange",
      this.handleFullscreenchange
    );
  }

  private removeEvents() {
    this.video.elm.removeEventListener(
      "fullscreenchange",
      this.handleFullscreenchange
    );
    this.video.elm.removeEventListener(
      "webkitfullscreenchange",
      this.handleFullscreenchange
    );
  }

  show() {
    this.video.elm.style.display = "";
    this.video.elm.play();

    if (document.documentElement.requestFullscreen !== undefined) {
      this.video.elm.requestFullscreen();
      setZIndex(this.video.elm, "10");
    } else if (
      (document.documentElement as MyHTMLElement).webkitRequestFullscreen !==
      undefined
    ) {
      this.video.elm.webkitRequestFullscreen();
      setZIndex(this.video.elm, "10");
    }
  }

  destroy() {
    this.removeEvents();
    this.video.destroy();
  }
}

class Dialog {
  elm: HTMLElement;
  dialog: A11yDialog;
  private dialogContent: Element;
  private video: MyHTMLVideoElement;

  constructor(mp4: VideoSrc, webm: VideoSrc) {
    this.video = new VideoElement(mp4, webm).elm;
    this.elm = this.getTemplate();
    this.dialogContent = this.elm.querySelector(".dialog-content")!;

    this.dialog = new A11yDialog(this.elm);

    this.dialog.on("show", () => {
      const playPromise = this.video.play();

      if (playPromise !== undefined) {
        playPromise.then((_) => {
          this.video.pause();
        });
      }

      disableScroll(this.elm, APP.scrollbar);
    });
    this.dialog.on("hide", () => {
      this.video.pause();
      enableScroll(this.elm, APP.scrollbar);
    });

    this.addToDOM();
  }

  private getTemplate() {
    const div = document.createElement("div");
    div.id = "video-dialog";
    div.classList.add("dialog-container", "!z-100");
    div.setAttribute("aria-labelledby", "video-dialog-title");
    div.setAttribute("aria-hidden", "true");
    div.dataset.testid = "dialog";

    div.innerHTML = /*html*/ `
      <!-- 2. The dialog overlay -->
      <div class="dialog-overlay  bg-true-black bg-opacity-50" data-a11y-dialog-hide></div>
      <!-- 3. The actual dialog -->
      <div class="dialog-content  relative w-4/5 mx-auto" role="document">
        <!-- 5. The dialog title -->
        <h1 id="video-dialog-title" class="sr-only">Диалог просмотра видео отзыва.</h1>
        <!-- 6. Dialog content -->
  </div>
`;

    return div;
  }

  private addToDOM() {
    if (!document.getElementById(this.elm.id)) {
      this.dialogContent.appendChild(this.video);
      document.body.appendChild(this.elm);
    }
  }

  show() {
    this.dialog.show();
  }

  destroy() {
    this.dialog.destroy();
    this.elm.remove();
  }
}

export const reviewVideo = (btn: HTMLButtonElement) => {
  const videoSrc = { mp4: btn.dataset.mp4, webm: btn.dataset.webm };
  let isDesktop = APP.isDesktop;

  let fullscreen: Fullscreen | undefined;
  let dialog: Dialog | undefined;

  btn.addEventListener("click", () => {
    if (isDesktop) {
      if (!dialog) {
        dialog = new Dialog(videoSrc.mp4, videoSrc.webm);
      }

      dialog.show();
    } else {
      if (!fullscreen) {
        fullscreen = new Fullscreen(videoSrc.mp4, videoSrc.webm);
      }

      fullscreen.show();
    }
  });

  resizeObserver(document.documentElement, () => {
    if (isDesktop !== APP.isDesktop) {
      isDesktop = APP.isDesktop;

      if (fullscreen) {
        fullscreen.destroy();
        fullscreen = undefined;
      }

      if (dialog) {
        dialog.destroy();
        dialog = undefined;
      }
    }
  });
};
