<template>
  <div>
    <!-- MenuView -->
    <MenuView />

    <!-- Content -->
    <div class="container">
      <!-- About Page -->
      <AboutPage message="à propos" />

      <!-- Composters list -->
      <CompostersList />
    </div>
  </div>
</template>

<script>
import CompostersList from "./components/CompostersList.vue";
import MenuView from "./components/MenuView.vue";
import AboutPage from "./components/AboutPage.vue";
export default {
  name: "App",
  components: {
    MenuView,
    CompostersList,
    AboutPage,
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
  margin-top: 5px;
}
</style>