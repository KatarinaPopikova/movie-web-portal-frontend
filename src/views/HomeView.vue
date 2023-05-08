<template>
  <div>
    <LoadingLottie />
  </div>
  <div class="home">
    <FirstLine />
    <SecondLine />
    <ThirdLine />
    <FourthLine />
    <div class="flex justify-center content-center pt-4">
      <button
        @click="searchMovies"
        class="flex items-center justify-center w-80 bg-sky-500 hover:bg-sky-600 text-white py-4 px-4 rounded"
      >
        <span class="mr-2 text-xl">SEARCH</span>
        <font-awesome-icon
          icon="fa-solid fa-magnifying-glass"
          class="ml-2 h-7 w-7"
        />
      </button>
    </div>
    <movie-poster-list :movies="shownMovies" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MoviePosterList from "@/components/home-view/MoviePosterList.vue";
import Movie from "@/api/tmdb-movie";
import { mapActions, mapState } from "vuex";
import LoadingLottie from "@/components/LoadingLottie.vue";
import FirstLine from "@/components/home-view/search/FirstLine.vue";
import SecondLine from "@/components/home-view/search/SecondLine.vue";
import ThirdLine from "@/components/home-view/search/ThirdLine.vue";
import FourthLine from "@/components/home-view/search/FourthLine.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    FourthLine,
    ThirdLine,
    SecondLine,
    FirstLine,
    LoadingLottie,
    MoviePosterList,
  },
  computed: {
    ...mapState("movie", ["movies"]),
  },
  data() {
    return {
      shownMovies: this.movies,
    };
  },

  async mounted() {
    if (this.movies.length > 0) {
      this.shownMovies = this.movies;
    } else {
      this.shownMovies = await Movie.popular();
    }
  },

  methods: {
    ...mapActions("movie", ["getMovies"]),

    async searchMovies(query: string) {
      if (query !== "" || this.categories.length > 0) {
        await this.getMovies();
        this.shownMovies = this.movies;

        // csfd.search(query).then((search) => {
        //   console.log("CSFD");
        //   console.log(search);
        // });
      }
    },
  },
});
</script>
