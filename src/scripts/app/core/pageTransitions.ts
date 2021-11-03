import gsap from "gsap";

const preloader = document.querySelector(".page-preloader");
const navigate = (href: string) => {
  window.location.replace(href);
};

const hide = () => {
  gsap.to(preloader, { y: "120%", delay: 2 });
};
const show = (href: string) => {
  gsap.set(preloader, { y: "120%" });

  gsap.to(preloader, {
    y: 0,
    onComplete() {
      setTimeout(() => {
        navigate(href);
      }, 1000);
    },
  });
};

hide();

export const pageTransitions = () => {
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

  linkElms.forEach((link) => {
    if (link) {
      link.onclick = (event) => {
        event.preventDefault();
        show(link.href);
      };
    }
  });
};
