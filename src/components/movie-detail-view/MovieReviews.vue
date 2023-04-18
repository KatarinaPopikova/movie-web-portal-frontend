<template>
  <div v-for="(review, index) in reviews" :key="index">
    <TheReview :review="review" />
  </div>
</template>

<script>
import MovieTmdb from "@/api/tmdb-movie";
import { defineComponent } from "vue";
import TheReview from "@/components/movie-detail-view/TheReview.vue";

export default defineComponent({
  name: "MovieReviews",
  components: { TheReview },
  props: {
    movieId: {
      type: Number,
    },
    apiDb: {
      type: String,
      default: "TMDB",
    },
  },

  data() {
    return {
      reviews: Object,
    };
  },

  mounted() {
    if (this.apiDb === "TMDB") {
      MovieTmdb.reviews(this.movieId, 1).then((response) => {
        console.log(response);
        this.reviews = response.results;
      });
    }
  },
});
</script>

<style scoped></style>
