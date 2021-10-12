import { changeTheme } from "./changeTheme";
import { heroAnimation } from "./heroAnimation";

export const teamAnimations = () => {
  const teamElm = document.querySelector<HTMLElement>(".team");
  const recruitElm = document.querySelector<HTMLElement>(".recruit");

  if (teamElm) {
    heroAnimation(teamElm);

    if (recruitElm) {
      changeTheme(teamElm, recruitElm);
    }
  }
};
