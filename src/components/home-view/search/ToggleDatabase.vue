<template>
  <TheToggle
    :labels="yoloValues"
    :selected-label="yolo"
    @change-toggle="changeToggle"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { YoloEnum } from "@/types";
import TheToggle from "@/components/home-view/search/TheToggle.vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "ToggleDatabase",
  components: { TheToggle },

  computed: {
    ...mapGetters("search", ["yolo"]),

    yoloValues(): string[] {
      return Object.values(YoloEnum);
    },
  },

  methods: {
    ...mapMutations("search", ["SET_YOLO"]),
    changeToggle(value) {
      this.SET_YOLO(value);
    },
  },
});
</script>

<style scoped></style>
