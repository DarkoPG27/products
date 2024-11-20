<template>
  <div
    v-if="!loading"
    v-for="category in categories"
    :key="category.name"
    class="categoryCard"
  >
    <RouterLink :to="`/category/${category.slug}`">
      <button class="button-48" role="button">
        <span class="text">{{ category.name }}</span>
      </button>
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  categories: {
    type: Object,
  },
  loading: {
    type: Boolean,
  },
});
</script>

<style>
.categoryCard {
  margin: 0.5rem;
  transition: all 0.3s ease-in-out;
}

.categoryName {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-content: center !important;
  width: 100%;
  height: 100%;
  color: #4d4d4d;
}

.categoryCard:hover {
  cursor: pointer;
  transform: scale(1.04);
  box-shadow: rgb(201, 233, 210, 0.3) 0px 1px 1px 0px inset,
    rgba(01, 233, 210, 0.25) 0px 50px 100px -20px,
    rgba(01, 233, 210, 0.3) 0px 30px 60px -30px;
}

/* CSS */
.button-48 {
  width: 250px;
  height: 60px;

  padding: 0.3rem 0.5rem;
  border-radius: 1rem;
  font-size: 1.4rem;

  font-weight: 700;
  text-transform: uppercase;
  background-color: #ffffff;
  transition: all 0.3s ease-in-out;

  appearance: none;

  border-width: 0;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: inline-block;
  font-family: Clarkson, Helvetica, sans-serif;

  opacity: 1;
  outline: 0;

  position: relative;
  text-align: center;
  text-decoration: none;

  transition: opacity 300ms cubic-bezier(0.694, 0, 0.335, 1),
    background-color 100ms cubic-bezier(0.694, 0, 0.335, 1),
    color 100ms cubic-bezier(0.694, 0, 0.335, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
}

.button-48:before {
  animation: opacityFallbackOut 0.5s step-end forwards;
  backface-visibility: hidden;
  background-color: #ebebeb;
  clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: translateZ(0);
  transition: clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
    -webkit-clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  width: 100%;
  border-radius: 1rem;
}

.button-48:hover:before {
  animation: opacityFallbackIn 0s step-start forwards;
  clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
}

.button-48:after {
  background-color: #ffffff;
}

.button-48 span {
  z-index: 1;
  position: relative;
}

@media screen and (max-width: 600px) {
  .button-48 {
    max-width: 230px;
  }
}

@media screen and (max-width: 556px) {
  .button-48 {
    max-width: 200px;
  }
}

@media screen and (max-width: 500px) {
  .button-48 {
    max-width: 170px;
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 436px) {
  .button-48 {
    max-width: 150px;
    font-size: 1.1rem;
  }
}

@media screen and (max-width: 400px) {
  .button-48 {
    max-width: 130px;
    font-size: 1rem;
  }
}

@media screen and (max-width: 360px) {
  .button-48 {
    max-width: 120px;
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 336px) {
  .button-48 {
    max-width: 110px;
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 316px) {
  .button-48 {
    max-width: 100px;
    font-size: 0.6rem;
  }
}

@media screen and (max-width: 300px) {
  .button-48 {
    max-width: 100%;
    height: 40px;
    font-size: 1rem;
  }
}
</style>
