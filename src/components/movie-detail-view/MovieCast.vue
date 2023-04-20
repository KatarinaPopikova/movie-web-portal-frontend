<template>
  <div
    class="posters container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 p-6 gap-8"
  >
    <div v-for="(image, index) in cast" :key="index" class="px-4 w-48">
      <img
        class="rounded-lg shadow-lg"
        :src="`${posterPath}${image.profile_path}`"
        height="150px"
        :alt="`cast_image_${index}`"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MovieCast",
  props: {
    posterPath: {
      type: String,
    },
    cast: {
      type: Object,
    },
  },
  mounted() {
    console.log(this.cast);
  },
});
</script>

<style scoped></style>
