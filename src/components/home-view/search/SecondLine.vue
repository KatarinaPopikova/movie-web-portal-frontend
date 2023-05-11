<template>
  <div class="flex items-center justify-around m-auto flex-wrap max-w-2xl">
    <MovieDatabasePicker />
    <TheToggle
      :labels="dbValues"
      :selected-label="database"
      :disabled="disabledDbValue"
      @change-toggle="changeDb"
    />
  </div>
</template>

<script lang="ts">
import TheToggle from "@/components/home-view/search/TheToggle.vue";
import MovieDatabasePicker from "@/components/home-view/search/pickers/MovieDatabasePicker.vue";
import { mapGetters, mapMutations } from "vuex";
import { DatabaseEnum } from "@/types";
import { disabledModel } from "@/store/modules/search/getters";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SecondLine",
  components: { MovieDatabasePicker, TheToggle },
  computed: {
    ...mapGetters("search", [
      "database",
      "yolo",
      "disabledDb",
      "disabledYolo",
      "disabledModel",
      "categories",
    ]),
    dbValues(): string[] {
      return Object.values(DatabaseEnum);
    },
    disabledDbValue(): boolean {
      return this.disabledDb;
    },
  },

  methods: {
    disabledModel,
    ...mapMutations("search", ["SET_DATABASE"]),
    changeDb(value) {
      this.SET_DATABASE(value);
    },
  },
});
</script>

<style scoped></style>
