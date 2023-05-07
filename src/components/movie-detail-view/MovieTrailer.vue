<template>
  <div>
    <button @click="connectToWebSocket">Connect to WebSocket</button>
    <p>Received message: {{ message }}</p>
    <button @click="sendMessage">Send message</button>
    <button @click="disconnect">Disconnect</button>
  </div>
  <div>
    <img :src="imageUrl" alt="trailer" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MovieTrailer",
  data() {
    return {
      message: "",
      ws: null,
      imageUrl: "",
      imageName: "example.jpg",
    };
  },
  computed: {
    ...mapState("movie", ["movie", "detInfo"]),
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
            this.message = data.message;
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
