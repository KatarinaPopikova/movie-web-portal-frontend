import { createStore } from "vuex";
import movie from "./modules/movie";
import search from "./modules/search";
import { RootState } from "@/types";

export default createStore<RootState>({
  state: {
    loading: false,
    error: null,
    movieModule: movie.state,
    searchModule: search.state,
  },
  getters: {
    loading: (state) => state.loading,
    error: (state) => state.error,
  },
  mutations: {
    ["SET_LOADING"](state, loading) {
      state.loading = loading;
    },
    ["SET_ERROR"](state, loading) {
      state.error = loading;
    },
  },
  modules: {
    movie,
    search,
  },
});
