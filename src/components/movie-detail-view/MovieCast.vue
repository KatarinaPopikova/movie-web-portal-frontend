<template>
  <div class="flex flex-wrap justify-center my-10">
    <div
      v-for="(cast, index) in this.movieInfo.cast?.slice(0, 5)"
      :key="index"
      class="px-4 w-52 justify-centers items-center flex flex-col"
    >
      <img
        class="w-48 h-48 rounded-full object-cover"
        :src="`${posterPath}${cast.profile_path}`"
        :alt="`cast_image_${index}`"
      />

      <p class="font-bold">{{ cast.name }}</p>
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
});
</script>

<style scoped></style>
