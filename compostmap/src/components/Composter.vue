<template>
  <div class="composter">
    <div class="card" :class="{ 'composter-opened': isOpen, 'composter-closed': !isOpen}">
      <div class="card-image" :style="{ cursor: openingSchedules.length > 5 ? 'pointer': ''}">
        <figure class="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="image" v-on:mouseover="removeFirstOpeningSchedule" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ componentTitle }}</p>
            <p class="subtitle is-6">{{ focusedDay }}</p>
          </div>
        </div>       

        <div class="content">
          <p>
            Horaires d'ouvertures:
            <ul>
              <li
                v-for="openingSchedule in openingSchedules"
                v-bind:key="openingSchedule.day"
                v-on:mouseout="updateFocusedDay(openingSchedule)"
              >
                {{ openingSchedule.day }} : De {{ openingSchedule.opening_hour }}h à
                {{ openingSchedule.closing_hour }}h
              </li>
            </ul>

          <button v-on:click="addOpeningSchedule" class="button is-primary">
            Ajouter horaire d'ouverture
          </button>
          </p>
          <div  :class="{ 'adresse-in-toulouse': adresse.indexOf('Toulouse') > -1, 'adresse-in-nantes': adresse.indexOf('Nantes') > -1, 'adresse-opened': isOpen}">
            <a :href="url">
              Adresse: {{ adresse }}</a>
            <p v-if="isOpen">Ouvert</p>
            <p v-else>Fermé</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Composter",
  props: {
      composterId: Number
  },
  data() {
    return {
      image: "./assets/img/compost1.png",
      url: "https://vuejs.org/",
      focusedDay: "",
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
  computed: {
    componentTitle() {
      return 'Composter ' + this.composterId
    },
    isOpen() {
      return this.composterId %2 == 0 && this.openingSchedules.length > 0
    },
    adresse() {
      return '28 rue des plantes en pots ' + (this.composterId % 3 == 0 ? '4400 Nantes' : 'Toulouse')
    }
  },
  methods: {
    addOpeningSchedule() {
      this.openingSchedules.push({
        day: "Dimanche",
        opening_hour: 9,
        closing_hour: 12,
      });
    },
    removeFirstOpeningSchedule() {
      this.openingSchedules.pop();
    },
    updateFocusedDay(schedule) {
      this.focusedDay = schedule.day;
    },
  },
};
</script>

<style scoped>
.composter {
  padding: 10px;
}
.composter-opened {
  background-color: #A6D785;
  border: 2px solid #3B5E2B;
  margin: 10px;
}
.composter-closed {
  background-color: #F5F5F5;
  border: 2px dashed #C0C0C0;
  margin: 10px;
}
.adresse-in-toulouse {
  background-color: pink;
}
.adresse-in-nantes {
  background-color: yellow;
}
.adresse-opened {
  font-weight: bolder;
}
</style>