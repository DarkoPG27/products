<template>
  <div class="productsCategoriesTitle">
    <RouterLink class="subRoute" :to="`/`">Product Categories /</RouterLink>

    {{ products.products[0].category }}
  </div>

  <div class="productCategorySubtitle">Pick Some Product</div>
  <div class="loaderDiv">
    <Loader :loading="loading" />
  </div>
  <div class="categoryProducts">
    <div v-for="product in products.products" :key="product.id">
      <ProductCard :product="product" :loading="loading" />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";
import { ref, watch } from "vue";
import { useProductStore } from "@/stores/ProductsStore";
import { storeToRefs } from "pinia";
import Loader from "@/components/Loader.vue";
import ProductCard from "@/components/ProductCard.vue";

const route = useRoute();

const productStore = useProductStore();

const { products, loading } = storeToRefs(productStore);

productStore.getOneCategory(route.params.categoryId);

const categoryId = ref();

watch(
  () => route.params.id,
  async (newId) => {
    categoryId.value = await productStore.getOneCategory(newId);
  }
);

console.log("producst", products);
</script>

<style>
.loaderDiv {
  display: flex;
  justify-content: center;
}

.categoryProducts {
  margin: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.subRoute {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  text-transform: uppercase;
  padding: 1rem;
  font-weight: 600;
  color: #4d4d4d;
}
</style>
