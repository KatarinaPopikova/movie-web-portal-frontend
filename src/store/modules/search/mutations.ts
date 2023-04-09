import { DetectTypeEnum, YoloEnum } from "@/types";

export const SET_ALL_CATEGORIES = (state, allCategories) => {
  state.allCategories = allCategories;
};

export const SET_ALL_GENRES = (state, allGenres) => {
  state.allGenres = allGenres;
};

export const SET_CATEGORIES = (state, categories: string[]) => {
  state.searchFilter.categories = categories;
};

export const SET_YOLO = (state, yolo: boolean) => {
  state.searchFilter.yolo = yolo ? YoloEnum.v8 : YoloEnum.v7;
};

export const SET_DATABASE = (state, database: boolean) => {
  state.searchFilter.database = database;
};

export const SET_CONFIDENCE = (state, confidence: number) => {
  state.searchFilter.confidence = confidence;
};

export const SET_GENRES = (state, genres: string[]) => {
  state.searchFilter.genres = genres;
};

export const SET_QUERY = (state, query: string) => {
  state.searchFilter.query = query;
};

export const SET_DATE_FROM = (state, dateFrom: string) => {
  state.searchFilter.dateFrom = dateFrom;
};

export const SET_DATE_TO = (state, dateTo: string) => {
  state.searchFilter.dateTo = dateTo;
};

export const REMOVE_FROM_CATEGORIES = (state, category: string) => {
  state.searchFilter.categories = state.searchFilter.categories.filter(
    (value) => value !== category
  );
};

export const SET_DETECT_TYPE = (state, detectType: DetectTypeEnum) => {
  state.searchFilter.detectType = detectType;
};