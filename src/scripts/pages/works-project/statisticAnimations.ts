import { gsap } from "gsap";

export const statisticAnimations = () => {
  // Анимация заголовка
  (() => {
    const headerElms = document.querySelectorAll(".statistic__header");

    if (headerElms.length) {
      headerElms.forEach((elm) => {
        const backgroundColor = elm.parentElement?.classList.contains(
          "statistic--after"
        )
          ? "#ff5000"
          : "#262626";

        gsap.to(elm, {
          scrollTrigger: {
            trigger: elm,
            start: () => "top 60%",
            once: true,
          },
          duration: 0.3,
          color: "#fff",
          backgroundColor,
        });
      });
    }
  })();

  // Анимация цифр
  (() => {
    const numberElms = document.querySelectorAll(
      ".statistic-list__describe .js-counter"
    );

    if (numberElms.length) {
      const getFixedSize = (floatNumber: number) => {
        const str = `${floatNumber}`;
        const length = str.length - 1;
        const dotIndex = str.indexOf(".");

        return dotIndex !== -1 ? length - dotIndex : 0;
      };

      numberElms.forEach((elm) => {
        const to = parseFloat(elm.innerHTML);

        if (!isNaN(to)) {
          const number = { val: 0 };
          const fixedSize = getFixedSize(to);

          gsap.to(number, {
            scrollTrigger: {
              trigger: elm,
              once: true,
            },
            val: to,
            duration: 1,
            onUpdate() {
              const value = number.val.toFixed(fixedSize);
              elm.innerHTML = `${value}`;
            },
          });
        }
      });
    }
  })();
};
