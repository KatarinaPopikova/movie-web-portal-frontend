<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 bg-cover bg-center bg-blur backdrop-blur-sm z-10"
  >
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
import { mapGetters } from "vuex";

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
};
</script>
