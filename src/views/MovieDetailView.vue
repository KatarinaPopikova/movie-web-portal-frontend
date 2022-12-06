<template>
  <div>
    <movie-detail :movie-id="this.movieId" />
    <poster-detection />
    <movie-images :movie-id="this.movieId" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovieImages from "@/components/movie-detail-view/MovieImages.vue";
import MovieDetail from "@/components/movie-detail-view/MovieDetail.vue";
import PosterDetection from "@/components/movie-detail-view/PosterDetection.vue";
import { mapActions } from "vuex";
import MovieTmdb from "@/api/tmdb-movie";

export default defineComponent({
  name: "MovieDetailView",
  components: { PosterDetection, MovieImages, MovieDetail },

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
      this.getMovieInfo(response.data.credentials);
    });
  },
});
</script>

<style scoped></style>
