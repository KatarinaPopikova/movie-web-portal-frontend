import {
  DetectTypeEnum,
  YoloEnum,
  SearchFilter,
  SearchState,
  MovieDatabaseEnum,
} from "@/types";

const state: SearchState = {
  searchFilter: {
    categories: [],
    database: true,
    yolo: YoloEnum.v7,
    confidence: 23,
    movieDatabase: MovieDatabaseEnum.tmdb,
    genres: [],
    query: "",
    dateFrom: "",
    dateTo: "",
    detectType: DetectTypeEnum.Poster,
    maxPages: 10,
  } as SearchFilter,
  allCategories: [],
  allGenres: [],
};

export default state;
