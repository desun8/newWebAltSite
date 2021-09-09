import { createApp } from "vue";
import App from "./App.vue";

export const initApp = () => {
  createApp(App).mount("#app");
};
