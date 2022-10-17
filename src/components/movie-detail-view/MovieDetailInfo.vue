<template>
  <header>
    <h1>
      {{ movieInfo.original_title }}
    </h1>
  </header>
  <div>
    <p>
      {{ movieInfo.overview }}
    </p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Movie from "@/api/movie";

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
    };
  },

  mounted() {
    Movie.detail(this.movieId).then((response) => {
      this.movieInfo = response.data.credentials;
      console.log(response.data.credentials);
    });
  },
});
</script>

<style scoped></style>
