import General from "@/api/general";

export const getAllCategories = async ({ state, commit }, cancelToken) => {
  if (state.allCategories.length === 0) {
    const data = await General.allCategories(cancelToken);
    commit("SET_ALL_CATEGORIES", data);
  }
};

export const getAllGenres = async ({ state, commit }) => {
  if (state.allGenres.TMDB?.length === 0) {
    const data = await General.allGenres();
    commit("SET_ALL_GENRES", data);
  }
};
