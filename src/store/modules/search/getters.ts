import { GetterTree } from "vuex";
import {
  DatabaseEnum,
  DetectTypeEnum,
  MovieDatabaseEnum,
  RootState,
  SearchState,
  YoloEnum,
} from "@/types";

export const allGenres = (state: SearchState): string[] =>
  state.allGenres[state.searchFilter.movieDatabase];

export const categories = (state: SearchState): string[] =>
  state.searchFilter.categories;

export const database = (state: SearchState): DatabaseEnum =>
  state.searchFilter.database ? DatabaseEnum.db : DatabaseEnum.online;

export const yolo = (state: SearchState): YoloEnum => state.searchFilter.yolo;

export const confidence = (state: SearchState): number =>
  state.searchFilter.confidence;

export const movieDatabase = (state: SearchState): string =>
  state.searchFilter.movieDatabase;

export const genres = (state: SearchState): string[] =>
  state.searchFilter.genres;

export const query = (state: SearchState): string => state.searchFilter.query;

export const dateFrom = (state: SearchState): string =>
  state.searchFilter.dateFrom;
export const dateTo = (state: SearchState): string => state.searchFilter.dateTo;

export const detectType = (state: SearchState): DetectTypeEnum =>
  state.searchFilter.detectType;

export const maxPages = (state: SearchState): number =>
  state.searchFilter.maxPages;

export const filteredCategories =
  (state: SearchState): ((query: string) => string[]) =>
  (query: string) =>
    state.allCategories.filter((category) =>
      category.toLowerCase().includes(query.toLowerCase())
    );

export const disabledDb = (state: SearchState): boolean => {
  return state.searchFilter.movieDatabase === MovieDatabaseEnum.imdb;
};

export const disabledYolo = (state: SearchState): boolean => {
  return state.searchFilter.detectType === DetectTypeEnum.Trailer;
};
export const disabledModel = (state: SearchState): boolean => {
  return (
    state.searchFilter.detectType === DetectTypeEnum.Trailer &&
    state.searchFilter.database
  );
};

const getters: GetterTree<SearchState, RootState> = {
  allGenres,
  categories,
  database,
  yolo,
  confidence,
  movieDatabase,
  genres,
  query,
  dateFrom,
  dateTo,
  detectType,
  maxPages,
  filteredCategories,
  disabledDb,
  disabledYolo,
  disabledModel,
};

export default getters;
