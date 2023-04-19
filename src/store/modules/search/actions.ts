import General from "@/api/general";

export const getAllCategories = async ({ commit }) => {
  const data = await General.allCategories();
  commit("SET_ALL_CATEGORIES", data);
};

export const getAllGenres = async ({ state, commit }) => {
  if (state.allGenres.TMDB?.length === 0) {
    const data = await General.allGenres();
    commit("SET_ALL_GENRES", data);
  }
};
