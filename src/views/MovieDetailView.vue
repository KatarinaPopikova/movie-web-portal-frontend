<template>
  <div>
    <movie-detail :api-db="this.apiDb" :movie-id="this.movieId" />
    <poster-detection />
    <movie-reviews :api-db="this.apiDb" :movie-id="this.movieId" />
    <!--    <movie-images :movie-id="this.movieId" />-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovieDetail from "@/components/movie-detail-view/MovieDetail.vue";
import PosterDetection from "@/components/movie-detail-view/PosterDetection.vue";
import MovieReviews from "@/components/movie-detail-view/MovieReviews.vue";

export default defineComponent({
  name: "MovieDetailView",
  components: { MovieReviews, PosterDetection, MovieDetail },

  data() {
    return {
      movieId: String(this.$route.params.id),
      apiDb: String(this.$route.params.apiDb),
    };
  },
});
</script>

<style scoped></style>
