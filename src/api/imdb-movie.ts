import { callRequest } from "./axios";

const END_POINT = "imdb/movies";

export default {
  async detail(id: string) {
    return await callRequest(`${END_POINT}/${id}`);
  },
};
