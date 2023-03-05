import { Api } from "./axios";

const END_POINT = "tmdb/movies";

export default {
  all() {
    return Api.get(END_POINT);
  },

  detail(id: number) {
    return Api.get(`${END_POINT}/${id}`);
  },

  images(id: number) {
    return Api.get(`${END_POINT}/images/${id}`);
  },

  popular() {
    return Api.get(`${END_POINT}/popular`);
  },

  search(
    query: string,
    genres: string,
    categories: string,
    date_from: string,
    date_to: string
  ) {
    if (categories === "") {
      if (date_to === "" && date_from === "" && genres === "")
        return this.searchMoviesWithTitle(query);
      else return this.searchMovies(query, genres, date_from, date_to);
    } else {
      return this.searchPoster(query, genres, categories, date_from, date_to);
    }
  },

  searchMoviesWithTitle(query: string) {
    return Api.get(`${END_POINT}/searchMoviesWithTitle?query=${query}`);
  },

  searchMovies(
    query: string,
    genres: string,
    date_from: string,
    date_to: string
  ) {
    return Api.get(
      `${END_POINT}/searchMovies?query=${query}&genres=${genres}&date_from=${date_from}&date_to=${date_to}`
    );
  },

  searchPoster(
    query: string,
    genres: string,
    categories: string,
    date_from: string,
    date_to: string
  ) {
    return Api.get(
      `${END_POINT}/searchPoster?query=${query}&genres=${genres}&date_from=${date_from}&date_to=${date_to}&categories=${categories}`
    );
  },

  searchTrailer(
    query: string,
    genres: string,
    categories: string,
    date_from: string,
    date_to: string
  ) {
    return Api.get(
      `${END_POINT}/searchTrailer?query=${query}&genres=${genres}&date_from=${date_from}&date_to=${date_to}&categories=${categories}`
    );
  },
};
