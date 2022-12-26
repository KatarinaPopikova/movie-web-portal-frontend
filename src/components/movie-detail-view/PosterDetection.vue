<template>
  <div class="canvas-wrapper">
    <img
      id="scream"
      ref="myScream"
      :src="imageUrl + this.movie.info.poster_path"
      alt="The Scream"
      height="150px"
    />
    <canvas ref="myCanvas" class="canvas-overlay"></canvas>
    <button @click="detect">show detection</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "PosterDetection",

  data() {
    return {
      imageUrl: "https://image.tmdb.org/t/p/w300",
    };
  },

  computed: {
    ...mapState("movie", ["movie"]),
  },
  methods: {
    detect() {
      let canvas = this.$refs["myCanvas"] as HTMLCanvasElement;
      const ctx = canvas.getContext("2d");
      let img = this.$refs["myScream"] as HTMLImageElement;
      canvas.width = img.width;
      canvas.height = img.height;
      // get the scale
      var scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );
      // get the top left position of the image
      var x = canvas.width / 2 - (img.width / 2) * scale;
      var y = canvas.height / 2 - (img.height / 2) * scale;

      ctx?.drawImage(img, x, y, img.width * scale, img.height * scale);
      console.log(this.movie.detection);
      for (let det in this.movie.detection) {
        this.bboxRatioDraw(this.movie.detection[det]["box"]);
      }
    },
    bboxRatioDraw(box) {
      let canvas = this.$refs["myCanvas"] as HTMLCanvasElement;
      const ctx = canvas.getContext("2d");

      // Use percent to correctly adapt the coordinate to the scaled image
      let percentBx = 100 * box[0], // x %
        percentBy = 100 * box[1], // y %
        percentBw = box[2] * 100, // width%
        percentBh = box[3] * 100; // height%

      // then map the values to the current canvas

      let finalBw = (percentBw * canvas.width) / 100, // width en pixel
        finalBh = (percentBh * canvas.height) / 100, // height en pixel
        finalBx = (percentBx * canvas.width) / 100 - finalBw / 2, // x en pixel
        finalBy = (percentBy * canvas.height) / 100 - finalBh / 2; // y en pixel

      // Draw the bounding box.
      ctx!.strokeStyle = "green";
      ctx!.lineWidth = 2;
      ctx?.strokeRect(finalBx, finalBy, finalBw, finalBh);
      // Draw the label background.
      ctx!.fillStyle = "#00FFFF";
    },
  },
});
</script>

<style scoped>
.canvas-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.canvas-wrapper {
  position: relative;
}
</style>
