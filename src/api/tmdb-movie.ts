import { Api } from "./axios";

const END_POINT = "tmdb/movies";

export default {
  async filteredMovies(searchFilter) {
    const genresString = searchFilter.genres.join(",");
    const categoriesString = searchFilter.categories.join(",");

    try {
      const response = await Api.get(
        `${END_POINT}?categories=${categoriesString}&database=${searchFilter.database}&yolo=${searchFilter.yolo}&confidence=${searchFilter.confidence}&movieDatabase=${searchFilter.movieDatabase}&genres=${genresString}&query=${searchFilter.query}&dateFrom=${searchFilter.dateFrom}&dateTo=${searchFilter.dateTo}&detectType=${searchFilter.detectType}&maxPages=${searchFilter.maxPages}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  detail(id: number) {
    return Api.get(`${END_POINT}/${id}`);
  },

  popular() {
    return Api.get(`${END_POINT}/popular`);
  },

  search(
    query: string,
    genres: string,
    categories: string,
    confidence: string,
    date_from: string,
    date_to: string
  ) {
    if (categories === "") {
      if (date_to === "" && date_from === "" && genres === "")
        return this.searchMoviesWithTitle(query);
      else return this.searchMovies(query, genres, date_from, date_to);
    } else {
      return this.searchPoster(
        query,
        genres,
        categories,
        confidence,
        date_from,
        date_to
      );
    }
  },

  searchMoviesWithTitle(query: string) {
    return Api.get(`${END_POINT}/searchMoviesWithTitle?query=${query}`);
  },

  searchMovies(
    query: string,
    genres: string,
    date_from: string,
    date_to: string
  ) {
    return Api.get(
      `${END_POINT}/searchMovies?query=${query}&genres=${genres}&date_from=${date_from}&date_to=${date_to}`
    );
  },

  searchPoster(
    query: string,
    genres: string,
    categories: string,
    confidence: string,
    date_from: string,
    date_to: string
  ) {
    return Api.get(
      `${END_POINT}/searchPoster?query=${query}&genres=${genres}&date_from=${date_from}&date_to=${date_to}&categories=${categories}&confidence=${confidence}`
    );
  },

  searchTrailer(
    query: string,
    genres: string,
    categories: string,
    date_from: string,
    date_to: string
  ) {
    return Api.get(
      `${END_POINT}/searchTrailer?query=${query}&genres=${genres}&date_from=${date_from}&date_to=${date_to}&categories=${categories}`
    );
  },

  images(movie_id: number) {
    return Api.get(`${END_POINT}/images/${movie_id}`);
  },

  reviews(movie_id: number, page: number) {
    return Api.get(`${END_POINT}/reviews/${movie_id}?page=${page}`);
  },
};
