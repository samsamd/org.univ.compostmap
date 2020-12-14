<template>
  <h1>Compost {{ id }}</h1>
  <a :href="url">Adresse: {{ adresse }}</a>
  <p v-if="adresse.indexOf('Nantes') > -1">Situé à Nantes !</p>
  <div class="compost-image">
    <img :src="image" />
  </div>
</template>

<script>
export default {
  name: "Composter",
  data() {
    return {
      id: 42,
      adresse: "28 rue des plantes en pots, 4400 Nantes",
      image: "./assets/img/compost1.png",
      url: "https://vuejs.org/",
    };
  },
};
</script>
