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

  searchTitle(searchType: string, query: string) {
    return Api.get(`${END_POINT}/searchTitle/${searchType}/${query}`);
  },
};
