<template>
  <div class="relative">
    <div
      v-if="imageUrl === ''"
      class="max-w-screen-lg 2xl:max-w-screen-xl w-screen bg-gray-50 rounded-md relative"
      style="height: 200px; padding-bottom: 50%"
    >
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <font-awesome-icon
          @click="sendMessage"
          icon="fa-solid fa-circle-play"
          class="h-14 w-14 text-gray-300 hover:text-gray-700 hover:cursor-pointer"
        />
      </div>

      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <Vue3Lottie
          v-if="loading && imageUrl === ''"
          :animationData="LoadingJSON"
          :height="300"
          :width="300"
        />
      </div>
    </div>
    <img
      v-if="imageUrl !== ''"
      :src="imageUrl"
      alt="trailer"
      class="max-w-screen-lg 2xl:max-w-screen-xl w-screen"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { defineComponent } from "vue";
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";

import LoadingJSON from "@/lotties/loading_circle.json";

export default defineComponent({
  name: "MovieTrailer",
  components: { Vue3Lottie },
  data() {
    return {
      message: "",
      ws: null,
      imageUrl: "",
      LoadingJSON,
      loading: false,
    };
  },
  computed: {
    ...mapState("movie", ["movie", "detInfo"]),
  },
  mounted() {
    this.connectToWebSocket();
  },
  methods: {
    connectToWebSocket() {
      this.ws = new WebSocket(
        "ws://localhost:8000/ws/trailer-streaming/room1/"
      );

      this.ws.onopen = () => {
        console.log("WebSocket connection established!");
      };

      this.ws.binaryType = "arraybuffer"; // set binary data type
      this.ws.onmessage = (event) => {
        if (typeof event.data === "string") {
          const data = JSON.parse(event.data);
          if (data.type === "message") {
            this.loading = false;
            this.message = data.message;
            this.imageUrl = "";
          }
        } else if (event.data instanceof ArrayBuffer) {
          const imageData = new Uint8Array(event.data);
          this.imageUrl = `data:image/jpeg;base64,${btoa(
            String.fromCharCode(...imageData)
          )}`;
        }
      };
    },
    sendMessage() {
      this.loading = true;
      const message = this.movie.trailer;
      this.ws.send(
        JSON.stringify({
          youtube_url: message,
          categories: this.detInfo.categories,
          yolo: this.detInfo.yolo,
          conf: this.detInfo.conf,
        })
      );
    },
    disconnect() {
      if (this.ws) {
        this.ws.close();
      }
    },
  },

  beforeUnmount() {
    this.disconnect();
  },
});
</script>

<style scoped></style>
