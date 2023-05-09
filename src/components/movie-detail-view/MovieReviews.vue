<template>
  <div v-for="(review, index) in reviews" :key="index">
    <TheReview :review="review" />
  </div>

  <div
    v-if="reviews.length === 0"
    class="h-20 flex justify-center font-bold p-6"
  >
    <p>No reviews</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TheReview from "@/components/movie-detail-view/TheReview.vue";

export default defineComponent({
  name: "MovieReviews",
  components: { TheReview },
  props: {
    reviews: {
      type: Object,
    },
  },
});
</script>

<style scoped></style>
