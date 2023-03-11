<template>
  <div class="bg-gray-100 p-4 rounded-lg shadow-md m-3">
    <h3 class="text-2xl font-bold mb-2">{{ review.author }}</h3>
    <div
      id="content"
      class="overflow-hidden"
      :style="`max-height: ${maxHeight}`"
    >
      {{ review.content }}
    </div>
    <button
      class="text-blue-500 hover:text-blue-700 font-bold mt-2 focus:outline-none"
      @click="toggleContent"
    >
      {{ toggle }}
    </button>
    <footer id="footer" class="text-sm text-gray-600">{{ review.id }}</footer>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheReview",
  props: {
    review: {
      type: Object,
    },
  },
  data() {
    return {
      toggle: "Read more",
      maxHeight: "50px",
    };
  },
  methods: {
    toggleContent() {
      if (this.maxHeight) {
        this.maxHeight = null;
        this.toggle = "Show less";
      } else {
        this.maxHeight = "50px";
        this.toggle = "Read more";
      }
    },
  },
});
</script>

<style scoped></style>
