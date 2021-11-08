const COOKIE_NAME = "gdpr_accept";

const addCookie = () => {
  const getExpiresDate = () => {
    const date = new Date();
    const validDay = 30;
    const dateExpires = new Date(date.setDate(date.getDate() + validDay));

    return dateExpires.toUTCString();
  };

  const name = COOKIE_NAME;

  document.cookie = `${name} ;expires=${getExpiresDate()}`;
};

export const cookieGdrp = () => {
  const banner = document.querySelector(".gdpr-cookie");

  if (banner) {
    const btnAccept = document.querySelector(
      ".gdpr-cookie__accept"
    ) as HTMLButtonElement;

    const isAccept = document.cookie
      .split(";")
      .some((raw) => raw === COOKIE_NAME);

    const toggleBannerVisibility = (a: "show" | "hide") => {
      switch (a) {
        case "show":
          banner.classList.add("is-active");
          setTimeout(() => {
            banner.classList.add("is-show");
          }, 100);
          break;
        case "hide":
          banner.classList.remove("is-show");
          setTimeout(() => {
            banner.classList.remove("is-active");
          }, 500); // transition-duration + 100ms
          break;
      }
    };

    if (!isAccept) {
      toggleBannerVisibility("show");

      btnAccept.onclick = () => {
        if (!isAccept) {
          addCookie();
          toggleBannerVisibility("hide");
        }
      };
    }
  }
};
