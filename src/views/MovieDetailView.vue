<template>
  <div>
    <movie-detail-info :movie-id="this.movieId" />
    <movie-images :movie-id="this.movieId" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MovieImages from "@/components/MovieDetailView/MovieImages";
import MovieDetailInfo from "@/components/MovieDetailView/MovieDetailInfo";

export default defineComponent({
  name: "MovieDetail",
  components: { MovieImages, MovieDetailInfo },

  data() {
    return {
      movieId: Number(this.$route.params.id),
    };
  },
});
</script>

<style scoped></style>
