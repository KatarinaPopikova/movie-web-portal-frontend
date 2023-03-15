<template>
  <div
    class="mx-auto mt-6 w-52 hover:scale-110 transition duration-300 ease-in-out"
  >
    <router-link :to="`/movie/${movieId}`" @click="save_movie_det">
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
import { mapActions } from "vuex";
import { getMovieV8 } from "@/store/modules/movie/actions";

export default defineComponent({
  name: "MoviePoster",
  props: {
    movieId: {
      type: Number,
    },
    imageUrl: {
      type: String,
    },
    detection: {
      type: Array,
    },
    yolov8: {
      type: Array,
    },
  },

  methods: {
    ...mapActions("movie", ["getMovie", "getMovieV8"]),
    save_movie_det() {
      this.getMovie(this.detection);
      this.getMovieV8(this.yolov8);
    },
  },
});
</script>

<style scoped></style>
