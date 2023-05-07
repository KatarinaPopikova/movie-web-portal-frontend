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
  model: Modelv8Enum;
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
  allGenres: Partial<{ TMDB: any[]; IMDB: typeof ImdbGenres }>;
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

export enum Modelv8Enum {
  nano = "Nano",
  large = "Large",
}

export enum DatabaseEnum {
  online = "Online",
  db = "Database",
}

export enum MovieDatabaseEnum {
  imdb = "IMDB",
  tmdb = "TMDB",
}

export const ImageMovieUrl = {
  IMDB: {
    small: "",
    original: "",
  },
  TMDB: {
    small: "https://image.tmdb.org/t/p/w300",
    original: "https://image.tmdb.org/t/p/original",
  },
} as const;

export const ImdbGenres = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film-Noir",
  "Game-Show",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "News",
  "Romance",
  "Sport",
  "Talk-Show",
  "Thriller",
  "War",
  "Western",
] as const;
