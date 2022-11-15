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

  search(
    searchType: string,
    query: string,
    genres: string,
    date_from: string,
    date_to: string
  ) {
    if (searchType === "title") {
      return this.searchTitle(query);
    } /*if (searchType === "poster")*/ else {
      console.log(this.searchPoster(query, genres, date_from, date_to));
      return this.searchPoster(query, genres, date_from, date_to);
    }
  },

  searchTitle(query: string) {
    return Api.get(`${END_POINT}/searchTitle?query=${query}`);
  },

  searchPoster(
    query: string,
    genres: string,
    date_from: string,
    date_to: string
  ) {
    return Api.get(
      `${END_POINT}/searchPoster?query=${query}&genres=${genres}&date_from=${date_from}&date_to=${date_to}`
    );
  },
};
