export const wysiwygReviewVideo = () => {
  const btns = document.querySelectorAll<HTMLButtonElement>(".btn-play");

  if (btns.length) {
    import("./reviewVideo").then(({ reviewVideo }) => {
      btns.forEach((btn) => {
        reviewVideo(btn);
      });
    });
  }
};
