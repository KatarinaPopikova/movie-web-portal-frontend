<template>
  <nav><router-link to="/">Home</router-link> |</nav>

  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.poster {
  height: 250px;
  @apply p-1;
}
.posters {
  display: flex;

  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
});
</script>
