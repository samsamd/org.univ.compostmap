<template>
  <h1>Compost {{ id }}</h1>
  <a :href="url">Adresse: {{ adresse }}</a>
  <p v-if="isOpen">Ouvert</p>
  <p v-else>Fermé</p>
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
      isOpen: true,
      url: "https://vuejs.org/",
    };
  },
};
</script>
