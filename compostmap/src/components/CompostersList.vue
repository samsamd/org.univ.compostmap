<template>
<div>
  <p class="columns">
    <button
      class="button is-primary"
      @click="composters.push({ id: (nextComposterId++).toString() })"
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
      :key="composter.recordid"
      class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
      :composter="composter"
    />
  </div>
  </div>
</template>

<script>
import Composter from "./Composter.vue";
import axios from "axios";

export default {
  name: "CompostersList",
  components: {
    Composter,
  },
  data() {
    return {
      nextComposterId: 1,
      composters: new Array(),
    };
  },
  mounted() {
    axios
    .get("https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=512042839_composteurs-quartier-nantes-metropole&rows=100")
    .then((response) => {
      this.composters=response.data.records
    })
    .catch((error) => {
      console.error(error);
    })
  }
};
</script>