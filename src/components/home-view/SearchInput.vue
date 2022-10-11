<template>
  <div class="nav">
    <div class="search-input">
      <div class="icon-div">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </div>
      <input
        type="text"
        v-model="query"
        @input="search"
        placeholder="Hľadať..."
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchInput",
  data() {
    return {
      query: "" as string,
    };
  },
  methods: {
    search() {
      window.eventBus.emit("search-movies", this.query);
    },
  },
});
</script>

<style scoped>
.nav {
  @apply flex justify-center py-4;
}
.search-input {
  @apply overflow-hidden max-w-lg bg-white rounded-2xl h-12 relative flex items-center;
}
input {
  @apply w-full box-border pl-12 border-b outline-none placeholder-gray-400 h-12;
}
.icon-div {
  @apply pl-4;
}
</style>
