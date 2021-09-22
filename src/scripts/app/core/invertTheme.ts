import ScrollTrigger from "gsap/ScrollTrigger";

export const invertTheme = () => {
  const darkElms = Array.from(document.querySelectorAll(".js-dark-block"));
  const orangeElms = Array.from(document.querySelectorAll(".js-orange-block"));

  if (darkElms.length) {
    darkElms.forEach((elm) => {
      ScrollTrigger.create({
        trigger: elm,
        start: () => "top 50",
        end: () => "bottom 50",
        onToggle({ isActive }) {
          if (isActive) {
            document.body.classList.add("menu-btn-white");
            document.body.classList.add("header-feedback-white");
            document.body.classList.add("filter-white");
          } else {
            document.body.classList.remove("menu-btn-white");
            document.body.classList.remove("header-feedback-white");
            document.body.classList.remove("filter-white");
          }
        },
      });
    });
  }

  if (orangeElms.length) {
    const subscribeBanner = document.querySelector(".subscribe-banner");

    if (subscribeBanner) {
      orangeElms.forEach((elm) => {
        ScrollTrigger.create({
          trigger: elm,
          start: () => {
            const rect = subscribeBanner.getBoundingClientRect();
            return `top ${rect.bottom}`;
          },
          end: () => {
            const rect = subscribeBanner.getBoundingClientRect();
            return `bottom ${rect.top}`;
          },
          onToggle({ isActive }) {
            if (isActive) {
              document.body.classList.add("subscribe-banner-white");
            } else {
              document.body.classList.remove("subscribe-banner-white");
            }
          },
        });
      });
    }
  }
};
