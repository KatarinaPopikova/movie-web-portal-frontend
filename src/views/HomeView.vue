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
      <div class="p-2 w-80 mt-4 flex flex-col items-center">
        <vue3-slider
          v-model="confidence"
          color="rgb(14 165 233)"
          track-color="#FEFEFE"
          tooltipText="%v%"
          :tooltip="true"
          :alwaysShowHandle="true"
          :height="12"
        />
        <span class="pt-2 font-bold">
          Confidence:
          <span class="text-sky-500 pl-1">{{ confidence }}%</span>
        </span>
      </div>
      <ToggleDatabase />
    </div>
    <div class="flex justify-evenly pt-4 items-center">
      <GenresPicker @update-genres="selectedGenres" />
      <search-input @search-movies="saveQuery" />
      <div class="w-80 flex items-center">
        <div class="pr-3 font-semibold">From:</div>
        <DatePicker @update-date="updateDateFrom" />
      </div>
      <div class="w-80 flex items-center">
        <div class="pr-3 font-semibold">To:</div>
        <DatePicker @update-date="updateDateTo" />
      </div>
    </div>
    <movie-poster-list :movies="shownMovies" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchInput from "@/components/home-view/search/multi-search-input/SearchInput.vue";
import MoviePosterList from "@/components/home-view/MoviePosterList.vue";
import DatePicker from "@/components/home-view/search/multi-search-input/DatePicker.vue";
import GenresPicker from "@/components/home-view/search/GenresPicker.vue";
import Movie from "@/api/tmdb-movie";
import { csfd } from "node-csfd-api";
import { mapActions, mapState } from "vuex";
import CategoriesPicker from "@/components/home-view/search/CategoriesPicker.vue";
import slider from "vue3-slider";
import ToggleDatabase from "@/components/home-view/search/ToggleDatabase.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    ToggleDatabase,
    CategoriesPicker,
    DatePicker,
    GenresPicker,
    SearchInput,
    MoviePosterList,
    "vue3-slider": slider,
  },
  data() {
    return {
      shownMovies: [] as unknown,
      genres: [],
      date_from: "" as string,
      date_to: "" as string,
      selectedCategories: [],
      query: "" as string,
      confidence: 23,
    };
  },
  computed: {
    ...mapState("movie", ["movies"]),
  },
  mounted() {
    Movie.searchTrailer("", "", "", "", "").then((response) => {
      console.log(response);
    });
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
    updateDateFrom(date: string) {
      this.date_from = date;
    },
    updateDateTo(date: string) {
      this.date_to = date;
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
