import { ActionContext } from "vuex";
import { RootState, SearchFilter } from "@/types";
import MovieTmdb from "@/api/tmdb-movie";
import MovieImdb from "@/api/imdb-movie";
import Movie from "@/api/general";
import axios from "axios";

export const getMovies = async ({
  rootState,
  commit,
}: ActionContext<any, RootState>) => {
  commit("SET_LOADING", true, { root: true });
  const source = axios.CancelToken.source();
  commit("SET_SOURCE", source, { root: true });
  const searchFilter: SearchFilter = rootState.searchModule.searchFilter;

  const movies = await Movie.filteredMovies(searchFilter, source);
  if (movies === null) {
    commit("SET_MOVIES", []);
    commit("HANDLE_ERROR", null, { root: true });
  } else if (movies["results"].length === 0) {
    commit("SET_ERROR", "No film was found.", { root: true });
    commit("SET_MOVIES", []);
  } else {
    commit("SET_MOVIES", movies["results"]);
    commit("SET_DET_INFO", movies["det_info"]);
  }

  commit("SET_LOADING", false, { root: true });
};

export const getMovieInfo = async ({ commit, state }, payload) => {
  const apiDb = payload[0];
  const movieId = payload[1];

  if (state.movie.info.id === movieId) return;
  let movieDetail;
  if (apiDb === "TMDB") {
    movieDetail = await MovieTmdb.detail(movieId);
  } else if (apiDb === "IMDB") {
    movieDetail = await MovieImdb.detail(movieId);
  }
  commit("SET_MOVIE_INFO", movieDetail);
};
