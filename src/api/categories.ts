import { Api } from "./axios";

export default {
  all() {
    return Api.get(`categories_to_detect`);
  },
};
