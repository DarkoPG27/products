<template>
  <div class="reviewCardContainer">
    <div>
      RATING:
      <div class="rating">
        <span v-if="review.rating === 0"
          ><span class="yellowStar"></span
          ><span class="grayStar">★★★★★</span></span
        >

        <span v-if="review.rating === 1"
          ><span class="yellowStar">★</span
          ><span class="grayStar">★★★★</span></span
        >

        <span v-if="review.rating === 2"
          ><span class="yellowStar">★★</span
          ><span class="grayStar">★★★</span></span
        >

        <span v-if="review.rating === 3"
          ><span class="yellowStar">★★★</span
          ><span class="grayStar">★★</span></span
        >

        <span v-if="review.rating === 4"
          ><span class="yellowStar">★★★★</span
          ><span class="grayStar">★</span></span
        >

        <span v-if="review.rating === 5"
          ><span class="yellowStar">★★★★★</span><span class="grayStar"></span
        ></span>

        <div class="userInfo">
          <div>{{ review.reviewerName }}</div>
          <div>{{ review.reviewerEmail }}</div>
        </div>
      </div>
    </div>

    <div class="userReview">" {{ review.comment }} "</div>
    <div class="dateOfReview">
      {{
        `${new Date(review.date).getDate()}-${
          new Date(review.date).getMonth() + 1
        }-${new Date(review.date).getFullYear()}`
      }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  review: {
    type: Object,
  },
});
</script>

<style>
.reviewCardContainer {
  margin: 0.5rem 1rem;
}

.rating {
  display: inline;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
}

.yellowStar {
  color: rgb(255, 187, 0);
}

.grayStar {
  color: gray;
}

.userInfo {
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  font-size: 1.2rem;
  color: rgb(141, 4, 4);
}

.userReview {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 1.4rem;
}

.dateOfReview {
  display: flex;
  justify-content: flex-end;
}

@media screen and (max-width: 590px) {
  .rating {
    font-size: 1.2rem;
  }

  .userInfo {
    font-size: 1.1rem;
  }

  .userReview {
    padding: 0.9rem;
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 530px) {
  .rating {
    font-size: 1rem;
  }

  .userInfo {
    font-size: 1rem;
  }

  .userReview {
    padding: 0.9rem;
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 530px) {
  .userInfo {
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 430px) {
  .userReview {
    padding: 0.9rem;
    font-size: 1rem;
    text-align: center;
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 380px) {
  .userInfo {
    font-size: 0.8rem;
  }
}
</style>
