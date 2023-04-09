<template>
  <div class="p-2 w-80 mt-4 flex flex-col items-center">
    <vue3-slider
      v-model="confidenceValue"
      color="rgb(14 165 233)"
      track-color="#FEFEFE"
      tooltipText="%v%"
      :tooltip="true"
      :alwaysShowHandle="true"
      :height="12"
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
    ...mapGetters("search", ["confidence"]),

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
