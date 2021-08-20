import initRoot from "./root";
import "@/styles/contacts.scss";
import APP from "./app/APP";
import RedirectFooter from "./pages/home/redirectFooter.js";
import { mediaQueryEvent } from "./utils/mediaQueryEvent";
import TextRunner from "./components/textRunner";

initRoot();

const initMap = () => {
  const yMapKey = "141be02a-bcf9-4842-909e-6a9eb300d4cf";
  const isMobile = !APP.isDesktop;

  const loadMap = (initMap: () => void) => {
    const key = yMapKey;
    const url = `https://api-maps.yandex.ru/2.1/?apikey=${key}&lang=ru_RU&load=Map,Placemark`;

    const script = document.createElement("script");
    script.src = url;
    script.onload = () => {
      initMap();
      console.log("onload init");
    };
    document.head.appendChild(script);
  };

  const initMap = () => {
    if (window.ymaps) {
      const ymaps = window.ymaps;

      ymaps.ready(function () {
        const coords = isMobile
          ? [48.460642, 135.100253]
          : [48.46024, 135.09611];
        const markCoords = [48.462491, 135.101155];
        const markSize = 82;

        const map = new ymaps.Map("map", {
          center: coords,
          zoom: 16,
        });

        map.geoObjects.add(
          new ymaps.Placemark(
            markCoords,
            {},
            {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: "default#image",
              // Своё изображение иконки метки.
              iconImageHref: "/images/contacts/placemark.svg",
              // Размеры метки.
              iconImageSize: [markSize, markSize],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [markSize / -0.9, markSize / -2],
            }
          )
        );
        map.behaviors.disable(["scrollZoom"]);

        if (isMobile) {
          // отключаем перетаскивание карты
          map.behaviors.disable("drag");
        }
      });
    } else {
      console.warn("init map");
    }
  };

  loadMap(initMap);
};

const initFooterAnimation = () => {
  const elm = document.querySelector(".footer-redirect");
  if (elm) {
    const redirectFooter = new RedirectFooter(elm);

    mediaQueryEvent(
      () => redirectFooter.initMobile(),
      () => redirectFooter.initDesktop()
    );
  }
};

const updateTime = () => {
  const createServerDate = (date: string) => {
    const t = date.split(/[- :]/).map((elm) => parseInt(elm));

    return new Date(...(t as [number, number, number, number, number]));
  };

  const timeElms = document.querySelector<HTMLTimeElement>("time")!;
  const timeValueElms = document.querySelectorAll<HTMLTimeElement>(".js-time")!;

  const serverDateString = timeElms.getAttribute("datetime")!;
  const serverDate = createServerDate(serverDateString);

  let fetched = new Date();

  const getDate = () => {
    const now = new Date();
    const offset = now.getTime() - fetched.getTime();

    serverDate.setTime(serverDate.getTime() + offset);
    fetched = now;

    return serverDate;
  };

  const updateElmsTime = (date: Date) => {
    const time = `${date.getHours()}:${date.getMinutes()}`;

    timeValueElms.forEach((elm) => {
      elm.textContent = time;
    });
  };

  setInterval(() => {
    updateElmsTime(getDate());
  }, 1000);
};

const initTicker = () => {
  const tickerElms = document.querySelectorAll(".page-contacts .ticker");

  if (tickerElms.length) {
    tickerElms.forEach((elm) => {
      new TextRunner(elm);
    });
  }
};

initMap();
initFooterAnimation();
updateTime();
initTicker();
