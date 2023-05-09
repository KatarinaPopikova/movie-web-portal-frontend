<template>
  <div class="bg-gray-100 p-4 rounded-lg shadow-md m-3">
    <h3 class="text-2xl font-bold mb-1">{{ review.username }}</h3>
    <div class="flex justify-between">
      <h5 class="text-xl mb-2">{{ review.title }}</h5>
      <h5 class="text-2xl">Rate: {{ review.rate || "-" }}</h5>
    </div>
    <div
      id="content"
      class="overflow-hidden"
      :style="`max-height: ${maxHeight}`"
    >
      {{ review.content }}
    </div>
    <button
      class="text-sky-500 hover:text-sky-700 font-bold mt-2 focus:outline-none"
      @click="toggleContent"
    >
      {{ toggle }}
    </button>
    <footer id="footer" class="text-sm text-gray-600">{{ review.date }}</footer>
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
      maxHeight: "100px",
    };
  },
  methods: {
    toggleContent() {
      if (this.maxHeight) {
        this.maxHeight = null;
        this.toggle = "Show less";
      } else {
        this.maxHeight = "100px";
        this.toggle = "Read more";
      }
    },
  },
});
</script>

<style scoped></style>
