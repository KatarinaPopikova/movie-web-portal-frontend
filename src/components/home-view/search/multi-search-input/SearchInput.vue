<template>
  <div class="flex justify-center">
    <div
      class="max-w-lg bg-white rounded-2xl h-12 relative flex items-center mx-8"
    >
      <drop-down @update-search-type="updateSearchType" />

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
import DropDown from "@/components/home-view/search/multi-search-input/DropDown.vue";

export default defineComponent({
  name: "SearchInput",
  components: {
    DropDown,
  },
  data() {
    return {
      query: "" as string,
      searchType: "" as string,
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
