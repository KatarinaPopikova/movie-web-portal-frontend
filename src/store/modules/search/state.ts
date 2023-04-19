import {
  DetectTypeEnum,
  YoloEnum,
  SearchFilter,
  SearchState,
  MovieDatabaseEnum,
  ImdbGenres,
} from "@/types";

const state: SearchState = {
  searchFilter: {
    categories: [],
    database: true,
    yolo: YoloEnum.v7,
    confidence: 25,
    movieDatabase: MovieDatabaseEnum.tmdb,
    genres: [],
    query: "",
    dateFrom: "",
    dateTo: "",
    detectType: DetectTypeEnum.Poster,
    maxPages: 5,
  } as SearchFilter,
  allCategories: [],
  allGenres: { TMDB: [], IMDB: ImdbGenres } as Partial<{
    TMDB: any[];
    IMDB: typeof ImdbGenres;
  }>,
};

export default state;
