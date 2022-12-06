import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./index.scss";
import mitt, { Emitter } from "mitt";

import VueTailwindDatepicker from "vue-tailwind-datepicker";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faMagnifyingGlass,
  faChevronDown,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faMagnifyingGlass, faChevronDown, faCheck);

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
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
