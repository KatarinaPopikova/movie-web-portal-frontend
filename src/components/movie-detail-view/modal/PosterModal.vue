<template>
  <div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="showModal = true"
    >
      Show poster detection
    </button>
    <the-modal :show-modal="showModal" @close="showModal = false">
      <div class="max-h-screen">
        <poster-detection :api-db="this.apiDb" />
      </div>
    </the-modal>
  </div>
</template>

<script>
import TheModal from "@/components/movie-detail-view/modal/TheModal.vue";
import PosterDetection from "@/components/movie-detail-view/PosterDetection.vue";
import { mapActions } from "vuex";

export default {
  name: "PosterModal",
  components: {
    PosterDetection,
    TheModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  props: {
    apiDb: {
      type: String,
      default: "TMDB",
    },
  },
  methods: {
    onClick() {
      this.showModal = false;
    },
    ...mapActions("movie", ["getMovieInfo"]),
  },
};
</script>

<style scoped></style>
