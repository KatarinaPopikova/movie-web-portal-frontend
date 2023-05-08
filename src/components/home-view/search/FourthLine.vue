<template>
  <div class="flex lg:justify-evenly justify-center items-center flex-wrap">
    <div class="flex flex-wrap md:flex-nowrap lg:justify-evenly justify-center">
      <GenresPicker />
      <search-input />
    </div>
    <DateFromToPickers />
  </div>
</template>

<script lang="ts">
import GenresPicker from "@/components/home-view/search/pickers/GenresPicker.vue";
import DateFromToPickers from "@/components/home-view/search/multi-search-input/DateFromToPickers.vue";
import SearchInput from "@/components/home-view/search/multi-search-input/SearchInput.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "FourthLine",
  components: { SearchInput, DateFromToPickers, GenresPicker },
});
</script>

<style scoped></style>
