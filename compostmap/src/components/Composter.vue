<template>
  <h1>Compost {{ id }}</h1>
  <a :href="url">Adresse: {{ adresse }}</a>
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
      adresse: "28 rue des plantes en pots",
      image: "./assets/img/compost1.png",
      url: "https://vuejs.org/",
    };
  },
};
</script>
