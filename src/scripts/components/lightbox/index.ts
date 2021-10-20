// Lightbox
export const lightboxInit = () => {
  const lightboxElms = Array.from(
    document.querySelectorAll<HTMLElement>(".js-lightbox")
  );

  if (lightboxElms.length) {
    import("./lightbox").then(({ lightbox }) => {
      lightbox(lightboxElms);
    });
  }
};
