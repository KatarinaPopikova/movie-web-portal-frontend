import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:8000",
});

export const callRequest = async (request: string) => {
  try {
    const response = await Api.get(request);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { Api };
