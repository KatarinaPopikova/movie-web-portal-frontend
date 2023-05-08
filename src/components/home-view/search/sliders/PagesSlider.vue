<template>
  <div
    v-if="database === DatabaseEnum.online"
    class="p-2 mx-3 w-80 mt-4 flex flex-col items-center"
  >
    <vue3-slider
      v-model="maxPagesNumber"
      color="rgb(14 165 233)"
      track-color="#FEFEFE"
      :tooltip="false"
      :alwaysShowHandle="false"
      :height="12"
      :min="1"
      :max="max"
      :step="1"
    />

    <span class="pt-2 font-bold">
      Max Discovered Movies:
      <span class="text-sky-500 pl-1">{{ value }}</span>
    </span>
  </div>
</template>

<script>
import slider from "vue3-slider";
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import { DatabaseEnum, DetectTypeEnum, MovieDatabaseEnum } from "@/types";

export default defineComponent({
  name: "PagesSlider",
  components: { "vue3-slider": slider },

  computed: {
    DatabaseEnum() {
      return DatabaseEnum;
    },
    ...mapGetters("search", [
      "maxPages",
      "movieDatabase",
      "detectType",
      "database",
    ]),

    max() {
      if (this.detectType === DetectTypeEnum.Trailer) {
        return 20;
      } else if (this.movieDatabase === MovieDatabaseEnum.tmdb) {
        return 15;
      } else if (this.movieDatabase === MovieDatabaseEnum.imdb) {
        return 3;
      }
      return 0;
    },
    maxPagesNumber: {
      get() {
        return this.maxPages;
      },
      set(value) {
        this.SET_MAX_PAGES(value);
      },
    },

    value() {
      if (this.detectType === DetectTypeEnum.Trailer) {
        return this.maxPagesNumber * 1;
      } else if (this.movieDatabase === MovieDatabaseEnum.tmdb) {
        return this.maxPagesNumber * 20;
      } else if (this.movieDatabase === MovieDatabaseEnum.imdb) {
        return [50, 100, 250][this.maxPagesNumber - 1];
      }
      return 0;
    },
  },

  methods: {
    ...mapMutations("search", ["SET_MAX_PAGES"]),
  },
});
</script>

<style scoped></style>
