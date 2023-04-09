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
  props: {
    date: {
      type: String,
    },
  },
  data() {
    return {
      dateValue: this.date as string,
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
