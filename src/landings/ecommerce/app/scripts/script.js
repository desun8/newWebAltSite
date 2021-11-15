import "imask/dist/imask.js";
import "just-validate/dist/js/just-validate.js";
import Swiper, {Navigation, Pagination} from "swiper";
import "swiper/swiper-bundle.css";

Swiper.use([Navigation, Pagination]);


function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const wrapper = document.querySelector(".wrapper");
  const header = document.querySelector(".header");
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".menu");
  const menuFirstLink = document.querySelector(".menu__link");
  const clientsInner = document.querySelector(".clients__inner");

  //Событие клика по документу
  document.addEventListener("click", documentActions);

  //Событие прокрутки документа
  window.addEventListener("scroll", windowScroll);

  //Функция клика
  function documentActions(e) {
    const targetElement = e.target;
    //Клик по элементам секции getting для показа описания в мобильной версии
    if (targetElement.classList.contains("getting__item", "getting__btn")) {
      targetElement.classList.add("active");
    }

    //Клик вне элементов секции getting и скрытие описания
    if (
      !targetElement.classList.contains("getting__descr") &&
      !targetElement.classList.contains("getting__item")
    ) {
      const gettingItems = document.querySelectorAll(".getting__item");

      for (let i = 0; i < gettingItems.length; i++) {
        const gettingItem = gettingItems[i];
        if (gettingItem.classList.contains("active")) {
          gettingItem.classList.remove("active");
        }
      }
    }

    //Клик по кнопке остальное для показа всего текста и скрытия самой кнопки в секции founder
    if (
      targetElement.classList.contains("founder__btn-rest") &&
      !targetElement.classList.contains("hide")
    ) {
      targetElement
        .closest(".founder__quote")
        .querySelector(".founder__text")
        .classList.add("active");
      targetElement.classList.add("hide");
    }

    //Клик по кнопке остальное для показа всего текста и скрытия самой кнопки в секции reviews
    if (
      targetElement.classList.contains("reviews__btn-rest") &&
      !targetElement.classList.contains("hide")
    ) {
      targetElement
        .closest(".reviews__info")
        .querySelector(".reviews__text")
        .classList.add("active");
      targetElement.classList.add("hide");
      reviewsSwiper.update();
    }

    //Клик по кнопки фильтрации контента в секции progress-work
    if (targetElement.classList.contains("progress-work__btn")) {
      if (!targetElement.classList.contains("active")) {
        const progressButtons = document.querySelectorAll(
          ".progress-work__btn"
        );

        for (let i = 0; i < progressButtons.length; i++) {
          const progressBtn = progressButtons[i];
          progressBtn.classList.remove("active");
        }

        targetElement.classList.add("active");

        const progressContents = document.querySelectorAll(".prosressing-work");

        for (let i = 0; i < progressContents.length; i++) {
          const progressContent = progressContents[i];
          progressContent.classList.remove("active");
        }
        document
          .querySelector("." + targetElement.dataset.filter)
          .classList.add("active");
      }
    }
  }

  //Функция для скрытия описания элементов в секции getting при скролле
  function gettingDisabled() {
    const gettingItems = document.querySelectorAll(".getting__item");

    for (let i = 0; i < gettingItems.length; i++) {
      const gettingItem = gettingItems[i];
      if (gettingItem.classList.contains("active")) {
        gettingItem.classList.remove("active");
      }
    }
  }

  //Функция прокручивающая список с брендами в секции с партнерами вправо
  function scrollBy() {
    clientsInner.scrollLeft = 500;
  }
  scrollBy();

  //Функция прокрутки документа
  function windowScroll() {
    gettingDisabled();
  }

  //Функция перемещения изображения во флекс-контейнер в мобильной версии в секции top для адаптива
  const innerTop = document.querySelector(".top__image");
  if (innerTop) {
    const innerTopPreParents = innerTop.closest(".top__body");
    const innerTopParents = innerTopPreParents.querySelector(".top__info");
    const innerTopClass = () => innerTop.classList.contains("moved");
    function innerTopMoved() {
      if (window.innerWidth <= 991.98 && !innerTopClass()) {
        innerTop.classList.add("moved");
        innerTopParents.append(innerTop);
      }
      if (window.innerWidth > 991.98 && innerTopClass()) {
        innerTop.classList.remove("moved");
        innerTopPreParents.append(innerTop);
      }
    }
    innerTopMoved();
    window.addEventListener("resize", function () {
      innerTopMoved();
    });
  }

  //Функция перемещения изображения во флекс-контейнер в мобильной версии в секции founder для адаптива
  const innerFounder = document.querySelector(".founder__image");
  if (innerFounder) {
    const innerFounderPreParents = innerFounder.closest(".founder__container");
    const innerFounderParents =
      innerFounderPreParents.querySelector(".founder__info");
    const innerFounderClass = () => innerFounder.classList.contains("moved");
    function innerFounderMoved() {
      if (window.innerWidth <= 767.98 && !innerFounderClass()) {
        innerFounder.classList.add("moved");
        innerFounderParents.prepend(innerFounder);
      }
      if (window.innerWidth > 767.98 && innerFounderClass()) {
        innerFounder.classList.remove("moved");
        innerFounderPreParents.prepend(innerFounder);
      }
    }
    innerFounderMoved();
    window.addEventListener("resize", function () {
      innerFounderMoved();
    });
  }

  //Функция задающая маску для инпутов
  const inputApplicants = document.querySelector("#applicantsPhone");
  const inputPrices = document.querySelector("#pricesPhone");
  if (inputApplicants) {
    const maskOptions = {
      mask: "+{7}(000) 000 00 00",
    };
    IMask(inputApplicants, maskOptions);
  }
  if (inputApplicants) {
    const maskOptions = {
      mask: "+{7}(000) 000 00 00",
    };
    IMask(inputPrices, maskOptions);
  }

  //Функция добавляющая класс всем инпутам в которые что то вписали для стилизации валидации
  const inputs = document.querySelectorAll("main input");
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.addEventListener("change", function () {
      if (this.value.length) {
        this.classList.add("valid");
      } else {
        this.classList.remove("valid");
      }
    });
  }

  //Функция валидации формы секции aplicants
  const validateApplicantsForms = function (selector, rules, messages) {
    new JustValidate(".applicants__form", {
      rules: rules,
      messages: messages,
      submitHundler: function (form) {},
    });
  };
  validateApplicantsForms(
    ".applicants__form",
    {
      applicantsName: {
        required: true,
        minLength: 3,
      },
      applicantsPhone: {
        required: true,
        minLength: 17,
      },
    },
    {
      applicantsName: {
        required: "*это поле необходимо заполнить",
        minLength: "Минимум 3 символа",
      },
      applicantsPhone: {
        required: "*это поле необходимо заполнить",
        minLength: "*заполните телефон в формате +7(xxx) xxx xx xx",
      },
    }
  );

  //Функция валидации формы секции prices
  const validatePricesForms = function (selector, rules, messages) {
    new JustValidate(".prices__form", {
      rules: rules,
      messages: messages,
      submitHundler: function (form) {},
    });
  };
  validatePricesForms(
    ".prices__form",
    {
      pricesName: {
        required: true,
        minLength: 3,
      },
      pricesPhone: {
        required: true,
        minLength: 17,
      },
    },
    {
      pricesName: {
        required: "*это поле необходимо заполнить",
        minLength: "Минимум 3 символа",
      },
      pricesPhone: {
        required: "*это поле необходимо заполнить",
        minLength: "*заполните телефон в формате +7(xxx) xxx xx xx",
      },
    }
  );

  //Подключение слайдера в секции reviews
  const reviewsSwiper = new Swiper(".reviews__body", {
    watchOverflow: true,
    slidesPerView: 1,
    grabCursor: true,
    autoHeight: true,

    navigation: {
      nextEl: ".reviews__next",
      prevEl: ".reviews__prev",
    },

    pagination: {
      el: ".reviews__pagination",
      type: "bullets",
    },

    breakpoints: {
      991.98: {
        pagination: {
          autoHeight: false,
          el: ".reviews__pagination",
          type: "fraction",
        },
      },
    }
  });

  //Функция для следования стрелки за курсором мыши в секции our-help
  document.onmousemove = function (event) {
    let y = event.y;
    let x = event.x;
    const helpList = document.querySelector(".our-help__list");
    const distanceTopToList = helpList.getBoundingClientRect().top;
    const distanceLeftToList = helpList.getBoundingClientRect().left;
    const arrowList = document.querySelector(".our-help__arrow svg");
    let distanceCursorTop = y - distanceTopToList;
    let distanceCursorLeft = x - distanceLeftToList;
    let heightList = helpList.offsetHeight;
    let widthList = helpList.offsetWidth;

    if (
      distanceCursorTop >= 0 &&
      distanceCursorTop <= heightList - 10 &&
      distanceCursorLeft >= 0 &&
      distanceCursorLeft <= widthList
    ) {
      arrowList.style.transform = "translateY(" + distanceCursorTop + "px)";
      arrowList.style.opacity = 1;
    } else {
      arrowList.style.opacity = 0;
    }
  };
});
