<template>
  <div
    class="mx-auto mt-6 w-52 hover:scale-110 transition duration-300 ease-in-out"
  >
    <router-link
      :to="`/movie/${apiDb}/${movieId}`"
      @click="saveMovieDetAndFetchDetail"
    >
      <img
        class="rounded-lg shadow-lg"
        :src="`${imageUrl}`"
        height="150px"
        :alt="`poster_${movieId}`"
      />
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapMutations } from "vuex";

export default defineComponent({
  name: "MoviePoster",
  props: {
    movieId: {
      type: String,
    },
    apiDb: {
      type: String,
      default: "TMDB",
    },
    imageUrl: {
      type: String,
    },
    detection: {
      type: Array,
    },
  },

  methods: {
    ...mapMutations("movie", ["SET_MOVIE_DETECTION"]),
    saveMovieDetAndFetchDetail() {
      this.SET_MOVIE_DETECTION(this.detection);
    },
  },
});
</script>

<style scoped></style>
