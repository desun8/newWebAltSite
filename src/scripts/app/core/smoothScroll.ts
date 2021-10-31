import SmoothScroll from "@/scripts/components/smoothScroll/SmoothScroll";

export type Status = {
  offset: { x: number; y: number };
  limit: { x: number; y: number };
};

export const initSmoothScroll = () => {
  const scrollContainer = document.querySelector(
    "#scroll-container"
  ) as HTMLElement;
  const smoothScroll = new SmoothScroll(scrollContainer, true);

  smoothScroll.init();

  const scrollInstance = smoothScroll.getInstance();

  if (scrollInstance) {
    const pageHeader = document.querySelector(
      ".page-header:not(.page-header--preloader)"
    ) as HTMLHeadingElement;
    const btnToTop = document.querySelector("#go-to-top") as HTMLAnchorElement;
    const isBlogPage = document.querySelector(".page-blog");
    let blogAnimation: (a: number) => void;

    if (isBlogPage) {
      (async () => {
        const module = await import(
          "../../pages/blog/blogOnScrollAnimation.js"
        );
        blogAnimation = await module.default;
      })();
    }

    scrollInstance.addListener((status: Status) => {
      const posY = status.offset.y;

      // позиционирование кнопки "меню"
      if (posY > 10) {
        pageHeader.classList.add("is-fixed");
      } else {
        pageHeader.classList.remove("is-fixed");
      }

      // появление/скрытие кнопки "вверх"
      if (btnToTop) {
        if (posY > 200) {
          btnToTop.classList.add("is-show");
        } else {
          btnToTop.classList.remove("is-show");
        }
      }

      // анимация на странице "БЛОГ"
      if (isBlogPage && blogAnimation) {
        blogAnimation(posY);
      }
    });
  }
};
