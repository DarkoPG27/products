<template>
  <div class="productsCategoriesTitle">Products Categories</div>
  <div class="productCategorySubtitle">Pick Some Category</div>

  <div class="categoriesContainer">
    <Loader :loading="loading" />

    <CategoryCard :categories="categories" :loading="loading" />
  </div>
</template>

<script setup>
import { useProductStore } from "@/stores/ProductsStore";
import { storeToRefs } from "pinia";
import Loader from "./Loader.vue";
import CategoryCard from "../components/CategoryCard.vue";

const productStore = useProductStore();

const { categories, loading } = storeToRefs(productStore);

productStore.getAllProductsCategories();
</script>

<style>
.productsCategoriesTitle {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  text-transform: uppercase;
  padding: 1rem;
  font-weight: 600;
  color: #4d4d4d;
  text-align: center;
  flex-direction: column;
}

.productsCategoriesTitle a {
  text-decoration: none;
  color: #4d4d4d;
}

.productCategorySubtitle {
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 700;
  color: #e2e2e2;
}

.categoriesContainer {
  margin: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
}

@media screen and (max-width: 580px) {
  .productsCategoriesTitle {
    font-size: 1.2rem;
  }
  .productsCategoriesTitle a {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 430px) {
  .productsCategoriesTitle {
    font-size: 1.2rem;
  }
  .productsCategoriesTitle a {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 380px) {
  .productsCategoriesTitle {
    font-size: 0.9rem;
  }

  .productsCategoriesTitle a {
    font-size: 0.9rem;
  }
}

.productCategorySubtitle {
  font-size: 0.8rem;
}
</style>
