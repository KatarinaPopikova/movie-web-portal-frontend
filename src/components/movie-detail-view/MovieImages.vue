<template>
  <header>
    <h2 class="p-8 text-3xl font-bold">Gallery</h2>
  </header>
  <div
    class="posters container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 p-6 gap-8"
  >
    <div
      v-for="(image, index) in images"
      :key="index"
      class="mx-auto mt-6 w-52"
    >
      <img
        class="rounded-lg shadow-lg"
        :src="`${imageUrl}${image.file_path}`"
        height="150px"
        :alt="`poster_${index}`"
      />
    </div>
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
