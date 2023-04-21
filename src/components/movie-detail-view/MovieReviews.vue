<template>
  <div v-for="(review, index) in reviews" :key="index">
    <TheReview :review="review" />
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
