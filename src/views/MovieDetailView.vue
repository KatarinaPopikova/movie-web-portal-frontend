<template>
  <div>
    <movie-detail :api-db="this.apiDb" :movie-id="this.movieId" />

    <movieCast :poster-path="imageUrl" />
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
    <!--    <movie-images :movie-id="this.movieId" />-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovieDetail from "@/components/movie-detail-view/MovieDetail.vue";
import { mapActions, mapMutations, mapState } from "vuex";
import PosterModal from "@/components/movie-detail-view/modal/PosterModal.vue";
import TrailerModal from "@/components/movie-detail-view/modal/TrailerModal.vue";
import ReviewsModal from "@/components/movie-detail-view/modal/ReviewsModal.vue";
import MovieCast from "@/components/movie-detail-view/MovieCast.vue";
import { ImageMovieUrl } from "@/types";

export default defineComponent({
  name: "MovieDetailView",
  components: {
    MovieCast,
    ReviewsModal,
    TrailerModal,
    PosterModal,
    MovieDetail,
  },

  data() {
    return {
      movieId: String(this.$route.params.id),
      apiDb: String(this.$route.params.apiDb),
      imageUrl: `${ImageMovieUrl[String(this.$route.params.apiDb)].original}`,

      imdbUrl: "https://www.imdb.com/title",
    };
  },
  computed: {
    ...mapState("movie", ["movie", "detInfo"]),
  },
  async beforeMount() {
    await this.getMovieInfo([this.apiDb, this.movieId]);
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
