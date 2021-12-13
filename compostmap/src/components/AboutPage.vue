<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          À propos
        </h1>
        <h2 class="subtitle">
          {{ message }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutPage",
  props: {
    message: String,
  },
};
</script>