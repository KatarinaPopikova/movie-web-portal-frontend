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
      state.error = error;
    },
    ["SET_ERROR_LOG"](state, error) {
      state.errorLog = error;
    },
    ["HANDLE_ERROR"](state) {
      if (state.error?.message === "STOP") {
        return;
      } else if (state.error?.response?.status === 503) {
        state.errorLog = "Maximum usage IMDb API.";
      } else if (state.error?.response?.status === 507) {
        state.errorLog = "Cuda out of memory.";
      } else state.errorLog = state.error?.message;
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
