<template>
  <div
    class="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 p-6 gap-8"
  >
    <div v-for="movie in movies" :key="movie.id">
      <movie-poster
        :movie-id="movie.id"
        :image-url="`${imageUrl}${movie.poster_path}`"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MoviePoster from "@/components/home-view/MoviePoster.vue";
import Movie from "@/api/tmdb-movie";

export default defineComponent({
  name: "MoviePosterList",
  components: { MoviePoster },
  data() {
    return {
      movies: [],
      // eslint-disable-next-line no-undef
      imageUrl: "https://image.tmdb.org/t/p/original",
    };
  },
  mounted() {
    Movie.searchTitle("car").then((response) => {
      this.movies = response.data.credentials.results;
    });

    window.eventBus.on("search-movies", (query) => {
      if (query !== "") {
        Movie.searchTitle(query).then((response) => {
          this.movies = response.data.credentials.results;
        });
      } else {
        this.movies = null;
      }
    });
  },
});
</script>

<style scoped></style>
