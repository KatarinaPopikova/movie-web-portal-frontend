import axios, { CancelTokenSource } from "axios";
import store from "@/store/index";

const Api = axios.create({
  baseURL: "http://localhost:8000",
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

    console.log(response);

    return response.data;
  } catch (error) {
    console.log("sdsd");
    store.commit("SET_ERROR", error);

    return null;
  }
};

export { Api };
