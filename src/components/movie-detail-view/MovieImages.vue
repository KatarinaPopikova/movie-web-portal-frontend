<template>
  <div
    class="posters container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-6 gap-8"
    v-for="(image, index) in images"
    :key="index"
  >
    <img
      class="poster rounded-lg w-2/5"
      :src="`${imageUrl}${image.file_path}`"
      height="150px"
      :alt="`poster_${index}`"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Movie from "@/api/movie";

export default defineComponent({
  name: "MovieImages",
  props: {
    movieId: {
      type: Number,
    },
  },

  data() {
    return {
      images: Object,
      imageId: 0,
      imageUrl: "https://image.tmdb.org/t/p/original",
    };
  },

  mounted() {
    Movie.images(this.movieId).then((response) => {
      this.images = response.data.credentials.posters;
      console.log(response.data.credentials);
    });
  },
});
</script>

<style scoped></style>
