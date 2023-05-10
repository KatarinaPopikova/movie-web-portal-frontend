import { createStore } from "vuex";
import movie from "./modules/movie";
import search from "./modules/search";
import { RootState } from "@/types";

export default createStore<RootState>({
  state: {
    loading: false,
    error: null,
    errorLog: null,
    source: undefined,
    movieModule: movie.state,
    searchModule: search.state,
  },
  getters: {
    loading: (state) => state.loading,
    source: (state) => state.source,
    error: (state) => state.error,
  },
  mutations: {
    ["SET_LOADING"](state, loading) {
      state.loading = loading;
    },
    ["SET_ERROR"](state, error) {
      console.log(error);
      state.error = error;
    },
    ["SET_ERROR_LOG"](state, error) {
      state.errorLog = error;
    },
    ["HANDLE_ERROR"](state) {
      if (state.error?.message.includes("code 500")) {
        state.errorLog = "Cuda out of memory.";
      } else if (state.error?.message === "STOP") {
        return;
      }
    },
    ["SET_SOURCE"](state, source) {
      state.source = source;
    },
    ["STOP_SOURCE"](state) {
      state.source?.cancel("STOP");
    },
  },
  modules: {
    movie,
    search,
  },
});
