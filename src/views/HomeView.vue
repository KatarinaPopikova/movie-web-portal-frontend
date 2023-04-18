<template>
  <div>
    <LoadingLottie />
  </div>
  <div class="home">
    <div @click="fillDatabase" class="hover:cursor-pointer">
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="pr-4 h-8 w-8 text-sky-500"
      />
    </div>
    <div class="flex items-center w-[1200px] justify-between m-auto">
      <MovieDatabasePicker />
      <CategoriesPicker @selected-categories="saveSelectedCategories" />

      <div @click="searchMovies" class="hover:cursor-pointer">
        <font-awesome-icon
          icon="fa-solid fa-magnifying-glass"
          class="pr-4 h-8 w-8 text-sky-500"
        />
      </div>
    </div>
    <div class="flex justify-evenly">
      <ConfidenceSlider />
      <PagesSlider />
      <ToggleDatabase />
    </div>
    <div class="flex justify-evenly pt-4 items-center">
      <GenresPicker @update-genres="selectedGenres" />
      <search-input @search-movies="saveQuery" />
      <DateFromToPickers />
    </div>
    <movie-poster-list :movies="shownMovies" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchInput from "@/components/home-view/search/multi-search-input/SearchInput.vue";
import MoviePosterList from "@/components/home-view/MoviePosterList.vue";
import GenresPicker from "@/components/home-view/search/pickers/GenresPicker.vue";
import Movie from "@/api/tmdb-movie";
import IMovie from "@/api/imdb-movie";
import { csfd } from "node-csfd-api";
import { mapActions, mapState } from "vuex";
import CategoriesPicker from "@/components/home-view/search/pickers/CategoriesPicker.vue";
import ToggleDatabase from "@/components/home-view/search/ToggleDatabase.vue";
import DateFromToPickers from "@/components/home-view/search/multi-search-input/DateFromToPickers.vue";
import ConfidenceSlider from "@/components/home-view/search/sliders/ConfidenceSlider.vue";
import PagesSlider from "@/components/home-view/search/sliders/PagesSlider.vue";
import MovieDatabasePicker from "@/components/home-view/search/pickers/MovieDatabasePicker.vue";
import LoadingLottie from "@/components/LoadingLottie.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    LoadingLottie,
    MovieDatabasePicker,
    PagesSlider,
    ConfidenceSlider,
    DateFromToPickers,
    ToggleDatabase,
    CategoriesPicker,
    GenresPicker,
    SearchInput,
    MoviePosterList,
  },
  computed: {
    ...mapState("movie", ["movies"]),
  },
  data() {
    return {
      shownMovies: this.movies,
      genres: [],
      selectedCategories: [],
      query: "" as string,
    };
  },

  mounted() {
    // Movie.searchTrailer("", "", "", "", "").then((response) => {
    //   console.log(response);
    // });
    if (this.movies.length > 0) {
      this.shownMovies = this.movies;
    } else {
      Movie.popular().then((response) => {
        this.shownMovies = response.data;
      });
    }
  },

  methods: {
    ...mapActions("movie", ["getMovies"]),
    selectedGenres(genres: []) {
      this.genres = genres;
    },
    saveQuery(searchType, query) {
      this.query = query;
    },
    saveSelectedCategories(selectedCategories: []) {
      this.selectedCategories = selectedCategories;
    },
    async searchMovies(query: string) {
      if (query !== "" || this.categories.length > 0) {
        await this.getMovies();
        this.shownMovies = this.movies;

        // csfd.search(query).then((search) => {
        //   console.log("CSFD");
        //   console.log(search);
        // });
      } else {
        Movie.popular().then((response) => {
          this.shownMovies = response.data;
        });
      }
    },
    fillDatabase() {
      IMovie.fillDatabase();
    },
  },
});
</script>
