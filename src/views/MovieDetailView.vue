<template>
  <div>
    <movie-detail :api-db="this.apiDb" :movie-id="this.movieId" />

    <div class="mx-auto max-w-xl">
      <div class="flex justify-around">
        <poster-modal
          :api-db="this.apiDb"
          v-if="detInfo.detType === 'Poster' && movie.detections.length > 0"
        />
        <trailer-modal
          v-if="
            movie.trailer &&
            detInfo.detType === 'Trailer' &&
            movie.detections.length > 0
          "
        />
        <reviews-modal />
      </div>
    </div>
    <movie-reviews :reviews="reviews" />
    <!--    <movie-images :movie-id="this.movieId" />-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovieDetail from "@/components/movie-detail-view/MovieDetail.vue";
import MovieReviews from "@/components/movie-detail-view/MovieReviews.vue";
import { mapActions, mapMutations, mapState } from "vuex";
import PosterModal from "@/components/movie-detail-view/modal/PosterModal.vue";
import TrailerModal from "@/components/movie-detail-view/modal/TrailerModal.vue";
import ReviewsModal from "@/components/movie-detail-view/modal/ReviewsModal.vue";

export default defineComponent({
  name: "MovieDetailView",
  components: {
    ReviewsModal,
    TrailerModal,
    PosterModal,
    MovieReviews,
    MovieDetail,
  },

  data() {
    return {
      movieId: String(this.$route.params.id),
      apiDb: String(this.$route.params.apiDb),
      reviews: Object,
    };
  },
  computed: {
    ...mapState("movie", ["movie", "detInfo"]),
  },
  async beforeMount() {
    await this.getMovieInfo([this.apiDb, this.movieId]);
    this.reviews = this.movie.info.reviews;
  },
  beforeUnmount() {
    this.removeData();
    console.log(this.movie.trailer);
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
