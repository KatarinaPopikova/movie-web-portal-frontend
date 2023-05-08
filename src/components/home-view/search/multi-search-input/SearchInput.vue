<template>
  <div class="flex justify-center py-1.5 ml-0 md:ml-5">
    <div
      class="w-80 bg-white rounded-lg h-11 relative flex items-center border border-vtd-secondary-300"
    >
      <div class="p-3 border-r-2 font-semibold text-md">Title</div>
      <input
        type="text"
        v-model="queryValue"
        placeholder="Search..."
        class="w-full box-border m-3 my-1 p-3 outline-none placeholder-gray-400 h-9 sm:w-72"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "SearchInput",
  computed: {
    ...mapGetters("search", ["query"]),

    queryValue: {
      get() {
        return this.query;
      },
      set(value) {
        this.SET_QUERY(value);
      },
    },
  },
  methods: {
    ...mapMutations("search", ["SET_QUERY"]),
  },
});
</script>

<style scoped></style>
