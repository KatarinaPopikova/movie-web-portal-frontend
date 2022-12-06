<template>
  <div class="home">
    <search-input @search-movies="searchMovies" />
    <div class="flex justify-evenly pt-4">
      <GenresPicker @update-genres="selectedGenres" />
      <div class="w-80">
        <DatePicker @update-date="updateDateFrom" />
      </div>
      <div class="w-80">
        <DatePicker @update-date="updateDateTo" />
      </div>
    </div>
    <movie-poster-list :movies="movies2" />
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

export default defineComponent({
  name: "HomeView",
  components: {
    DatePicker,
    GenresPicker,
    SearchInput,
    MoviePosterList,
  },
  data() {
    return {
      movies2: [] as unknown,
      genres: [],
      date_from: "" as string,
      date_to: "" as string,
    };
  },
  computed: {
    ...mapState("movie", ["movies"]),
  },
  mounted() {
    if (this.movies.length > 0) {
      this.movies2 = this.movies;
    } else {
      Movie.search("title", "car", "", "", "").then((response) => {
        this.movies2 = response.data.credentials.results;
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
    searchMovies(searchType: string, query: string) {
      if (query !== "") {
        Movie.search(
          searchType,
          query,
          this.genres.join(","),
          this.date_from,
          this.date_to
        ).then((response) => {
          console.log(response);
          this.movies = response.data.credentials.results;
          this.getMovies(this.movies);
        });

        // csfd.search(query).then((search) => {
        //   console.log("CSFD");
        //   console.log(search);
        // });
      } else {
        this.movies = null;
      }
    },
  },
});
</script>
