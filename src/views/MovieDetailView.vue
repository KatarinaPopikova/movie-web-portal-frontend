<template>
  <div>
    <movie-detail :movie-id="this.movieId" />
    <movie-images :movie-id="this.movieId" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MovieImages from "@/components/movie-detail-view/MovieImages";
import MovieDetail from "@/components/movie-detail-view/MovieDetail";

export default defineComponent({
  name: "MovieDetailView",
  components: { MovieImages, MovieDetail },

  data() {
    return {
      movieId: Number(this.$route.params.id),
    };
  },
});
</script>

<style scoped></style>
