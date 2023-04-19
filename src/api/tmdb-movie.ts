import { callRequest } from "./axios";

const END_POINT = "tmdb/movies";

export default {
  async filteredMovies(searchFilter) {
    const genresString = searchFilter.genres.join(",");
    const categoriesString = searchFilter.categories.join(",");

    const request = `${END_POINT}?categories=${categoriesString}&database=${searchFilter.database}&yolo=${searchFilter.yolo}&confidence=${searchFilter.confidence}&movieDatabase=${searchFilter.movieDatabase}&genres=${genresString}&query=${searchFilter.query}&dateFrom=${searchFilter.dateFrom}&dateTo=${searchFilter.dateTo}&detectType=${searchFilter.detectType}&maxPages=${searchFilter.maxPages}`;
    return await callRequest(request);
  },

  async detail(id: number) {
    const request = `${END_POINT}/${id}`;
    return await callRequest(request);
  },

  async popular() {
    return await callRequest(`${END_POINT}/popular`);
  },

  async reviews(movie_id: number, page: number) {
    const request = `${END_POINT}/reviews/${movie_id}?page=${page}`;
    return await callRequest(request);
  },
};
