import { createStore } from "vuex";
import movie from "./modules/movie";

export default createStore({
  modules: {
    movie,
  },
});
