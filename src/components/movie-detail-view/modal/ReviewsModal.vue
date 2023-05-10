<template>
  <div>
    <button
      class="w-40 h-28 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded flex flex-col justify-evenly items-center"
      @click="showModal = true"
    >
      <font-awesome-icon
        icon="fa-solid fa-star"
        class="h-10 w-10 text-gray-300 hover:cursor-"
      />
      <span>Show Reviews</span>
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
