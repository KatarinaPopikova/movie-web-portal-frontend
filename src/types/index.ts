//INTERFACE

export interface RootState {
  loading: boolean;
  error: string | null;
  movieModule: MovieState;
  searchModule: SearchState;
}

export interface SearchFilter {
  categories: string[];
  database: boolean;
  yolo: YoloEnum;
  confidence: number;
  movieDatabase: string;
  genres: string[];
  query: string;
  dateFrom: string;
  dateTo: string;
  detectType: DetectTypeEnum;
  maxPages: number;
}

export interface MovieState {
  movies: any;
  movie: {
    detections: any;
    info: any;
  };
}

export interface SearchState {
  searchFilter: SearchFilter;
  allCategories: string[];
  allGenres: string[];
}

// ENUM

export enum DetectTypeEnum {
  Trailer = "Trailer",
  Poster = "Poster",
}

export enum YoloEnum {
  v7 = "YOLOv7",
  v8 = "YOLOv8",
}

export enum DatabaseEnum {
  online = "Online",
  db = "Database",
}

export enum MovieDatabaseEnum {
  csfd = "ČSFD",
  tmdb = "TMDB",
}
