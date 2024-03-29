<template>
  <div>
    <div class="flex">
      <div class="canvas-wrapper w-[400px]">
        <img
          id="scream"
          ref="myScream"
          class="m-auto"
          :src="imageUrl + movie.poster"
          alt="The Scream"
          height="150px"
        />
        <canvas ref="myCanvas" class="canvas-overlay m-auto"></canvas>
      </div>
    </div>
    <div class="flex justify-evenly">
      <div
        @click="detectAll"
        class="font-semibold bg-sky-500 text-white rounded-lg p-3 mt-4 hover:cursor-pointer active:bg-sky-700"
      >
        Show
      </div>
      <div
        @click="clearDetection"
        class="font-semibold bg-sky-500 text-white rounded-lg p-3 mt-4 hover:cursor-pointer active:bg-sky-700"
      >
        Hide
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import { ImageMovieUrl } from "@/types";

export default defineComponent({
  name: "PosterDetection",
  props: {
    apiDb: {
      type: String,
      default: "TMDB",
    },
  },

  data() {
    return {
      imageUrl: `${ImageMovieUrl[this.apiDb].original}`,
      showCanvas: true,
    };
  },

  mounted() {
    this.detectAll();
  },

  computed: {
    ...mapState("movie", ["movie", "detInfo"]),
  },
  methods: {
    detectAll() {
      this.showCanvas = true;
      const mainDetModel = Object.keys(this.movie.detections[0])[0];
      const colors = this.getRandomColors(
        this.movie.detections[0][mainDetModel].length
      );

      this.detect(
        this.$refs["myCanvas"] as HTMLCanvasElement,
        this.$refs["myScream"] as HTMLImageElement,
        this.movie.detections[0][mainDetModel],
        colors
      );
    },

    detect(canvas, img, detection, colors) {
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;

      // get the scale
      let scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );
      // get the top left position of the image
      let x = canvas.width / 2 - (img.width / 2) * scale;
      let y = canvas.height / 2 - (img.height / 2) * scale;

      ctx?.drawImage(img, x, y, img.width * scale, img.height * scale);
      for (let det of detection) {
        let label_conf =
          det["label"] + "(" + (det["conf"] * 100).toFixed(2) + ")";
        let color = colors[this.detInfo.categories.indexOf(det["label"])];
        this.bboxRatioDraw(label_conf, det["box"], canvas, color);
      }
    },
    bboxRatioDraw(label, box, canvas, color) {
      const ctx = canvas.getContext("2d") || null;
      if (ctx) {
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
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.strokeRect(finalBx, finalBy, finalBw, finalBh);
        // Draw the label background.
        let label_width = ctx.measureText(label).width;
        let i = label.length;
        label_width = i * 20 * 0.52 - 10;
        ctx.fillStyle = color;
        ctx.fillRect(finalBx, finalBy, label_width, 20);
        ctx.fillStyle = "white";
        ctx.font = "20px serif";
        ctx.fillText(label, finalBx, finalBy + 13);
      }
    },
    getRandomColors(numColors) {
      let colors: string[] = [];
      for (let i = 0; i < numColors; i++) {
        colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
      }
      return colors;
    },

    clearDetection() {
      this.showCanvas = false;
      const canvas = this.$refs["myCanvas"] as HTMLCanvasElement;
      const ctx = canvas.getContext("2d") || null;
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
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
