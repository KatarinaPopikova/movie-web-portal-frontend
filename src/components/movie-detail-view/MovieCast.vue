<template>
  <div class="flex flex-wrap justify-center py-10">
    <div
      v-for="(cast, index) in this.movieInfo.cast?.slice(0, 5)"
      :key="index"
      class="sm:px-4 px-0.5 sm:w-56 w-36 py-0.5 justify-centers items-center flex flex-col"
    >
      <img
        class="sm:w-48 sm:h-48 w-24 h-24 rounded-full object-cover"
        :src="imageUrlFull(cast.profile_path)"
        :alt="`cast_image_${index}`"
      />

      <p class="font-bold text-white text-xl text-center">{{ cast.name }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "MovieCast",
  props: {
    posterPath: {
      type: String,
    },
  },
  computed: {
    ...mapState("movie", ["movie"]),
    movieInfo() {
      return this.movie.info ? this.movie.info : {};
    },
  },

  methods: {
    imageUrlFull(value) {
      const url = value;

      if (
        url === "null" ||
        url === "undefined" ||
        url === null ||
        url === undefined
      ) {
        return "https://imdb-api.com/images/original/nopicture.jpg";
      }
      return `${this.posterPath}${url}`;
    },
  },
});
</script>

<style scoped></style>
