<template>
  <div class="home">
    <search-input />
    <movie-poster-list />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchInput from "@/components/home-view/SearchInput.vue";
import MoviePosterList from "@/components/home-view/MoviePosterList.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    SearchInput,
    MoviePosterList,
  },
});
</script>
