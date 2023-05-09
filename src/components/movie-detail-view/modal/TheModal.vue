<template>
  <div
    class="fixed inset-0 bg-cover bg-center bg-blur backdrop-blur-sm z-10 overflow-scroll"
    v-if="showModal"
    @click.self="closeModal"
  >
    <div class="bg-white rounded-lg mx-3 md:mx-14 my-2">
      <div class="flex justify-between items-center px-4 py-2 bg-gray-100">
        <h3 class="text-lg font-bold">{{ movie.info.original_title }}</h3>
        <button
          type="button"
          @click="closeModal"
          class="text-gray-700 hover:text-gray-900"
        >
          <span class="sr-only">Close modal</span>
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              d="M6.707 6.293a1 1 0 0 1 1.414 0L12 10.586l3.879-3.88a1 1 0 1 1 1.414 1.414L13.414 12l3.88 3.879a1 1 0 1 1-1.414 1.414L12 13.414l-3.879 3.88a1 1 0 1 1-1.414-1.414L10.586 12 6.707 8.121a1 1 0 0 1 0-1.414z"
            />
          </svg>
        </button>
      </div>
      <div class="p-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TheModal",
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: "Modal Title",
    },
  },
  computed: {
    ...mapState("movie", ["movie"]),
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
