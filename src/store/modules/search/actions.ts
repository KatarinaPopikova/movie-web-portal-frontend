import General from "@/api/general";

export const getAllCategories = async ({ commit }) => {
  const data = await General.all();
  commit("SET_ALL_CATEGORIES", data);
};

export const getAllGenres = async ({ commit }) => {
  const data = await General.allGenres();
  commit("SET_ALL_GENRES", data);
};
