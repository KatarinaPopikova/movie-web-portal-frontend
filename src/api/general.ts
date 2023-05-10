import { callRequest } from "./axios";
import { Modelv8Enum, YoloEnum } from "@/types";

export default {
  async allCategories() {
    return await callRequest(`categories_to_detect`);
  },
  async allGenres() {
    return await callRequest(`genres`);
  },
  async filteredMovies(searchFilter, cancelToken) {
    const genresString = searchFilter.genres.join(",");
    const categoriesString = searchFilter.categories.join(",");
    const yolo =
      searchFilter.yolo === YoloEnum.v7
        ? YoloEnum.v7
        : YoloEnum.v8 + (searchFilter.model === Modelv8Enum.nano ? "n" : "l");
    const request = `movies?categories=${categoriesString}&database=${
      searchFilter.database
    }&yolo=${yolo.toLowerCase()}&confidence=${
      searchFilter.confidence
    }&movieDatabase=${
      searchFilter.movieDatabase
    }&genres=${genresString}&query=${searchFilter.query}&dateFrom=${
      searchFilter.dateFrom
    }&dateTo=${searchFilter.dateTo}&detectType=${
      searchFilter.detectType
    }&maxPages=${searchFilter.maxPages}`;
    return await callRequest(request, cancelToken);
  },
  async fillDatabase() {
    return await callRequest(`fill_database`);
  },
};
