<template>
  <div>
    <h1>Détails du composteur {{ id }}</h1>
    <Composter :composter-id="id" />
  </div>
</template>

<script>
import Composter from "./Composter.vue";
export default {
  name: "ComposterDetailPage",
  props: {
    id: String,
  },
  components: {
    Composter,
  },
};
</script>