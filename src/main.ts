import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import mitt, { Emitter } from "mitt";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faMagnifyingGlass);

declare global {
  interface Window {
    // eslint-disable-next-line
    eventBus: Emitter<any>;
  }
}

window.eventBus = mitt();

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
