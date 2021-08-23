import APP from "../../app/APP";

export const addMap = () => {
  const yMapKey = "141be02a-bcf9-4842-909e-6a9eb300d4cf";
  const isMobile = !APP.isDesktop;

  const loadMap = (initMap: () => void) => {
    const key = yMapKey;
    const url = `https://api-maps.yandex.ru/2.1/?apikey=${key}&lang=ru_RU&load=Map,Placemark,control.ZoomControl`;

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
          controls: ["zoomControl"],
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
