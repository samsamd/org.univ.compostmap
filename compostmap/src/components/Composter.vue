<template>
  <div class="composter">
    <div
      class="card"
      :class="{
        'composter-residence':
          composter.fields.categorie.indexOf('idence') > -1,
        'composter-quartier':
          composter.fields.categorie.indexOf('uartier') > -1,
      }"
    >
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          :src="logo"
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
          <p class="title is-4">{{ composter.fields.nom }}</p>
          <p class="subtitle is-6">{{ composter.fields.categorie }}</p>
        </div>
      </div>       

        <div class="content">
          <p>
            {{ composter.fields.adresse }} <br />
            {{ composter.fields.lieu }}
          </p>
          <a :href="composter.fields.lien" target="out">
            <button class="button is-primary">
              Consulter site web
            </button>
          </a>
          <br />
          <a :href="googleMapsLink" target="out">
            <button class="button is-info">
              Ouvrir dans Google Maps
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Composter",
  props: {
      composter: {}
  },
  data() {
    return {
      image: "/assets/img/compost1.png",
      logo: "/assets/img/logofcn.png",
    };
  },
  computed: {
     googleMapsLink() {
      return (
        "https://maps.google.com/?q=" +
        this.composter.fields.location[0] +
        "," +
        this.composter.fields.location[1]
      );
    },
  },
};
</script>

<style scoped>
.composter {
  padding: 10px;
}
.composter-quartier {
  background-color: #7ab2df;
  margin: 10px;
}
.composter-residence {
  background-color: #39a079;
  margin: 10px;
}
</style>