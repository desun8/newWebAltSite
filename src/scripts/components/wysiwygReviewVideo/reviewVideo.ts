import A11yDialog from "a11y-dialog";
import "@/styles/page-form/dialog.scss";

import APP from "@/scripts/app/APP";
import { disableScroll, enableScroll } from "@/scripts/helpers/scrollLock";
import { resizeObserver } from "@/scripts/utils/resizeObserver";
import { autobind } from "@/scripts/decorators/autobind";

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

type VideoElm = MyHTMLVideoElement | HTMLIFrameElement;

type VideoSrc = string | undefined;

const isVideoTag = (elm: HTMLElement) => elm.tagName.toLowerCase() === "video";

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
  type: "youtube" | "video";
  elm: VideoElm;

  constructor(mp4: VideoSrc, webm: VideoSrc, youtube: VideoSrc) {
    this.type = youtube ? "youtube" : "video";
    this.elm = youtube
      ? this.createYoutube(youtube)
      : this.createVideo(mp4, webm);
  }

  private createVideo(mp4: VideoSrc, webm: VideoSrc) {
    const video = document.createElement("video") as MyHTMLVideoElement;
    video.id = "video-review";
    video.controls = true;
    video.preload = "none";

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

  private createYoutube(youtube: string) {
    const iframe = document.createElement("iframe") as HTMLIFrameElement;
    iframe.id = "youtube-video-review";
    iframe.src = youtube;
    iframe.style.cssText = `
      position: absolute;
      top: 0; 
      left: 0;
      width: 100%;
      height: 100%;
    `;
    iframe.title = "YouTube video player";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope";
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "");

    return iframe;
  }
}

class MobileVideoElement extends VideoElement {
  private isInit = false;

  constructor(mp4: VideoSrc, webm: VideoSrc, youtube: VideoSrc) {
    super(mp4, webm, youtube);

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
  private src: string = "";

  constructor(mp4: VideoSrc, webm: VideoSrc, youtube: VideoSrc) {
    this.video = new MobileVideoElement(mp4, webm, youtube);
    this.video.init();
    this.addEvents();
  }

  @autobind
  private handleFullscreenchange() {
    if (
      document.fullscreenElement === null ||
      (document as MyDocument).webkitFullscreenElement === null
    ) {
      const elm = this.video.elm;

      if (isVideoTag(elm)) {
        (elm as MyHTMLVideoElement).pause();
      } else {
        // сохраняем iframe src, если он пустой
        this.src = !this.src ? elm.src : this.src;
        elm.src = "";
      }

      elm.style.display = "none";
      setZIndex(elm, "");
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

    if (isVideoTag(this.video.elm)) {
      (this.video.elm as MyHTMLVideoElement).play();
    } else {
      if (this.src) {
        this.video.elm.src = this.src;
      }
    }

    if (document.documentElement.requestFullscreen !== undefined) {
      this.video.elm.requestFullscreen();
      setZIndex(this.video.elm, "10");
    } else if (
      (document.documentElement as MyHTMLElement).webkitRequestFullscreen !==
      undefined
    ) {
      (this.video.elm as MyHTMLVideoElement).webkitRequestFullscreen();
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
  private video: VideoElm;
  private videoInstance: VideoElement;

  constructor(mp4: VideoSrc, webm: VideoSrc, youtube: VideoSrc) {
    this.videoInstance = new VideoElement(mp4, webm, youtube);
    this.video = this.videoInstance.elm;
    this.elm = this.getTemplate(youtube || mp4 || "");
    this.dialogContent = this.elm.querySelector(".dialog-content-wrapper")!;

    this.dialog = new A11yDialog(this.elm);

    this.dialog.on("show", () => {
      if (isVideoTag(this.video)) {
        const playPromise = (this.video as MyHTMLVideoElement).play();

        if (playPromise !== undefined) {
          playPromise.then((_) => {
            (this.video as MyHTMLVideoElement).pause();
          });
        }
      }

      disableScroll(this.elm, APP.scrollbar);
    });
    this.dialog.on("hide", () => {
      if (isVideoTag(this.video)) {
        (this.video as MyHTMLVideoElement).pause();
      } else if (this.videoInstance.type === "youtube") {
        // Останавливаем воспроизведения youtube видео
        // путем изменения src ifram'а
        this.video.src = this.video.src;
      }

      enableScroll(this.elm, APP.scrollbar);
    });

    this.addToDOM();
  }

  private getTemplate(id: string) {
    id = id.slice(id.lastIndexOf("/"));

    const div = document.createElement("div");
    div.id = `video-dialog-${id}`;
    div.classList.add("dialog-container", "!z-100");
    div.setAttribute("aria-labelledby", "video-dialog-title");
    div.setAttribute("aria-hidden", "true");
    div.dataset.testid = "dialog";

    div.innerHTML = /*html*/ `
      <!-- 2. The dialog overlay -->
      <div class="dialog-overlay  bg-true-black bg-opacity-50" data-a11y-dialog-hide></div>
      <!-- 3. The actual dialog -->
      <div class="dialog-content  relative w-4/5 mx-auto grid place-items-center" role="document">
        <!-- 5. The dialog title -->
        <h1 id="video-dialog-title" class="sr-only">Диалог просмотра видео отзыва.</h1>
        <!-- 6. Dialog content -->
        <div class="dialog-content-wrapper" style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%; overflow: hidden;"></div>
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
  const videoSrc = {
    mp4: btn.dataset.mp4,
    webm: btn.dataset.webm,
    youtube: btn.dataset.youtube,
  };

  let isDesktop = APP.isDesktop;

  let fullscreen: Fullscreen | undefined;
  let dialog: Dialog | undefined;

  btn.addEventListener("click", () => {
    if (isDesktop) {
      if (!dialog) {
        dialog = new Dialog(videoSrc.mp4, videoSrc.webm, videoSrc.youtube);
      }

      dialog.show();
    } else {
      if (!fullscreen) {
        fullscreen = new Fullscreen(
          videoSrc.mp4,
          videoSrc.webm,
          videoSrc.youtube
        );
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
