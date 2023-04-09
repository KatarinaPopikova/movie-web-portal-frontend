import Categories from "../../../api/categories";

export const getAllCategories = async ({ commit }) => {
  try {
    //commit("SET_LOADING", true);
    const { data } = await Categories.all();
    commit("SET_ALL_CATEGORIES", data.credentials);
  } catch (error) {
    //commit("SET_ERROR", error);
    console.log(error);
    throw error;
  } finally {
    // commit("setLoading", false);
  }
};
