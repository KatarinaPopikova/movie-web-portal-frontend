<template>
  <div class="relative">
    <movie-detail :api-db="this.apiDb" :movie-id="this.movieId" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovieDetail from "@/components/movie-detail-view/MovieDetail.vue";
import { mapActions, mapMutations } from "vuex";

export default defineComponent({
  name: "MovieDetailView",
  components: {
    MovieDetail,
  },

  data() {
    return {
      movieId: String(this.$route.params.id),
      apiDb: String(this.$route.params.apiDb),
    };
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
