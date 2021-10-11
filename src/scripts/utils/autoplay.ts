const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const { target, isIntersecting } = entry;

    if (isIntersecting) {
      (target as HTMLVideoElement).play();
    } else {
      (target as HTMLVideoElement).pause();
    }
  });
});

export const autoplay = (videoElm: HTMLVideoElement) => {
  observer.observe(videoElm);
};
