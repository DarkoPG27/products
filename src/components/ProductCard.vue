<template>
  <div class="cardContainer">
    <div
      class="cardImage"
      :style="{ backgroundImage: `url(${product.thumbnail})` }"
    >
      <div class="cardPriceDiscount">
        <span>{{ product.discountPercentage }} % OFF</span>
      </div>
    </div>

    <div class="cardTitle">{{ product.title }}</div>
    <div class="cardDescription">
      {{ product.description.substring(0, 120) }}...
    </div>
    <div class="cardBottom">
      <div class="cardPrice">${{ product.price }}</div>

      <RouterLink
        :to="`/category/${product.category}/${product.id}`"
        class="cardButton"
      >
        <button>See More</button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  product: {
    type: Object,
  },
  loading: {
    type: Boolean,
  },
});
</script>

<style>
.cardContainer {
  width: 250px;
  height: 400px;
  margin: 1rem;
  display: flex;
  flex-direction: column;

  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  background-color: #ffffff;
  border-radius: 1rem;
  text-decoration: none !important;
  transition: all 0.3s ease-in-out;
}

.cardContainer:hover {
  transform: scale(1.04);
  box-shadow: rgba(3, 3, 3, 0.178) 0px 10px 20px,
    rgba(49, 110, 134, 0.623) 0px 6px 6px;
}

.cardImage {
  background-size: 100% 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-content: center;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1rem 1rem 0 0;
}

.cardPriceDiscount {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 1rem;
  color: red;
  letter-spacing: 1px;
  font-size: 1.3rem;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

.cardPriceDiscount span {
  background-color: rgba(102, 51, 153, 0.966);
}

.cardTitle {
  display: flex;
  width: 95%;
  height: 50px;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  text-align: center;
  font-size: 1.2rem;
  text-transform: capitalize;
  color: #2e2e2e;
  font-weight: 600;
  margin: 0.5rem 0 0 0.5rem;
}

.cardDescription {
  display: flex;
  width: 95%;
  height: 50px;
  font-size: 12px;
  text-align: left;
  margin: 0.3rem;
  color: rgba(0, 0, 0, 0.692);
}

.cardBottom {
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-radius: 0 0 1rem 1rem;
}

.cardPrice {
  display: flex;
  width: 100%;

  justify-content: center;
  padding-left: 1rem;
  font-weight: 500;
  font-size: 2rem;
  color: #1a923c;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

.cardButton {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 50px;
  text-decoration: none !important;
  transition: all 0.3s ease-in-out;
}

.cardButton button:hover {
  background-color: #3d80b8;
}

.cardButton button {
  width: 90%;
  border: none;
  height: 40px;
  border-radius: 0.5rem;
  background-color: #789dbc;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
}

@media screen and (max-width: 628px) {
  .cardContainer {
    width: 200px;
    height: 320px;
  }

  .cardImage {
    background-size: 90% 100%;
    min-height: 120px;
  }

  .cardPriceDiscount {
    font-size: 1.1rem;
  }

  .cardTitle {
    font-size: 1rem;
  }

  .cardDescription {
    font-size: 10px;
    margin: 0.3rem;
    height: 80px;
  }

  .cardPrice {
    font-size: 1.4rem;
  }

  .cardBottom {
    height: 80px;
  }
}

@media screen and (max-width: 528px) {
  .cardContainer {
    width: 180px;
  }
}

@media screen and (max-width: 488px) {
  .cardContainer {
    width: 150px;
    height: 320px;
  }

  .cardPriceDiscount {
    font-size: 1rem;
  }
  .cardPrice {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 428px) {
  .cardContainer {
    width: 350px;
    height: 320px;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: row;
  }

  .cardImage {
    width: 150px;
    border-radius: 1rem 0 0 0;
  }

  .cardTitle {
    justify-content: center;
    width: 200px;
    height: 100px;
    margin: 1rem 0;
    font-size: 1.5rem;
  }

  .cardPriceDiscount {
    font-size: 0.9rem;
    justify-content: center;
    align-content: flex-end;
  }
  .cardPrice {
    font-size: 1.2rem;
  }

  .cardDescription {
    font-size: 1rem;
    margin: 0 1rem;
    height: 80px;
  }

  .cardBottom {
    margin: 0 1rem;
    display: flex;
    width: 100%;
    height: 100px;
  }
}

@media screen and (max-width: 385px) {
  .cardContainer {
    width: 300px;
  }

  .cardImage {
    width: 120px;
    border-radius: 1rem 0 0 0;
  }

  .cardTitle {
    justify-content: center;
    width: 150px;
  }
}

@media screen and (max-width: 325px) {
  .cardContainer {
    width: 250px;
    height: 200px;
  }

  .cardImage {
    width: 120px;
    border-radius: 1rem 0 0 0;
  }

  .cardTitle {
    justify-content: center;
    width: 130px;
  }

  .cardDescription {
    display: none;
  }

  .cardPrice {
    padding-left: 2rem;
    padding-bottom: 0.5rem;
  }

  .cardButton {
    height: 100px;
    padding-bottom: 0.5rem;
  }

  .cardBottom {
    margin: 0 0.5rem;
    display: flex;
    width: 100%;
    height: 20px;
  }
}
</style>
