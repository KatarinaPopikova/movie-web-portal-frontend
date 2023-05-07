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
  <TheToggle
    :labels="modelV8Values"
    v-if="yolo === yoloValues[1]"
    @change-toggle="changeModel"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { YoloEnum, DatabaseEnum, Modelv8Enum } from "@/types";
import TheToggle from "@/components/home-view/search/TheToggle.vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "ToggleDatabase",
  components: { TheToggle },

  data() {
    return {
      showV8Models: true,
    };
  },

  computed: {
    ...mapGetters("search", ["database", "yolo"]),
    dbValues(): string[] {
      return Object.values(DatabaseEnum);
    },
    yoloValues(): string[] {
      return Object.values(YoloEnum);
    },
    modelV8Values(): string[] {
      return Object.values(Modelv8Enum);
    },
  },

  methods: {
    ...mapMutations("search", ["SET_DATABASE", "SET_YOLO", "SET_MODEL"]),
    changeDb(value) {
      this.SET_DATABASE(value);
    },
    changeYolo(value) {
      this.SET_YOLO(value);
    },
    changeModel(value) {
      this.SET_MODEL(value);
    },
  },
});
</script>

<style scoped></style>
