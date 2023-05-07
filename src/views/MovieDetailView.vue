<template>
  <div>
    <movie-detail :api-db="this.apiDb" :movie-id="this.movieId" />
    <poster-detection :api-db="this.apiDb" />
    <movie-reviews :reviews="reviews" />
    <movie-trailer />
    <!--    <movie-images :movie-id="this.movieId" />-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovieDetail from "@/components/movie-detail-view/MovieDetail.vue";
import MovieReviews from "@/components/movie-detail-view/MovieReviews.vue";
import PosterDetection from "@/components/movie-detail-view/PosterDetection.vue";
import { mapActions, mapMutations, mapState } from "vuex";
import MovieTrailer from "@/components/movie-detail-view/MovieTrailer.vue";

export default defineComponent({
  name: "MovieDetailView",
  components: { MovieTrailer, PosterDetection, MovieReviews, MovieDetail },

  data() {
    return {
      movieId: String(this.$route.params.id),
      apiDb: String(this.$route.params.apiDb),
      reviews: Object,
    };
  },
  computed: {
    ...mapState("movie", ["movie"]),
  },
  async beforeMount() {
    await this.getMovieInfo([this.apiDb, this.movieId]);
    this.reviews = this.movie.info.reviews;
  },
  beforeUnmount() {
    this.removeData();
  },
  methods: {
    ...mapActions("movie", ["getMovieInfo"]),
    ...mapMutations("movie", ["SET_MOVIE_DETECTION", "SET_MOVIE_INFO"]),

    removeData() {
      this.removeDet();
      this.removeInfo();
    },
    removeDet() {
      this.SET_MOVIE_DETECTION([]);
    },
    removeInfo() {
      this.SET_MOVIE_INFO([]);
    },
  },
});
</script>

<style scoped></style>
