<template>
  <div
    class="posters container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-6 gap-8"
    v-for="movie in this.movies"
    :key="movie.id"
  >
    <movie-poster :movie-id="movie.id" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MoviePoster from "@/components/MoviePoster.vue";

export default defineComponent({
  name: "MoviePosterList",
  components: { MoviePoster },
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    this.movies = [
      { id: 1, title: "hh", poster: "poster" },
      { id: 2, title: "hh", poster: "poster" },
      { id: 3, title: "hh", poster: "poster" },
      { id: 4, title: "hh", poster: "poster" },
    ];
  },
});
</script>

<style scoped></style>
