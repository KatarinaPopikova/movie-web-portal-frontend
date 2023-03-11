<template>
  <div class="flex items-center">
    <span
      class="mr-3 text-sm"
      :class="{
        'text-gray-900': isChecked,
        'text-sky-500 font-bold': !isChecked,
      }"
      >TMDB</span
    >

    <label class="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        v-model="isChecked"
        value=""
        class="sr-only peer"
      />
      <div
        class="w-11 h-6 bg-sky-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"
      ></div>
      <span
        class="ml-3 text-sm"
        :class="{
          'text-gray-900': !isChecked,
          'text-sky-600 font-bold': isChecked,
        }"
        >ČSFD</span
      >
    </label>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToggleDatabase",
  data() {
    return {
      isChecked: false,
    };
  },
});
</script>

<style scoped></style>
