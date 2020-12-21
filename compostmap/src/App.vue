<template>
  <div class="columns is-multiline">
    <p class="column is-one-quarter-desktop is-half-tablet">
      Quart de l&lsquo;écran desktop, Moitié tablet
    </p>
    <p class="column is-one-quarter-desktop is-half-tablet">
      Quart de l&lsquo;écran desktop, Moitié tablet
    </p>
    <p class="column is-one-third-desktop is-one-third-tablet">
      Tiers de l&lsquo;écran desktop, Tiers tablet
    </p>
    <p class="column is-one-quarter is-four-fifths-widescreen">
      Un quart dans tous les cas sauf sur widescreen
    </p>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
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

.column {
  border: 5px solid #2c3e50;
}
</style>
