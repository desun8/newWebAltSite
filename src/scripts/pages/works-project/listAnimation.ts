import { gsap } from "gsap";

export const listAnimation = () => {
  const listElms = document.querySelectorAll<HTMLOListElement>(".project-list");

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
          if (index + 1 === listItems.length) {
            console.log("animation line");
            list.classList.add("is-completed");
          }
        },
      });
    });
  });
};
