<template>
  <div
    class="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 p-6 gap-8"
  >
    <div v-for="movie in movies" :key="movie.id">
      <movie-poster
        :movie="movie"
        :movie-id="String(movie.id)"
        :api-db="movie.apiDb"
        :image-url="`${movie.poster_path}`"
        :youtube-url="`${movie.trailer_link}`"
        :detection="movie.det"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MoviePoster from "@/components/home-view/MoviePoster.vue";

export default defineComponent({
  name: "MoviePosterList",
  components: { MoviePoster },
  props: {
    movies: {
      type: Array,
    },
  },
});
</script>

<style scoped></style>
