<template>
  <div
    class="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 p-6 gap-8"
  >
    <div v-for="movie in movies" :key="movie.id" class="h-full">
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
  <div class="block w-screen">
    <ListPagination
      :current="1"
      :total="100"
      :per-page="10"
      :page-range="2"
      @page-changed="show"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MoviePoster from "@/components/home-view/MoviePoster.vue";
import ListPagination from "@/components/home-view/ListPagination.vue";

export default defineComponent({
  name: "MoviePosterList",
  components: { ListPagination, MoviePoster },
  props: {
    movies: {
      type: Array,
    },
  },
  methods: {
    show() {
      console.log("no ok");
    },
  },
});
</script>

<style scoped></style>
