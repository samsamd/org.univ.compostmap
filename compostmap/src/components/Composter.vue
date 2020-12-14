<template>
  <h1>Compost {{ id }}</h1>
  <a :href="url">Adresse: {{ adresse }}</a>
  <p v-if="adresse.indexOf('Nantes') > -1">Situé à Nantes !</p>
  <p v-else-if="adresse.indexOf('Toulouse') > -1">
    Situé à Toulouse (Chocolatine power)
  </p>
  <p v-else>Situé quelque part</p>
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
      adresse: "28 rue des plantes en pots, 4400 Toulouse",
      image: "./assets/img/compost1.png",
      url: "https://vuejs.org/",
    };
  },
};
</script>
