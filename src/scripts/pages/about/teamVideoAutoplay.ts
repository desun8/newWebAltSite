export const teamVideoAutoplay = () => {
  const videoElms = document.querySelectorAll<HTMLVideoElement>(
    ".team-card__video-container video"
  );

  videoElms.forEach((video) => {
    if (video) {
      const sources = video.querySelectorAll("source");
      sources.forEach((source) => {
        if (source) {
          source.src = `${source.src}#t=0.01`;
        }
      });
    }
  });
};
