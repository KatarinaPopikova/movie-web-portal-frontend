import axios, { CancelTokenSource } from "axios";
import store from "@/store/index";

const Api = axios.create({
  baseURL: "http://localhost:8000",
});

export const websocketStreaming =
  "ws://localhost:8000/ws/trailer-streaming/room1/";

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
    store.commit("HANDLE_ERROR", error);

    return null;
  }
};

export { Api };
