import { GetterTree } from "vuex";
import { RootState, SearchState } from "@/types";

export const categories = (state: SearchState): string[] =>
  state.searchFilter.categories;

export const filteredCategories =
  (state: SearchState): ((query: string) => string[]) =>
  (query: string) =>
    state.allCategories.filter((category) =>
      category.toLowerCase().includes(query.toLowerCase())
    );

const getters: GetterTree<SearchState, RootState> = {
  categories,
  filteredCategories,
};

export default getters;
