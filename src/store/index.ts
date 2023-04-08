import { createStore } from "vuex";
import movie from "./modules/movie";
import search from "./modules/search";

export default createStore({
  state: {
    loading: false,
    error: null,
  },
  getters: {
    loading: (state) => state.loading,
    error: (state) => state.error,
  },
  mutations: {
    ["SET_LOADING"](state, loading) {
      state.loading = loading;
    },
  },

  modules: {
    movie,
    search,
  },
});
