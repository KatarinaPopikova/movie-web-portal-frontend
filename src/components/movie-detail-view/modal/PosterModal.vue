<template>
  <div>
    <button
      class="w-40 h-28 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded flex flex-col justify-evenly items-center"
      @click="showModal = true"
    >
      <font-awesome-icon
        icon="fa-solid fa-square"
        class="h-10 w-10 text-gray-300 hover:cursor-"
      />
      <span>Show poster detection</span>
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
