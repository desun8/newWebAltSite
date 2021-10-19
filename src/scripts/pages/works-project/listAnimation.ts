import { gsap } from "gsap";

export const listAnimation = () => {
  const listElms = document.querySelectorAll<HTMLOListElement>(".project-list");
  const line = document.querySelector(".goals__line");

  listElms.forEach((list) => {
    const listItems = list.querySelectorAll<HTMLLIElement>(
      ".project-list__item"
    );

    listItems.forEach((listItem, index) => {
      gsap.from(listItem, {
        scrollTrigger: {
          trigger: listItem,
          start: () => "top 75%",
          once: true,
        },

        y: 20,
        alpha: 0,

        onComplete() {
          if (line && index + 1 === listItems.length) {
            line.classList.add("is-active");
          }
        },
      });
    });
  });
};
