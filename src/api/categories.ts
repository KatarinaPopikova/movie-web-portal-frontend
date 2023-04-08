import { Api } from "./axios";

export default {
  async all() {
    return await Api.get(`categories_to_detect`);
  },
};
