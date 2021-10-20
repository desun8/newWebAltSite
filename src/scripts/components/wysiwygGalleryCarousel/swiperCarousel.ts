import APP from "@/scripts/app/APP";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";

Swiper.use([Navigation, Pagination]);

export const swiperCarousel = (elm?: HTMLElement) => {
  if (!elm) {
    elm = document.querySelector(
      ".wysiwyg-gallery-carousel .swiper"
    ) as HTMLElement;
  }

  if (elm) {
    new Swiper(elm, {
      loop: true,
      pagination: {
        el: ".wysiwyg-gallery-carousel .swiper-pagination",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".wysiwyg-gallery-carousel .swiper-button-next",
        prevEl: ".wysiwyg-gallery-carousel .swiper-button-prev",
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
