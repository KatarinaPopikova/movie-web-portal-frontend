<template>
  <div>
    <TheToggle
      v-if="categories.length > 0"
      :labels="yoloValues"
      :selected-label="yolo"
      :disabled="disabledYolo"
      @change-toggle="changeYolo"
    />
    <TheToggle
      v-if="categories.length > 0 && yolo === yoloValues[1]"
      :labels="modelV8Values"
      :disabled="disabledModel"
      :small="true"
      @change-toggle="changeModel"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { YoloEnum, Modelv8Enum } from "@/types";
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
    ...mapGetters("search", [
      "database",
      "yolo",
      "disabledDb",
      "disabledYolo",
      "disabledModel",
      "categories",
    ]),

    yoloValues(): string[] {
      return Object.values(YoloEnum);
    },
    modelV8Values(): string[] {
      return Object.values(Modelv8Enum);
    },
  },

  methods: {
    ...mapMutations("search", ["SET_YOLO", "SET_MODEL"]),
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
