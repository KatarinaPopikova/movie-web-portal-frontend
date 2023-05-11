import axios, { CancelTokenSource } from "axios";
import store from "@/store/index";

const Api = axios.create({
  baseURL: "https://movie-webportal-api.onrender.com",
});

export const callRequest = async (
  request: string,
  cancelToken: CancelTokenSource | undefined = undefined
) => {
  try {
    const response =
      cancelToken !== undefined
        ? await Api.get(request, { cancelToken: cancelToken.token })
        : await Api.get(request);

    return response.data;
  } catch (error) {
    store.commit("SET_ERROR", error);

    return null;
  }
};

export { Api };
