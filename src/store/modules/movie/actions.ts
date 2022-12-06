import Movie from "../../../api/tmdb-movie";

export const getMovies = ({ commit }, movies) => {
  // Movie.all().then((response) => {
  //   commit("SET_MOVIES", response.data);
  // });
  commit("SET_MOVIES", movies);
};

export const getMovie = ({ commit }, movieDetection) => {
  commit("SET_MOVIE_DETECTION", movieDetection);
};
export const getMovieInfo = ({ commit }, movieInfo) => {
  commit("SET_MOVIE_INFO", movieInfo);
};
