import { DetectTypeEnum } from "@/types";

export const SET_ALL_CATEGORIES = (state, allCategories) => {
  state.allCategories = allCategories;
};

export const SET_CATEGORIES = (state, categories: string[]) => {
  state.searchFilter.categories = categories;
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
