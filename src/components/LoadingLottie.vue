<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 bg-cover bg-center bg-blur backdrop-blur-sm z-10"
  >
    <font-awesome-icon
      @click="cancel"
      icon="fa-solid fa-xmark"
      class="fixed right-9 top-9 h-10 w-10 text-gray-300 hover:text-gray-700 hover:cursor-pointer"
    />
    <div class="h-full flex items-center">
      <Vue3Lottie
        ref="customControl"
        :animationData="LoadingJSON"
        :height="300"
        :width="300"
      />
    </div>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";

import LoadingJSON from "../lotties/loading.json";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "LoadingLottie",

  components: {
    Vue3Lottie,
  },
  data() {
    return {
      LoadingJSON,
    };
  },
  computed: {
    ...mapGetters(["loading"]),
    isLoading() {
      return this.loading;
    },
  },
  methods: {
    ...mapMutations(["STOP_SOURCE"]),
    cancel() {
      this.STOP_SOURCE();
    },
  },
};
</script>
