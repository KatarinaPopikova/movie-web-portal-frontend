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
          {{ movieInfo.overview }}
        </p>
        <div class="flex py-3 flex-wrap">
          <h4 class="font-semibold pr-2">Genres:</h4>
          <p
            v-for="genre in movieInfo.genres"
            :key="genre.id"
            class="pr-2 whitespace-nowrap"
          >
            | {{ genre.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MovieTmdb from "@/api/tmdb-movie";
import MovieImdb from "@/api/imdb-movie";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "MovieDetail",
  props: {
    movieId: {
      type: Number,
    },
  },

  data() {
    return {
      movieInfo: Object,
      imageUrl: "https://image.tmdb.org/t/p/original",
      imdbUrl: "https://www.imdb.com/title",
    };
  },

  computed: {
    ...mapState("movie", ["movie"]),
  },
  methods: {
    ...mapActions("movie", ["getMovieInfo"]),
  },
  mounted() {
    console.log(this.movie.detection);
    MovieTmdb.detail(this.movieId).then((response) => {
      this.movieInfo = response.data.credentials;
      // console.log("TMBD detail:");
      // console.log(response.data.credentials);
      // const imdb_id = response.data.credentials.imdb_id;
      // MovieImdb.detail(imdb_id).then((responseImdb) => {
      //   console.log("IMBD detail:");
      //   console.log(responseImdb.data.credentials);
      //
      //   window.eventBus.emit("load-imdb-images", imdb_id); //this.query
      // });
    });
  },
});
</script>

<style scoped></style>
