<template>
  <div>
    <img :src="imageUrl" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      imageUrl: "",
      imageName: "example.jpg",
    };
  },
  mounted() {
    axios
      .get(`http://localhost:8000/img`, {
        responseType: "arraybuffer",
      })
      .then((response) => {
        const imageData = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        this.imageUrl = `data:image/jpeg;base64,${imageData}`;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
