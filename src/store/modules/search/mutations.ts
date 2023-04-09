export const SET_ALL_CATEGORIES = (state, allCategories) => {
  state.allCategories = allCategories;
};

export const SET_CATEGORIES = (state, categories: string[]) => {
  state.searchFilter.categories = categories;
};
export const REMOVE_FROM_CATEGORIES = (state, category: string) => {
  state.searchFilter.categories = state.searchFilter.categories.filter(
    (value) => value !== category
  );
};
