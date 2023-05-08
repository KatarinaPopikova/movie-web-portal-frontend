<template>
  <div
    class="flex items-center justify-center py-1.5 px-3"
    :class="{
      'opacity-50': disabled,
      'cursor-not-allowed': disabled,
    }"
  >
    <span
      class="mr-3 font-semibold"
      :class="{
        'text-gray-900': isChecked,
        'text-sky-500 font-bold': !isChecked,
        'text-xs': small,
        'text-sm': !small,
      }"
      >{{ labels[0] }}</span
    >

    <label
      class="relative inline-flex items-center cursor-pointer"
      :class="{
        'cursor-not-allowed': disabled,
      }"
    >
      <input
        type="checkbox"
        v-model="isChecked"
        value=""
        class="sr-only peer"
        :disabled="disabled"
      />
      <div
        class="bg-sky-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"
        :class="{
          'w-8 after:h-3.5 after:w-3.5 h-4': small,
          'w-11 h-6': !small,
        }"
      ></div>
      <span
        class="ml-3 text-sm font-semibold"
        :class="{
          'text-gray-900': !isChecked,
          'text-sky-600 font-bold': isChecked,
          'text-xs': small,
          'text-sm': !small,
        }"
        >{{ labels[1] }}</span
      >
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "TheToggle",
  props: {
    labels: {
      type: Array as PropType<string[]>,
      required: true,
    },
    selectedLabel: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isChecked: {
      get() {
        return this.selectedLabel == this.labels[1];
      },
      set(value) {
        this.$emit("change-toggle", value);
      },
    },
  },
});
</script>

<style scoped></style>
