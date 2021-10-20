export const wysiwygCurtainBlockAnimation = () => {
  const rootElm = document.querySelector(
    ".wysiwyg-curtain-block"
  ) as HTMLElement;

  if (rootElm) {
    const textElm = rootElm.querySelector(
      ".wysiwyg-curtain-block__text"
    ) as HTMLElement;
    const imgElms = Array.from(
      rootElm.querySelectorAll<HTMLImageElement>(".wysiwyg-curtain-block__img")
    );

    if (textElm && imgElms.length) {
      import("./curtainAnimation").then(({ curtainAnimation }) => {
        curtainAnimation(rootElm, textElm, imgElms);
      });
    }
  }
};
