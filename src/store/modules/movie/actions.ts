import Movie from "../../../api/tmdb-movie";
import { ActionContext } from "vuex";
import { RootState, SearchFilter } from "@/types";

export const getMovies = async ({
  rootState,
  commit,
}: ActionContext<any, RootState>) => {
  const searchFilter: SearchFilter = rootState.searchModule.searchFilter;
  const movies = await Movie.filteredMovies(searchFilter);
  console.log(movies);
  commit("SET_MOVIES", movies.credentials.results);
  // Movie.searchAll().then((response) => {
  //   commit("SET_MOVIES", response.data);
  // });
};

export const getMovie = ({ commit }, movieDetection) => {
  commit("SET_MOVIE_DETECTION", movieDetection);
};
export const getMovieV8 = ({ commit }, movieDetection) => {
  commit("SET_MOVIE_DETECTION_V8", movieDetection);
};
export const getMovieInfo = ({ commit }, movieInfo) => {
  commit("SET_MOVIE_INFO", movieInfo);
};
