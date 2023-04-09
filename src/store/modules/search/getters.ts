import { GetterTree } from "vuex";
import {
  DatabaseEnum,
  DetectTypeEnum,
  RootState,
  SearchState,
  YoloEnum,
} from "@/types";

export const categories = (state: SearchState): string[] =>
  state.searchFilter.categories;

export const database = (state: SearchState): DatabaseEnum =>
  state.searchFilter.database ? DatabaseEnum.online : DatabaseEnum.db;

export const yolo = (state: SearchState): YoloEnum => state.searchFilter.yolo;

export const confidence = (state: SearchState): number =>
  state.searchFilter.confidence;

export const genres = (state: SearchState): string[] =>
  state.searchFilter.genres;

export const query = (state: SearchState): string => state.searchFilter.query;

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
  database,
  yolo,
  filteredCategories,
  confidence,
  genres,
  query,
  dateFrom,
  dateTo,
  detectType,
};

export default getters;