import { Api } from "./axios";

const END_POINT = "imdb/movies";

export default {
  detail(id: number) {
    return Api.get(`${END_POINT}/${id}`);
  },

  images(id: number) {
    return Api.get(`${END_POINT}/images/${id}`);
  },
  posters(id: number) {
    return Api.get(`${END_POINT}/posters/${id}`);
  },

  fillDatabase() {
    return Api.get(`fill_database`);
  },
};
