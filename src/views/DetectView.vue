<template>
  <div class="canvas-wrapper">
    <img
      id="scream"
      ref="myScream"
      src="https://image.tmdb.org/t/p/original/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg"
      alt="The Scream"
      height="150px"
    />
    <canvas ref="myCanvas" class="canvas-overlay"></canvas>
  </div>
  <button @click="draw">Draw</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DetectView",
  data() {
    return {};
  },
  methods: {
    draw() {
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

      //person-small

      this.bboxRatioDraw(
        0.5263158082962036,
        0.4273183047771454,
        0.2518796920776367,
        0.1654135286808014
      );

      // //toilet
      this.bboxRatioDraw(
        0.6851503849029541,
        0.5629699230194092,
        0.16165412962436676,
        0.12468671798706055
      );

      //person-big
      this.bboxRatioDraw(
        0.4530075192451477,
        0.5729950070381165,
        0.36466166377067566,
        0.4053884744644165
      );
    },

    bboxRatioDraw(x: number, y: number, w: number, h: number) {
      let canvas = this.$refs["myCanvas"] as HTMLCanvasElement;
      const ctx = canvas.getContext("2d");

      // Use percent to correctly adapt the coordinate to the scaled image
      let percentBx = 100 * x, // x %
        percentBy = 100 * y, // y %
        percentBw = w * 100, // width%
        percentBh = h * 100; // height%

      // then map the values to the current canvas

      let finalBw = (percentBw * canvas.width) / 100, // width en pixel
        finalBh = (percentBh * canvas.height) / 100, // height en pixel
        finalBx = (percentBx * canvas.width) / 100 - finalBw / 2, // x en pixel
        finalBy = (percentBy * canvas.height) / 100 - finalBh / 2; // y en pixel

      // Draw the bounding box.
      ctx!.strokeStyle = "green";
      ctx!.lineWidth = 4;
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
