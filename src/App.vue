<template>
  <nav>
    <router-link to="/">
      <font-awesome-icon
        icon="fa-solid fa-house"
        class="text-sky-400 p-4 h-7 w-7"
    /></router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
});
</script>
