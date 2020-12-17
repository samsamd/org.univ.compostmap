<template>
  <h1>Compost {{ id }}</h1>

  <button v-on:click="myClickMethod">Click me !</button>
  <br />

  Horaires d'ouvertures:
  <ul>
    <li
      v-for="openingSchedule in openingSchedules"
      v-bind:key="openingSchedule.day"
    >
      {{ openingSchedule.day }} : De {{ openingSchedule.opening_hour }}h à
      {{ openingSchedule.closing_hour }}h
    </li>
  </ul>

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
      openingSchedules: [
        { day: "Lundi", opening_hour: 9, closing_hour: 12 },
        { day: "Mardi", opening_hour: 11, closing_hour: 14 },
        { day: "Mercredi", opening_hour: 11, closing_hour: 14 },
        { day: "Jeudi", opening_hour: 11, closing_hour: 14 },
        { day: "Vendredi", opening_hour: 11, closing_hour: 14 },
        { day: "Samedi", opening_hour: 14, closing_hour: 20 },
      ],
    };
  },
  methods: {
    myClickMethod() {
      this.adresse += "!!";
      this.id += "!!";
    },
  },
};
</script>
