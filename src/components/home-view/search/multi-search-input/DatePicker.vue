<template>
  <vue-tailwind-datepicker
    v-model="dateValue"
    as-single
    :formatter="formatter"
    @update:modelValue="changedDate"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DatePicker",
  data() {
    return {
      dateValue: "" as string,
      formatter: {
        date: "YYYY-MM-DD",
        month: "MMM",
      },
    };
  },
  methods: {
    changedDate() {
      this.$emit("update-date", this.dateValue);
    },
  },
});
</script>

<style scoped></style>
