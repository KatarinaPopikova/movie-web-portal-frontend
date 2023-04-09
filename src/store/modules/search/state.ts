import { DetectTypeEnum, SearchFilter, SearchState } from "@/types";

const state: SearchState = {
  searchFilter: {
    categories: [],
    database: false,
    yolo: "v7",
    conf: 23,
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
