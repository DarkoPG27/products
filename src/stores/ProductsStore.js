import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [],
    categories: [],
    loading: false,
  }),
  getters: {},
  actions: {
    async getAllProductsCategories() {
      this.loading = true;
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();

      this.categories = data;
      this.loading = false;
    },

    async getOneCategory(id) {
      this.loading = true;
      const res = await fetch("https://dummyjson.com/products/category/" + id);
      const data = await res.json();

      this.products = data;
      this.loading = false;
    },

    async getOneProduct(id) {
      this.loading = true;
      const res = await fetch("https://dummyjson.com/products/" + id);
      const data = await res.json();

      this.products = data;
      this.loading = false;
    },
  },
});
