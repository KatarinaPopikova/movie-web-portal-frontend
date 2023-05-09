<template>
  <div class="flex lg:flex-row flex-col">
    <div class="w-[900px]">
      <img
        class="rounded-lg m-5 shadow-lg"
        :src="`${imageUrl}${movieInfo.backdrop_path}`"
        height="150px"
        alt="backdrop_path"
      />
    </div>
    <div class="m-8 lg:w-fit">
      <a :href="`${imdbUrl}/${movieInfo.imdb_id}`">
        <header>
          <h1 class="pb-5 text-4xl font-bold">
            {{ movieInfo.original_title }}
          </h1>
        </header>
      </a>

      <div>
        <p>
          {{ movieInfo.plot }}
        </p>
        <div class="flex py-3 flex-wrap">
          <h4 class="font-semibold pr-2">Genres:</h4>
          <p
            v-for="(genre, index) in movieInfo.genres"
            :key="index"
            class="pr-2 whitespace-nowrap"
          >
            | {{ genre }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";
import { ImageMovieUrl } from "@/types";

export default defineComponent({
  name: "MovieDetail",
  components: {},
  props: {
    movieId: {
      type: String,
    },
    apiDb: {
      type: String,
      default: "TMDB",
    },
  },

  data() {
    return {
      imageUrl: `${ImageMovieUrl[this.apiDb].original}`,

      imdbUrl: "https://www.imdb.com/title",
    };
  },

  computed: {
    ...mapState("movie", ["movie"]),
    movieInfo() {
      return this.movie.info ? this.movie.info : {};
    },
  },
});
</script>

<style scoped></style>
