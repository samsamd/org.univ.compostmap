<template>
  <div class ="columns is-multiline">  
      <Composter class="column is-one-quarter-widescreen is-half-tablet is-one-third-desktop" 
      v-for = " i in 150"
      :key="i"
      />
  </div>
</template>

<script>

import Composter from "./components/Composter.vue";

export default {
  name: "App",
  components: {
    Composter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
