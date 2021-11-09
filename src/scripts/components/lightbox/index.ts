// Lightbox
export const lightboxInit = () => {
  const lightboxWrapperElms = Array.from(
    document.querySelectorAll<HTMLElement>(".js-lightbox")
  );

  let lightboxImgElms = Array.from(
    document.querySelectorAll<HTMLElement>(".wysiwyg img")
  );

  lightboxImgElms = lightboxImgElms.filter(
    (img) => !img.parentElement?.classList.contains("js-lightbox")
  );

  const lightboxElms = [...lightboxWrapperElms, ...lightboxImgElms];

  if (lightboxElms) {
    import("./lightbox").then(({ lightbox }) => {
      lightbox(lightboxElms);
    });
  }
};
