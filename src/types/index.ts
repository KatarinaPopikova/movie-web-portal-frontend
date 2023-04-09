export interface SearchFilter {
  categories: string[];
  database: boolean;
  yolo: string;
  conf: number;
  movieDatabase: string;
  genres: string[];
  query: string;
  dateFrom: string;
  dateTo: string;
}

export interface SearchState {
  searchFilter: SearchFilter;
  allCategories: string[];
  allGenres: string[];
}

export interface RootState {
  loading: boolean;
  error: string | null;
}
