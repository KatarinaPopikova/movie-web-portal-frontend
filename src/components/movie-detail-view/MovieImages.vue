<template>
  <header>
    <h2 class="p-8 text-3xl font-bold">Gallery</h2>
  </header>

  <div>
    <header>
      <h2 class="pl-8 text-xl font-bold">TMDB</h2>
    </header>
    <div
      class="posters container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 p-6 gap-8"
    >
      <!--    TMDB posters-->
      <div
        v-for="(image, index) in imagesTmbd"
        :key="index"
        class="mx-auto mt-6 w-52"
      >
        <img
          class="rounded-lg shadow-lg"
          :src="`${imageUrlTmdb}${image.file_path}`"
          height="150px"
          :alt="`tmdb_poster_${index}`"
        />
      </div>
    </div>
  </div>

  <div>
    <header>
      <h2 class="pl-8 text-xl font-bold">IMDB</h2>
    </header>
    <div
      class="posters container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 p-6 gap-8"
    >
      <div
        v-for="(image, index) in imagesImdb"
        :key="index"
        class="mx-auto mt-6 w-52"
      >
        <img
          class="rounded-lg shadow-lg"
          :src="`${image.image}`"
          height="150px"
          :alt="`imdb_image_${index}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MovieTmdb from "@/api/tmdb-movie";
import MovieImdb from "@/api/imdb-movie";

export default defineComponent({
  name: "MovieImages",
  props: {
    movieId: {
      type: Number,
    },
  },

  data() {
    return {
      imagesTmbd: Object,
      imageUrlTmdb: "https://image.tmdb.org/t/p/original",
      imagesImdb: Object,
      postersImdb: Object,
    };
  },

  mounted() {
    MovieTmdb.images(this.movieId).then((responseTmdb) => {
      // console.log("TMDB images:");
      // console.log(responseTmdb.data.credentials);
      this.imagesTmbd = responseTmdb.data.credentials.posters;
    });
    window.eventBus.on("load-imdb-images", (imdb_id) => {
      if (imdb_id !== "") {
        // MovieImdb.images(imdb_id).then((responseImdb) => {
        //   console.log("IMDB images:");
        //   console.log(responseImdb.data.credentials.items);
        //   this.imagesImdb = responseImdb.data.credentials.items;
        // });
        // MovieImdb.posters(imdb_id).then((responseImdbPosters) => {
        //   console.log("IMDB posters:");
        //   console.log(responseImdbPosters.data.credentials.posters);
        //   this.postersImdb = responseImdbPosters.data.credentials.posters;
        // });
      }
    });
  },
});
</script>

<style scoped></style>
