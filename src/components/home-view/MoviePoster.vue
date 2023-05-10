<template>
  <div
    class="mx-auto lg:mt-4 lg:w-52 md:w-40 sm:w-32 w-28 hover:scale-110 transition duration-300 ease-in-out"
  >
    <router-link
      :to="`/movie/${apiDb}/${movieId}`"
      @click="saveMovieDetAndFetchDetail"
    >
      <img
        class="rounded-lg shadow-lg"
        :src="`${imageUrlFull}`"
        height="150px"
        :alt="`poster_${movieId}`"
      />
      <div class="relative">
        <h2 class="md:text-xl sm:text-sm font-bold mb-2">
          {{ movie.title }}
        </h2>
      </div>
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapMutations } from "vuex";
import { ImageMovieUrl } from "@/types";

export default defineComponent({
  name: "MoviePoster",
  props: {
    movie: {
      type: Object,
    },
    movieId: {
      type: String,
    },
    apiDb: {
      type: String,
      default: "TMDB",
    },
    imageUrl: {
      type: String,
      default: null,
    },
    youtubeUrl: {
      type: String,
      default: null,
    },
    detection: {
      type: Array,
    },
    detectionTrailer: {
      type: Array,
    },
  },
  computed: {
    imageUrlFull() {
      return `${ImageMovieUrl[this.apiDb].small}${this.imageUrl}`;
    },
  },

  methods: {
    ...mapMutations("movie", [
      "SET_MOVIE_DETECTION",
      "SET_MOVIE_TRAILER",
      "SET_MOVIE_POSTER",
    ]),
    saveMovieDetAndFetchDetail() {
      if (this.detectionTrailer) {
        this.SET_MOVIE_DETECTION(this.detectionTrailer);
      } else {
        this.SET_MOVIE_DETECTION(this.detection);
      }
      this.SET_MOVIE_TRAILER(this.youtubeUrl);
      this.SET_MOVIE_POSTER(this.imageUrl);
    },
  },
});
</script>

<style scoped></style>
