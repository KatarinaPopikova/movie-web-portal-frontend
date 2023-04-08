import { SearchFilter } from "@/types";

export default {
  searchFilter: {
    categories: [],
    database: false,
    yolo: "v7",
    conf: 23,
    movieDatabase: "tmdb",
    genres: [],
    query: "",
    from: "",
    to: "",
  } as SearchFilter,
  allCategories: [] as string[],
  allGenres: [] as string[],
};
