//INTERFACE
export interface SearchFilter {
  categories: string[];
  database: boolean;
  yolo: YoloEnum;
  conf: number;
  movieDatabase: string;
  genres: string[];
  query: string;
  dateFrom: string;
  dateTo: string;
  detectType: DetectTypeEnum;
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

// ENUM

export enum DetectTypeEnum {
  Trailer = "Trailer",
  Poster = "Poster",
}

export enum YoloEnum {
  v7 = "YOLOv7",
  v8 = "YOLOv8",
}
