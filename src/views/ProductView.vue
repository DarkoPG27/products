<template>
  <div class="productsCategoriesTitle">
    <RouterLink class="subRoute" :to="`/category/${products.category}`"
      >{{ products.category }}
    </RouterLink>
    {{ products.title }}
  </div>
  <div class="productCategorySubtitle">Product Detail</div>
  <div class="productContainer">
    <Loader :loading="loading" />
  </div>
  <div class="productContainer" v-if="!loading">
    <div class="containerOne">
      <div
        class="productImage"
        :style="{ backgroundImage: `url(${products.thumbnail})` }"
      >
        <div class="cardPriceDiscount">
          <span>{{ products.discountPercentage }} % OFF</span>
        </div>
      </div>
      <div class="cardPrice">$ {{ products.price }}</div>
      <div class="productDescription">{{ products.description }}</div>

      <div class="specification">
        <table border>
          <tr>
            <th>Brand</th>
            <th>SKU</th>
            <th>Weight</th>
            <th>Width</th>
            <th>Height</th>
            <th>Depth</th>
          </tr>

          <tr :style="{ textAlign: 'center' }">
            <td>{{ products.brand }}</td>
            <td>{{ products.sku }}</td>
            <td>{{ products.weight }}</td>
            <td>{{ products.dimensions.width }}</td>
            <td>{{ products.dimensions.height }}</td>
            <td>{{ products.dimensions.depth }}</td>
          </tr>
        </table>
        <div class="orderBottom">
          <div class="firstPart">
            <div class="orderInfo">
              In Stock: <span>{{ products.stock }}</span>
            </div>
            <div class="orderInfo">
              Warranty Information:
              <span>{{ products.warrantyInformation }}</span>
            </div>
            <div class="orderInfo">
              Shipping Information :
              <span>{{ products.shippingInformation }}</span>
            </div>
            <div class="orderInfo">
              Availability Status :
              <span>{{ products.availabilityStatus }}</span>
            </div>
            <div class="orderInfo">
              Return Policy : <span>{{ products.returnPolicy }}</span>
            </div>
            <div class="orderInfo">
              Minimum Order Quantity :
              <span>{{ products.minimumOrderQuantity }}</span>
            </div>
          </div>
          <div class="secondPart">
            <button @click="greet">ORDER NOW</button>
          </div>
        </div>
      </div>
    </div>

    <div class="containerTwo">
      <div
        class="reviewCard"
        v-for="review in products.reviews"
        :key="review.date"
      >
        <ReviewCard :review="review" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import { useProductStore } from "@/stores/ProductsStore";
import { storeToRefs } from "pinia";
import Loader from "@/components/Loader.vue";
import ReviewCard from "@/components/ReviewCard.vue";

const route = useRoute();

const productStore = useProductStore();

const { products, loading } = storeToRefs(productStore);

productStore.getOneProduct(route.params.productId);

const productId = ref();

watch(
  () => route.params.id,
  async (newId) => {
    productId.value = await productStore.getOneProduct(newId);
  }
);

function greet() {
  alert(`Ovo je samo test. DARKOPG27 `);
}

console.log("producst", products);
</script>

<style>
.productContainer {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
}

.containerOne {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}

.productImage {
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-content: center;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1rem 1rem 0 0;
}

.productDescription {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 1rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 600;
  text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.specification {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
}

.specItem span {
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  color: rebeccapurple;
  padding-left: 1rem;
}

.orderInfo {
  font-size: 15px;
  padding-left: 2rem;
}

.orderInfo span {
  justify-content: flex-end;
}

.containerTwo {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem;
}

.reviewCard {
  display: flex;
  flex-direction: column;
  border-radius: 1rem 1rem 0 1rem;
  background-color: #c9e9d2;
  margin: 0.5rem 1rem;
}

.orderBottom {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #789dbc3a;
}

.orderBottom button {
  width: 100%;
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

.orderBottom button:hover {
  background-color: #3d80b8;
}

.productsCategoriesTitle {
  text-align: center;
}

@media screen and (max-width: 1000px) {
  .productContainer {
    flex-direction: column;
  }

  .containerOne {
    width: 90%;
  }
  .containerTwo {
    width: 90%;
  }
}

@media screen and (max-width: 1000px) {
  .productContainer {
    flex-direction: column;
  }

  .containerOne {
    width: 90%;
  }
  .containerTwo {
    width: 90%;
  }
}

@media screen and (max-width: 530px) {
  .orderBottom {
    flex-direction: column;
    width: 100%;
  }

  .orderBottom button {
    margin: 0.5rem;
  }

  .firstPart,
  .secondPart {
    width: 90%;
  }
}

@media screen and (max-width: 380px) {
  .specification table th,
  .specification table tr {
    font-size: 12px;
  }
}
</style>
