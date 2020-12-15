<template>
  <h1>Compost {{ id }}</h1>
  <p>
    {{ responsables }}
  </p>

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
      responsables: [
        {
          first_name: "Alex",
          last_name: "Morel",
        },
        {
          first_name: "Amandine",
          last_name: "Lagarde",
        },
        {
          first_name: "Pascal",
          last_name: "André",
        },
      ],
    };
  },
};
</script>
