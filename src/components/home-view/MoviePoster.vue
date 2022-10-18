<template>
  <div class="mx-auto mt-6 w-52">
    <router-link :to="`/movie/${movieId}`">
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

export default defineComponent({
  name: "MoviePoster",
  props: {
    movieId: {
      type: Number,
    },
    imageUrl: {
      type: String,
    },
    movie: {
      type: Object,
    },
  },
});
</script>

<style scoped></style>
