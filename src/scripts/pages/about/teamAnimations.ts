import { changeTheme } from "./changeTheme";
import { heroAnimation } from "./heroAnimation";

export const teamAnimations = () => {
  const teamElm = document.querySelector<HTMLElement>(".team");

  if (teamElm) {
    changeTheme(teamElm);
    heroAnimation(teamElm);
  }
};
