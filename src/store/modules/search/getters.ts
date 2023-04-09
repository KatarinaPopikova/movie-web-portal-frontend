import { GetterTree } from "vuex";
import { DetectTypeEnum, RootState, SearchState } from "@/types";

export const categories = (state: SearchState): string[] =>
  state.searchFilter.categories;

export const dateFrom = (state: SearchState): string =>
  state.searchFilter.dateFrom;
export const dateTo = (state: SearchState): string => state.searchFilter.dateTo;

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
  dateFrom,
  dateTo,
  detectType,
  filteredCategories,
};

export default getters;
