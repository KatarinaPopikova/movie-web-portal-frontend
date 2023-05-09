<template>
  <div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="showModal = true"
    >
      Show Reviews
    </button>
    <the-modal :show-modal="showModal" @close="showModal = false">
      <div>
        <movie-reviews :reviews="this.movie.info.reviews" />
      </div>
    </the-modal>
  </div>
</template>

<script>
import TheModal from "@/components/movie-detail-view/modal/TheModal.vue";
import MovieReviews from "@/components/movie-detail-view/MovieReviews.vue";
import { mapState } from "vuex";

export default {
  name: "ReviewsModal",
  components: {
    MovieReviews,
    TheModal,
  },
  data() {
    return {
      showModal: false,
      // movieId: String(this.$route.params.id),
      // apiDb: String(this.$route.params.apiDb),
      reviews: Object,
    };
  },
  computed: {
    ...mapState("movie", ["movie", "detInfo"]),
  },
  methods: {
    // ...mapActions("movie", ["getMovieInfo"]),

    onClick() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped></style>
