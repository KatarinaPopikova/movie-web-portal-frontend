<template>
  <div
    class="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 p-6 gap-8 max-w-screen-2xl mx-auto"
  >
    <div
      v-for="movie in movies?.slice(
        perPage * current - perPage,
        perPage * current
      )"
      :key="movie.id"
      class="h-full"
    >
      <movie-poster
        :movie="movie"
        :movie-id="String(movie.id)"
        :api-db="movie.apiDb"
        :image-url="`${movie.poster_path}`"
        :youtube-url="`${movie.trailer_link}`"
        :detection="movie.det"
        :detection-trailer="movie.trailer_objects"
      />
    </div>
  </div>
  <div class="block w-full">
    <ListPagination
      :current="current"
      :total="total"
      :per-page="perPage"
      :page-range="2"
      @page-changed="show"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MoviePoster from "@/components/home-view/MoviePoster.vue";
import ListPagination from "@/components/home-view/ListPagination.vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "MoviePosterList",
  components: { ListPagination, MoviePoster },
  data() {
    return {
      current: 1,
      perPage: 50,
    };
  },
  computed: {
    ...mapState("movie", ["movies"]),

    total() {
      return this.movies?.length;
    },
  },
  methods: {
    show(value) {
      this.current = value;
    },
  },
});
</script>

<style scoped></style>
