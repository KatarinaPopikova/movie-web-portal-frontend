<template>
  <div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="showTrailerDet"
    >
      Show trailer detection
    </button>
    <the-modal :show-modal="showModal" @close="closeTrailerDet">
      <div class="relative">
        <movie-trailer />
      </div>
    </the-modal>
  </div>
</template>

<script>
import TheModal from "@/components/movie-detail-view/modal/TheModal.vue";
import MovieTrailer from "@/components/movie-detail-view/MovieTrailer.vue";

export default {
  name: "TrailerModal",
  components: {
    MovieTrailer,
    TheModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    closeTrailerDet() {
      this.showModal = false;
    },
    showTrailerDet() {
      this.showModal = true;
    },
  },
};
</script>

<style scoped></style>
