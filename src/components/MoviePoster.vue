<template>
  <div class="poster mx-4 mt-6 w-2/5">
    <router-link :to="`/movie/${this.movieId}`">
      <img
        class="poster rounded-lg w-2/5"
        src="https://image.tmdb.org/t/p/original/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg"
        alt="Poster"
        height="150px"
      />
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MoviePoster",
  props: {
    movieId: {
      type: Number,
    },
  },
});
</script>

<style scoped></style>
