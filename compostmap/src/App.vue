<template>
  <div>
    <!-- MenuView -->
    <MenuView />

    <!-- Content -->
    <div class="container">
      <!-- About Page -->
      <!-- Composters list -->
      <p class="columns">
        <button
          class="button is-primary"
          @click="composters.push({ id: nextComposterId++ })"
        >
          Add Composter {{ nextComposterId }}
        </button>
        <button
          class="button is-danger is-quarter"
          @click="composters.splice(0, 1)"
          v-if="composters.length > 0"
        >
          Remove composter {{ composters[0].id }}
        </button>
      </p>
      <div class="columns is-multiline">
        <Composter
          v-for="composter in composters"
          :key="composter.id"
          class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
          :composter-id="composter.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Composter from "./components/Composter.vue";
import MenuView from "./components/MenuView.vue";

export default {
  name: "App",
  components: {
    MenuView,
    Composter,
  },
  data() {
    return {
      nextComposterId: 1,
      composters: new Array(),
    };
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
