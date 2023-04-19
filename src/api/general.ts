import { callRequest } from "./axios";

export default {
  async all() {
    return await callRequest(`categories_to_detect`);
  },
  async allGenres() {
    return await callRequest(`genres`);
  },
  async fillDatabase() {
    return await callRequest(`fill_database`);
  },
};
