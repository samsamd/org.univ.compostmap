<template>
  <div>
    <h1>Détails du composteur {{ id }}</h1>
    <Composter v-if="!isLoading" :composter="composter" />
    <p v-else>Chargement en cours...</p>
  </div>
</template>

<script>
import Composter from "./Composter.vue";
import axios from "axios";

export default {
  name: "ComposterDetailPage",
  props: {
    id: String,
  },
  data() {
    return {
      isLoading: true,
      composter: {},
    };
  },
  components: {
    Composter,
  },
  mounted() {
    axios
      .get(
        "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=512042839_composteurs-quartier-nantes-metropole&rows=100"
      )
      .then((response) => {
        var composterWithId = response.data.records.filter(
          (record) => record.recordid == this.id
        );
        if (composterWithId.length > 0) {
          this.composter = response.data.records[0];
          this.isLoading = false;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
