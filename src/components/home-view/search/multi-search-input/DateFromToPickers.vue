<template>
  <div class="flex flex-wrap md:flex-nowrap lg:justify-evenly justify-center">
    <div class="w-80 flex items-center py-1.5">
      <div class="pr-3 font-semibold">From:</div>
      <DatePicker :date="dateFrom" @update-date="updateDateFrom" />
    </div>
    <div class="w-80 flex items-center py-1.5 ml-0 md:ml-5">
      <div class="pr-3 font-semibold">To:</div>
      <DatePicker :date="dateTo" @update-date="updateDateTo" />
    </div>
  </div>
</template>

<script lang="ts">
import DatePicker from "@/components/home-view/search/multi-search-input/DatePicker.vue";
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "DateFromToPickers",
  components: { DatePicker },

  computed: {
    ...mapGetters("search", ["dateFrom", "dateTo"]),
  },

  methods: {
    ...mapMutations("search", ["SET_DATE_FROM", "SET_DATE_TO"]),

    updateDateFrom(date: string) {
      this.SET_DATE_FROM(date);
    },
    updateDateTo(date: string) {
      this.SET_DATE_TO(date);
    },
  },
});
</script>

<style scoped></style>
