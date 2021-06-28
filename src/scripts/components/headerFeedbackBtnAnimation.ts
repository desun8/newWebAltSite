export default () => {
  const btn = document.querySelector(".header-feedback")!;
  const btnBg = btn.querySelector(".header-feedback__bg")!;

  btnBg.style.transform = "translate(100%, -50%)";

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const {isIntersecting} = entry;

        if (isIntersecting) {
          btnBg.style.transform = "translate(0, -50%)";
          observer.disconnect();
        }
      });
    },
    {rootMargin: "0px", threshold: [0.1, 0.5, 1]},
  );

  observer.observe(btn);
}
