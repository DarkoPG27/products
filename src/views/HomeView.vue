<script setup>
import Categories from "../components/Categories.vue";
</script>

<template>
  <main class="homeView"><Categories /></main>
</template>

<style>
.homeView {
  padding: 0 !important;
  margin: 0 !important;
  background-color: #789dbc;
  min-height: calc(100vh);
  height: 100%;
  background-size: cover;
  background-position: center;
}

@media screen and (max-width: 1128px) {
  .homeView {
    min-height: calc(100vh + 100px);
  }
}

@media screen and (max-width: 861px) {
  .homeView {
    min-height: calc(100vh + 400px);
  }
}

@media screen and (max-width: 300px) {
  .homeView {
    min-height: calc(100vh + 900px);
  }
}
</style>
