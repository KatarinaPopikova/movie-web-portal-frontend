<template>
  <div
    class="posters container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-6 gap-8"
    v-for="movie in movies"
    :key="movie.id"
  >
    <movie-poster
      :movie-id="movie.id"
      :image-url="`${imageUrl}${movie.poster_path}`"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MoviePoster from "@/components/home-view/MoviePoster.vue";
import Movie from "@/api/movie";

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
    window.eventBus.on("search-movies", (query) => {
      if (query !== "") {
        console.log(query);
        Movie.searchTitle(query).then((response) => {
          this.movies = response.data.credentials.results;
          console.log(response.data.credentials.results);
        });
      } else {
        this.movies = null;
      }
    });
  },
});
</script>

<style scoped></style>
