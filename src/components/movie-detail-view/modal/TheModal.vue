<template>
  <div
    class="fixed inset-0 backdrop-blur-sm z-10 flex items-center justify-center w-screen"
    v-if="showModal"
    @click.self="closeModal"
  >
    <div
      class="bg-white rounded-lg mx-3 md:mx-14 my-2"
      style="max-height: calc(100vh - 4rem); overflow-y: auto"
      :class="{ 'w-screen': fullWidth }"
    >
      <div class="flex justify-between items-center px-4 py-2 bg-gray-100">
        <h3 class="text-lg font-bold">{{ movie.info.original_title }}</h3>
        <button
          type="button"
          @click="closeModal"
          class="text-gray-700 hover:text-gray-900"
        >
          <font-awesome-icon
            icon="fa-solid fa-xmark"
            class="h-10 w-10 text-gray-300 hover:text-gray-700 hover:cursor-pointer"
          />
        </button>
      </div>
      <div class="m-2">
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
    fullWidth: {
      type: Boolean,
      default: false,
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
