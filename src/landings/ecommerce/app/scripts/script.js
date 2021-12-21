<<<<<<< HEAD:src/landings/ecommerce/app/scripts/script.js
import "imask/dist/imask.js";
import "just-validate/dist/js/just-validate.js";
import Swiper, {Navigation, Pagination} from "swiper";
import "swiper/swiper-bundle.css";
=======
import IMask from "imask";
import JustValidate from "just-validate";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import { RECAPTCHA_KEY } from "@/scripts/app/core/api";
>>>>>>> landings-all:src/landings/1/app/scripts/script.js

Swiper.use([Navigation, Pagination]);

class Form {
  /**
   *
   * @param {HTMLFormElement} formEl
   * @param {Array<{field: String, rules: [{key: String | Number}]}>} validationRules
   * @param {String} recaptchaKey
   */
  constructor(formEl, validationRules, recaptchaKey = RECAPTCHA_KEY) {
    this.formEl = formEl;
    this.validationRules = validationRules;
    this.recaptchaKey = recaptchaKey;

    if (this.formEl && this.validationRules && this.recaptchaKey) {
      this.init();
    } else {
      console.error(`Не верный селектор: ${formEl}.`);
    }
  }

  addValidation() {
    this.validation = new JustValidate(this.formEl);
    this.validationRules.forEach((validationRule) => {
      this.validation.addField(validationRule.field, validationRule.rules);
    });
  }

  addSubmitEvent() {
    this.formEl.addEventListener("submit", (event) => {
      event.preventDefault();
      const isValid = this.validation.isValid;

      if (isValid) {
        console.log("Form is valid!");
        this.handleSubmit();
      } else {
        console.log("Form is not valid!");
      }
    });
  }

  handleSubmit() {
    console.log("SUBMIT");
    const KEY = this.recaptchaKey;
    const url = this.formEl.action;
    const formData = new FormData(this.formEl);
    const params = {
      method: "POST",
      body: formData,
    };

    const handleErrors = (response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response.json();
    };

    const handleSuccess = (response) => {
      if (response.status.toLowerCase() !== "ok") {
        throw Error(response.message);
      }

      return response;
    };

    return new Promise(function (resolve, _) {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(KEY, { action: "form" })
          .then((token) => {
            // добавляем в отправляемые данные токен рекаптчи
            formData.append("recaptcha_response", token);

            return fetch(url, params)
              .then(handleErrors)
              .then(handleSuccess)
              .catch((error) => console.error("Форма не отправилась", error));
          })
          .then(() => {
            resolve("success");
          });
      });
    });
  }

  init() {
    this.addValidation();
    this.addSubmitEvent();
  }
}


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
  const applicantsForm = document.querySelector(".applicants__form");
  if (applicantsForm) {
    new Form(applicantsForm, [
      {
        field: "#applicantsName",
        rules: [
          {
            rule: "minLength",
            value: 3,
            errorMessage: "*это поле необходимо заполнить",
          },
        ],
      },
      {
        field: "#applicantsPhone",
        rules: [
          {
            rule: "minLength",
            value: 17,
            errorMessage: "*это поле необходимо заполнить",
          },
        ],
      },
    ]);
  }

  //Функция валидации формы секции prices
  const pricesForm = document.querySelector(".prices__form");
  if (pricesForm) {
    new Form(pricesForm, [
      {
        field: "#pricesName",
        rules: [
          {
            rule: "minLength",
            value: 3,
            errorMessage: "*это поле необходимо заполнить",
          },
        ],
      },
      {
        field: "#pricesPhone",
        rules: [
          {
            rule: "minLength",
            value: 17,
            errorMessage: "*это поле необходимо заполнить",
          },
        ],
      },
    ]);
  }

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
