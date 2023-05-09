import {
  DetectTypeEnum,
  Modelv8Enum,
  MovieDatabaseEnum,
  YoloEnum,
} from "@/types";

export const SET_ALL_CATEGORIES = (state, allCategories) => {
  state.allCategories = allCategories;
};

export const SET_ALL_GENRES = (state, allGenres) => {
  state.allGenres = {
    ...state.allGenres,
    TMDB: allGenres,
  };
};

export const SET_CATEGORIES = (state, categories: string[]) => {
  state.searchFilter.categories = categories;
};

export const SET_YOLO = (state, yolo: boolean) => {
  if (yolo) {
    state.searchFilter.yolo = YoloEnum.v8;
  } else {
    state.searchFilter.yolo = YoloEnum.v7;
  }
};

export const SET_MODEL = (state, model: boolean) => {
  state.searchFilter.model = model ? Modelv8Enum.large : Modelv8Enum.nano;
};

export const SET_DATABASE = (state, database: boolean) => {
  state.searchFilter.database = database;
  if (database && state.searchFilter.detectType === DetectTypeEnum.Trailer) {
    SET_MODEL(state, false);
  }
};

export const SET_CONFIDENCE = (state, confidence: number) => {
  state.searchFilter.confidence = confidence;
};

export const SET_MOVIE_DATABASE = (state, movieDatabase: number) => {
  SET_GENRES(state, []);
  state.searchFilter.movieDatabase = movieDatabase;
  if (state.searchFilter.detectType !== DetectTypeEnum.Trailer) {
    state.searchFilter.maxPages = 2;
  }
  if (state.searchFilter.movieDatabase === MovieDatabaseEnum.imdb) {
    SET_DATABASE(state, false);
  }
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
  state.searchFilter.maxPages = 2;
  if (state.searchFilter.detectType === DetectTypeEnum.Trailer) {
    SET_YOLO(state, true);
    if (state.searchFilter.database) {
      SET_MODEL(state, false);
    }
  }
};

export const SET_MAX_PAGES = (state, maxPages: number) => {
  state.searchFilter.maxPages = maxPages;
};
