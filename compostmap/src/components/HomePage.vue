<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Welcome !
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
  name: "HomePage",
  props: {
    message: String,
  },
};
</script>