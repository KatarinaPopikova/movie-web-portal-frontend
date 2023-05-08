<template>
  <div class="flex items-center justify-center m-auto">
    <CategoriesPicker />
  </div>
</template>

<script lang="ts">
import CategoriesPicker from "@/components/home-view/search/pickers/CategoriesPicker.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "FirstLine",
  components: { CategoriesPicker },
});
</script>

<style scoped></style>
