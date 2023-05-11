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
      <span>Show trailer detection</span>
    </button>
    <the-modal
      :show-modal="showModal"
      :full-width="true"
      @close="closeTrailerDet"
    >
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
  },
};
</script>

<style scoped></style>
