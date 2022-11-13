<template>
  <div class="home">
    <search-input />
    <div class="flex justify-evenly pt-4">
      <GenresPicker @update-genres="selectedGenres" />
      <div class="w-80">
        <DatePicker @update-date="updateDateFrom" />
      </div>
      <div class="w-80">
        <DatePicker @update-date="updateDateTo" />
      </div>
    </div>
    <movie-poster-list />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchInput from "@/components/home-view/search/multi-search-input/SearchInput.vue";
import MoviePosterList from "@/components/home-view/MoviePosterList.vue";
import DatePicker from "@/components/home-view/search/multi-search-input/DatePicker.vue";
import GenresPicker from "@/components/home-view/search/GenresPicker.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    DatePicker,
    GenresPicker,
    SearchInput,
    MoviePosterList,
  },
  data() {
    return {
      genres: [],
      date_from: "" as string,
      date_to: "" as string,
    };
  },
  methods: {
    selectedGenres(genres: []) {
      this.genres = genres;
    },
    updateDateFrom(date: string) {
      this.date_from = date;
    },
    updateDateTo(date: string) {
      this.date_to = date;
      console.log(this.$data);
    },
  },
});
</script>
