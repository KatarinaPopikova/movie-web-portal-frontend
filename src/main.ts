import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./index.scss";
import mitt, { Emitter } from "mitt";
import Vue3Lottie from "vue3-lottie";
import "vue3-lottie/dist/style.css";

import VueTailwindDatepicker from "vue-tailwind-datepicker";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faMagnifyingGlass,
  faChevronDown,
  faCheck,
  faCirclePlay,
  faHouse,
  faXmark,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faMagnifyingGlass,
  faChevronDown,
  faCheck,
  faCirclePlay,
  faHouse,
  faXmark,
  faAngleLeft,
  faAngleRight
);

declare global {
  interface Window {
    // eslint-disable-next-line
        eventBus: Emitter<any>;
  }
}

window.eventBus = mitt();

createApp(App)
  .use(store)
  .use(router)
  .use(VueTailwindDatepicker as never)
  .use(Vue3Lottie)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
