import { callRequest } from "./axios";

export default {
  async allCategories() {
    return await callRequest(`categories_to_detect`);
  },
  async allGenres() {
    return await callRequest(`genres`);
  },
  async filteredMovies(searchFilter) {
    const genresString = searchFilter.genres.join(",");
    const categoriesString = searchFilter.categories.join(",");

    const request = `movies?categories=${categoriesString}&database=${searchFilter.database}&yolo=${searchFilter.yolo}&confidence=${searchFilter.confidence}&movieDatabase=${searchFilter.movieDatabase}&genres=${genresString}&query=${searchFilter.query}&dateFrom=${searchFilter.dateFrom}&dateTo=${searchFilter.dateTo}&detectType=${searchFilter.detectType}&maxPages=${searchFilter.maxPages}`;
    return await callRequest(request);
  },
  async fillDatabase() {
    return await callRequest(`fill_database`);
  },
};
