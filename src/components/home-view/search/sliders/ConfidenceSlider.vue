<template>
  <div
    v-if="categories.length > 0"
    class="p-2 mx-3 w-80 mt-4 flex flex-col items-center"
  >
    <vue3-slider
      v-model="confidenceValue"
      color="rgb(14 165 233)"
      track-color="#FEFEFE"
      :tooltip="false"
      :alwaysShowHandle="true"
      :height="12"
      :min="25"
      :max="95"
    />

    <span class="pt-2 font-bold">
      Confidence:
      <span class="text-sky-500 pl-1">{{ confidenceValue }}%</span>
    </span>
  </div>
</template>

<script>
import slider from "vue3-slider";
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "ConfidenceSlider",
  components: { "vue3-slider": slider },

  computed: {
    ...mapGetters("search", ["confidence", "categories"]),

    confidenceValue: {
      get() {
        return this.confidence;
      },
      set(value) {
        this.SET_CONFIDENCE(value);
      },
    },
  },

  methods: {
    ...mapMutations("search", ["SET_CONFIDENCE"]),
  },
});
</script>

<style scoped></style>
