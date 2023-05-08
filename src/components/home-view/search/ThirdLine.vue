<template>
  <div class="flex justify-evenly flex-wrap">
    <ConfidenceSlider />
    <PagesSlider />
    <ToggleDatabase />
  </div>
</template>

<script lang="ts">
import ToggleDatabase from "@/components/home-view/search/ToggleDatabase.vue";
import ConfidenceSlider from "@/components/home-view/search/sliders/ConfidenceSlider.vue";
import PagesSlider from "@/components/home-view/search/sliders/PagesSlider.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ThirdLine",
  components: { PagesSlider, ConfidenceSlider, ToggleDatabase },
});
</script>

<style scoped></style>
