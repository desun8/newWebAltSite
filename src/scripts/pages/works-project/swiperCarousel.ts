import APP from "@/scripts/app/APP";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";

Swiper.use([Navigation, Pagination]);

export const swiperCarousel = (elm?: HTMLElement) => {
  if (!elm) {
    elm = document.querySelector(".carousel .swiper") as HTMLElement;
  }

  if (elm) {
    new Swiper(elm, {
      loop: true,
      pagination: {
        el: ".carousel .swiper-pagination",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".carousel .swiper-button-next",
        prevEl: ".carousel .swiper-button-prev",
      },

      on: {
        init: () => {
          if (APP.isDesktop && !APP.isTouchScreen) {
            import("./swiperCarouselNavigationHover").then(
              ({ swiperCarouselNavigationHover }) => {
                swiperCarouselNavigationHover();
              }
            );
          }
        },
      },
    });
  }
};
