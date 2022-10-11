<template>
  <div class="poster mx-4 mt-6 w-2/5">
    <router-link :to="`/movie/${movieId}`">
      <img
        class="poster rounded-lg w-2/5"
        :src="`${imageUrl}`"
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
