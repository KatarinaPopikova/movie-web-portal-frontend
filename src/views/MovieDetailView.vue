<template>
  <div>
    <movie-detail :movie-id="this.movieId" />
    <poster-detection />
    <movie-reviews :movie-id="this.movieId" />
    <!--    <movie-images :movie-id="this.movieId" />-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovieDetail from "@/components/movie-detail-view/MovieDetail.vue";
import PosterDetection from "@/components/movie-detail-view/PosterDetection.vue";
import { mapActions } from "vuex";
import MovieTmdb from "@/api/tmdb-movie";
import MovieReviews from "@/components/movie-detail-view/MovieReviews.vue";

export default defineComponent({
  name: "MovieDetailView",
  components: { MovieReviews, PosterDetection, MovieDetail },

  data() {
    return {
      movieId: Number(this.$route.params.id),
    };
  },
  methods: {
    ...mapActions("movie", ["getMovieInfo"]),
  },
  mounted() {
    MovieTmdb.detail(this.movieId).then((response) => {
      this.getMovieInfo(response.data);
    });
  },
});
</script>

<style scoped></style>
