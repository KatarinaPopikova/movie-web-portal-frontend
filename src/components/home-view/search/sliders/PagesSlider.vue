<template>
  <div class="p-2 w-80 mt-4 flex flex-col items-center">
    <vue3-slider
      v-model="maxPagesNumber"
      color="rgb(14 165 233)"
      track-color="#FEFEFE"
      tooltipText="%v"
      :tooltip="true"
      :alwaysShowHandle="true"
      :height="12"
      aria-valuemax="500"
      :min="5"
      :max="500"
      :step="5"
    />

    <span class="pt-2 font-bold">
      Max Discovered Pages:
      <span class="text-sky-500 pl-1">{{ maxPagesNumber }}</span>
    </span>
  </div>
</template>

<script>
import slider from "vue3-slider";
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "PagesSlider",
  components: { "vue3-slider": slider },

  computed: {
    ...mapGetters("search", ["maxPages"]),

    maxPagesNumber: {
      get() {
        return this.maxPages;
      },
      set(value) {
        this.SET_MAX_PAGES(value);
      },
    },
  },

  methods: {
    ...mapMutations("search", ["SET_MAX_PAGES"]),
  },
});
</script>

<style scoped></style>
