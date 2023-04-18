import Movie from "../../../api/tmdb-movie";
import { ActionContext } from "vuex";
import { RootState, SearchFilter } from "@/types";

export const getMovies = async ({
  rootState,
  commit,
}: ActionContext<any, RootState>) => {
  commit("SET_LOADING", true, { root: true });
  const searchFilter: SearchFilter = rootState.searchModule.searchFilter;
  try {
    const movies = await Movie.filteredMovies(searchFilter);
    commit("SET_MOVIES", movies);
  } catch (error) {
    console.log("Error in fetching movies.");
  } finally {
    commit("SET_LOADING", false, { root: true });
  }
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
