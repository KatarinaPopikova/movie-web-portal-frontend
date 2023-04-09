import { GetterTree } from "vuex";
import { DetectTypeEnum, RootState, SearchState } from "@/types";

export const categories = (state: SearchState): string[] =>
  state.searchFilter.categories;

export const detectType = (state: SearchState): DetectTypeEnum =>
  state.searchFilter.detectType;

export const filteredCategories =
  (state: SearchState): ((query: string) => string[]) =>
  (query: string) =>
    state.allCategories.filter((category) =>
      category.toLowerCase().includes(query.toLowerCase())
    );

const getters: GetterTree<SearchState, RootState> = {
  categories,
  detectType,
  filteredCategories,
};

export default getters;
