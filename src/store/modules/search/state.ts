import { DetectTypeEnum, YoloEnum, SearchFilter, SearchState } from "@/types";

const state: SearchState = {
  searchFilter: {
    categories: [],
    database: true,
    yolo: YoloEnum.v7,
    confidence: 23,
    movieDatabase: "tmdb",
    genres: [],
    query: "",
    dateFrom: "",
    dateTo: "",
    detectType: DetectTypeEnum.Poster,
  } as SearchFilter,
  allCategories: [],
  allGenres: [],
};

export default state;
