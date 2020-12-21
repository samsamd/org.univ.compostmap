<template>
  <div class="columns is-multiline">
    <p class="column is-half is-success">Moitié de l'écran</p>
    <p class="column is-one-quarter">Un quart de l'écran</p>
    <p class="column is-one-quarter">Un autre quart de l'écran</p>
    <p class="column is-one-third">
      Un tiers, ce contenu va passer à une nouvelle ligne
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
