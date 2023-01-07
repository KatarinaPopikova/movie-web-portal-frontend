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
  },

  methods: {
    ...mapActions("movie", ["getMovie"]),
    save_movie_det() {
      this.getMovie(this.detection);
    },
  },
});
</script>

<style scoped></style>
