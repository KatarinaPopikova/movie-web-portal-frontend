export const SET_MOVIES = (state, movies) => {
  state.movies = movies;
};

export const SET_MOVIE_DETECTION = (state, movieDet) => {
  if (movieDet && movieDet.length > 0) {
    const model = movieDet[0]["model"];
    state.movie.detections.push({ [model]: movieDet });
  } else {
    state.movie.detections = [];
  }
};

export const SET_MOVIE_INFO = (state, movie_info) => {
  state.movie.info = movie_info;
};
