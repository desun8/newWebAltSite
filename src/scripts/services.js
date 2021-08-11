import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import initRoot from "./root";
import CardsAnimation from "./pages/services/CardsAnimation";
import APP from "./app/APP";
import "@/styles/services.scss";

initRoot();

if (APP.isDesktop) {
  const elm = document.querySelector(".service-banner__icon");
  ScrollTrigger.create({
    target: elm,
    animation: gsap.to(elm, { rotate: 10 }),
    start: "center top",
    scrub: true,
  });
} else {
  new CardsAnimation().init();
}
