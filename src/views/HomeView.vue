<template>
  <div class="home">
    <div class="flex items-center w-[500px] justify-between m-auto">
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
import GenresPicker from "@/components/home-view/search/GenresPicker.vue";
import Movie from "@/api/tmdb-movie";
import { csfd } from "node-csfd-api";
import { mapActions, mapState } from "vuex";
import CategoriesPicker from "@/components/home-view/search/CategoriesPicker.vue";
import ToggleDatabase from "@/components/home-view/search/ToggleDatabase.vue";
import DateFromToPickers from "@/components/home-view/search/multi-search-input/DateFromToPickers.vue";
import ConfidenceSlider from "@/components/home-view/search/sliders/ConfidenceSlider.vue";
import PagesSlider from "@/components/home-view/search/sliders/PagesSlider.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    PagesSlider,
    ConfidenceSlider,
    DateFromToPickers,
    ToggleDatabase,
    CategoriesPicker,
    GenresPicker,
    SearchInput,
    MoviePosterList,
  },
  data() {
    return {
      shownMovies: [] as unknown,
      genres: [],
      selectedCategories: [],
      query: "" as string,
    };
  },
  computed: {
    ...mapState("movie", ["movies"]),
    ...mapState("search", ["searchFilter"]),
  },
  mounted() {
    // Movie.searchTrailer("", "", "", "", "").then((response) => {
    //   console.log(response);
    // });
    if (this.movies.length > 0) {
      this.shownMovies = this.movies;
    } else {
      Movie.popular().then((response) => {
        this.shownMovies = response.data.credentials.results;
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
    searchMovies(query: string) {
      if (query !== "" || this.categories.length > 0) {
        Movie.search(
          this.query,
          this.genres.join(","),
          this.selectedCategories.join(","),
          this.confidence.toString(),
          this.date_from,
          this.date_to
        ).then((response) => {
          console.log(response);
          this.shownMovies = response.data.credentials.results;
          this.getMovies(this.shownMovies);
        });

        // csfd.search(query).then((search) => {
        //   console.log("CSFD");
        //   console.log(search);
        // });
      } else {
        Movie.popular().then((response) => {
          this.shownMovies = response.data.credentials.results;
        });
      }
    },
  },
});
</script>
