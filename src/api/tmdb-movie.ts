import { callRequest } from "./axios";

const END_POINT = "tmdb/movies";

export default {
  async detail(id: string) {
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
