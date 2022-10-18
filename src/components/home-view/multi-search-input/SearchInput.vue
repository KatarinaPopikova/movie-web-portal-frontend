<template>
  <div class="flex justify-center">
    <div
      class="max-w-lg bg-white rounded-2xl h-12 relative flex items-center mx-8"
    >
      <drop-down />
      <input
        type="text"
        v-model="query"
        @input="search"
        placeholder="Search..."
        class="w-full box-border pl-3 outline-none placeholder-gray-400 h-12 sm:w-96"
      />
      <div>
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="pr-4" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DropDown from "@/components/home-view/multi-search-input/DropDown.vue";

export default defineComponent({
  name: "SearchInput",
  components: {
    DropDown,
  },
  data() {
    return {
      query: "" as string,
    };
  },
  methods: {
    search() {
      window.eventBus.emit("search-movies", this.query); //this.query
    },
  },
});
</script>

<style scoped></style>
