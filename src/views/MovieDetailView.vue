<template>
  <p>{{ movieId }}</p>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MovieDetail",
  data() {
    return {
      movieId: Number,
    };
  },
  mounted() {
    this.movieId = this.$route.params.id;
  },
});
</script>

<style scoped></style>
