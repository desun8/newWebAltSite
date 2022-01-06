import { gsap } from "gsap";
import Splitting from "splitting";

const split = (elm: HTMLElement) => {
  Splitting({ target: elm, by: "chars" });
};

const getChars = (elm: HTMLElement) => {
  const children = Array.from(elm.children) as HTMLElement[];
  const size = Math.floor(children.length * 0.3); // берем ~30% элементов (слова | пробелы)
  const elms = children.slice(-size);

  const chars: HTMLElement[] = [];

  elms.forEach((element) => {
    if (element.className === "whitespace") {
      element.style.opacity = "0";
      chars.push(element);
    } else {
      const children = Array.from(element.children) as HTMLElement[];
      children.forEach((char) => (char.style.opacity = "0"));
      chars.push(...children);
    }
  });

  return chars;
};

const animation = (elms: HTMLElement[]) => {
  gsap.to(elms, {
    alpha: 1,
    duration: 0.01,
    stagger: {
      each: 0.06,
    },
    delay: 0.5,
    ease: "none",
  });
};

const intersectionObserver = (
  elm: HTMLElement,
  chars: HTMLElement[],
  observer: IntersectionObserver | undefined
) => {
  const isVisible: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      const { isIntersecting } = entry;

      if (isIntersecting) {
        observer?.unobserve(elm);

        animation(chars);
      }
    });
  };

  return new IntersectionObserver(isVisible, { threshold: 0.5 });
};

export const typewriteAnimation = (elm: HTMLElement) => {
  let chars: HTMLElement[];
  let observer: IntersectionObserver | undefined;

  split(elm);

  chars = getChars(elm);
  observer = intersectionObserver(elm, chars, observer);
  observer.observe(elm);
};
