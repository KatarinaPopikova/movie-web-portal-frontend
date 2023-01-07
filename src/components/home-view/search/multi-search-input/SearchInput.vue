<template>
  <div class="flex justify-center">
    <div
      class="max-w-lg bg-white rounded-lg h-11 relative flex items-center mx-8 border border-vtd-secondary-300"
    >
      <div class="p-3 border-r-2 font-semibold text-md">Title</div>
      <input
        type="text"
        v-model="query"
        @change="search"
        placeholder="Search..."
        class="w-full box-border m-3 my-1 p-3 outline-none placeholder-gray-400 h-9 sm:w-72"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchInput",
  components: {},
  data() {
    return {
      query: "" as string,
      searchType: "title" as string,
    };
  },
  methods: {
    search() {
      this.$emit("search-movies", this.searchType.toLowerCase(), this.query);
    },
    updateSearchType(searchType: string) {
      this.searchType = searchType;
    },
  },
});
</script>

<style scoped></style>
