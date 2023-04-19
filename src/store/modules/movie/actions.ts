import { ActionContext } from "vuex";
import { RootState, SearchFilter } from "@/types";
import MovieTmdb from "@/api/tmdb-movie";
import MovieImdb from "@/api/imdb-movie";

export const getMovies = async ({
  rootState,
  commit,
}: ActionContext<any, RootState>) => {
  commit("SET_LOADING", true, { root: true });

  const searchFilter: SearchFilter = rootState.searchModule.searchFilter;
  const movies = await MovieTmdb.filteredMovies(searchFilter);
  commit("SET_MOVIES", movies);

  commit("SET_LOADING", false, { root: true });
};

export const getMovieInfo = async ({ commit }, payload) => {
  const { apiDb, movieId } = payload;
  let movieDetail;
  if (apiDb === "TMDB") {
    movieDetail = await MovieTmdb.detail(movieId);
  } else if (apiDb === "IMDB") {
    movieDetail = await MovieImdb.detail(movieId);
  }
  commit("SET_MOVIE_INFO", movieDetail);
};
