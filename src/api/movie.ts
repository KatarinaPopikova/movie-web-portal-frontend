import { Api } from "./axios";

const END_POINT = "movies";

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

  searchTitle(query: string) {
    return Api.get(`${END_POINT}/searchTitle/${query}`);
  },
};
