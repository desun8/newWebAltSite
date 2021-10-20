export const wysiwygGalleryCarousel = () => {
  const elm = document.querySelector(
    ".wysiwyg-gallery-carousel .swiper"
  ) as HTMLElement;

  if (elm) {
    import("./swiperCarousel").then(({ swiperCarousel }) => {
      swiperCarousel(elm);
    });
  }
};
