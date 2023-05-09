<template>
  <div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="showModal = true"
    >
      Open Modal
    </button>
    <the-modal :show-modal="showModal" title="sssss" @close="showModal = false">
      <div>
        <p class="text-gray-800 mb-4">aaa</p>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="onClick"
        >
          OK
        </button>
      </div>
    </the-modal>
  </div>
</template>

<script>
import TheModal from "@/components/movie-detail-view/modal/TheModal.vue";

export default {
  name: "ReviewsModal",
  components: {
    TheModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    onClick() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped></style>
