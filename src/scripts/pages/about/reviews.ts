import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";

Swiper.use([Navigation, Pagination, Autoplay]);

const isMdScreen = window.matchMedia("(min-width: 48em)").matches;

export const reviews = () => {
  const rootElm = document.querySelector(".reviews");

  if (rootElm) {
    const swiperElm = rootElm.querySelector<HTMLElement>(".swiper");

    if (swiperElm) {
      // Сворачиваем текст, после смены слайда (только для телефонов)
      const shrinkText = (elm: Element) => {
        const textElms = elm.querySelectorAll<HTMLElement>(
          ".review-item__text-container"
        );

        if (textElms.length) {
          textElms.forEach((text) => text.classList.remove("is-active"));
        }
      };

      new Swiper(swiperElm, {
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
        loop: true,
        speed: 600,
        spaceBetween: 100,

        pagination: {
          el: ".reviews-carousel.swiper .swiper-pagination",
          clickable: true,
          type: "bullets",
        },

        on: {
          slideChange: isMdScreen
            ? undefined
            : function (swiper) {
                shrinkText(swiper.$el[0]);
              },
        },

        breakpoints: {
          768: {
            pagination: {
              el: ".reviews-carousel .swiper-pagination",
              clickable: true,
              type: "fraction",
              renderFraction(currentClass, totalClass) {
                return `<span class="${currentClass}"></span> \\ <span class="${totalClass}"></span>`;
              },
            },

            navigation: {
              nextEl: ".reviews-carousel .swiper-button-next",
              prevEl: ".reviews-carousel .swiper-button-prev",
            },
          },
        },
      });
    }

    if (!isMdScreen) {
      // Раскрытие всего текста по нажатию на кнопку
      const reviewItems = rootElm.querySelectorAll(".review-item");
      if (reviewItems.length) {
        reviewItems.forEach((item) => {
          const text = item.querySelector(".review-item__text-container");
          const btnMore = item.querySelector<HTMLButtonElement>(
            ".review-item__show-text"
          );

          if (text && btnMore) {
            btnMore.onclick = () => text.classList.add("is-active");
          }
        });
      }
    }
  }
};
