<template>
  <TheToggle
    :labels="dbValues"
    :selected-label="database"
    @change-toggle="changeDb"
  />
  <TheToggle
    :labels="yoloValues"
    :selected-label="yolo"
    @change-toggle="changeYolo"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { YoloEnum, DatabaseEnum } from "@/types";
import TheToggle from "@/components/home-view/search/TheToggle.vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "ToggleDatabase",
  components: { TheToggle },

  computed: {
    ...mapGetters("search", ["database", "yolo"]),
    dbValues(): string[] {
      return Object.values(DatabaseEnum);
    },
    yoloValues(): string[] {
      return Object.values(YoloEnum);
    },
  },

  methods: {
    ...mapMutations("search", ["SET_DATABASE", "SET_YOLO"]),
    changeDb(value) {
      this.SET_DATABASE(value);
    },
    changeYolo(value) {
      this.SET_YOLO(value);
    },
  },
});
</script>

<style scoped></style>
