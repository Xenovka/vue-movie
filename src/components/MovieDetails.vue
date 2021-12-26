<template>
  <div class="details" v-if="movieData">
    <div class="details__header">
      <img class="details__backdrop" :src="movieData['backdrop']" :alt="movieData['title']" />
      <div class="details__content">
        <img class="details__image" :src="movieData['poster']" :alt="movieData['title']" />
        <div class="details__sub-content">
          <h3 class="details__title">{{ movieData["title"] }} ({{ movieData["releaseYear"] }})</h3>
          <p class="details__info">{{ movieData["releaseDate"] }} • {{ movieData["genres"] }} • {{ movieData["runtime"] }}</p>
          <h3 class="details__overview-title">Overview</h3>
          <p class="details__overview">{{ movieData["overview"] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  props: ["movieId"],
  setup(props) {
    const movieData = ref(null);
    const store = useStore();

    store.dispatch("getDetails", props.movieId).then(() => {
      movieData.value = store.state.movieData;
    });

    return {
      movieData
    };
  }
};
</script>

<style lang="scss" scoped>
.details {
  margin-top: 4rem !important;

  &__header {
    position: relative;
    height: 55rem;
  }

  &__title {
    padding: 0;
    font-size: 4rem;
    font-weight: 600;
    color: #fff;
  }

  &__info {
    font-size: 1.8rem;
    color: #fff;
  }

  &__content {
    position: absolute;
    top: 10%;
    left: 10%;
    display: flex;
  }

  &__sub-content {
    padding: 3rem 4rem;
    text-align: left;
  }

  &__overview {
    font-size: 1.6rem;
    color: #fff;
    padding-right: 15rem;

    &-title {
      margin-top: 2rem;
      font-size: 2.2rem;
      font-weight: 600;
      color: #fff;
    }
  }

  &__backdrop {
    width: 100%;
    height: 100%;
    filter: brightness(0.3);
  }

  &__image {
    width: 330px;
    height: 430px;
    border-radius: 6px;
  }
}
</style>
