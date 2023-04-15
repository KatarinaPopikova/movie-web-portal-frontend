export const SET_MOVIES = (state, movies) => {
  state.movies = movies;
};

export const SET_MOVIE_DETECTION = (state, movie_det) => {
  state.movie.detection = movie_det;
};
export const SET_MOVIE_DETECTION_V8 = (state, movie_det) => {
  state.movie.yolov8 = movie_det;
};
export const SET_MOVIE_INFO = (state, movie_info) => {
  state.movie.info = movie_info;
};
