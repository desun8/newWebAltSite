// import barba from "@barba/core";
import gsap from "gsap";

export const pageTransitions = () => {
  const body = document.querySelector("#scroll-container");
  const preloader = document.querySelector(".preloader");
  let linkElms = Array.from(document.querySelectorAll("a"));
  linkElms = linkElms.filter((link) => {
    const href = link.getAttribute("href")!;

    const rel = link.rel;

    if (
      href.charAt(0) === "#" ||
      href.search("mailto:") !== -1 ||
      href.search("tel:") !== -1 ||
      rel
    ) {
      return false;
    }

    return true;
  });

  gsap.timeline().to(preloader, { y: "100%", delay: 1 }).from(
    body,
    {
      y: "10%",
      alpha: 0,
    },
    "-=0.1"
  );

  const navigate = (href: string) => {
    window.location.replace(href);
  };

  linkElms.forEach((link) => {
    if (link) {
      link.onclick = (event) => {
        event.preventDefault();

        gsap.set(preloader, { y: "-100%" });

        gsap
          .timeline()
          .to(preloader, { y: 0 }, "0")
          .to(
            body,
            {
              y: "-10%",
              alpha: 0,
              onComplete() {
                navigate(link.href);
              },
            },
            "0"
          );
      };
    }
  });

  window.addEventListener("popstate", () => {
    gsap.set(preloader, { y: "-100%" });
  });
};
