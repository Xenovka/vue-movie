<template>
  <div class="container p-4 text-center home">
    <h1 class="home__main-title">Welcome to Vumovi</h1>
    <Splide :options="splideOptions">
      <SplideSlide v-for="movie in movieData" :key="movie['id']">
        <img class="home__tm-image" :src="movie['poster']" :alt="movie['title']" />
        <h4 class="home__tm-image--title text-center">{{ movie["title"] }}</h4>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";

export default {
  setup() {
    const store = useStore();
    const movieData = ref(null);
    const splideOptions = {
      rewind: true,
      perPage: 3,
      gap: "1rem",
      pagination: false
    };

    store.dispatch("getMovieData").then(() => {
      movieData.value = store.state.movieData;
    });

    return {
      movieData,
      splideOptions
    };
  }
};
</script>

<style lang="scss">
.home {
  &__main-title {
    font-size: 4.4rem;
  }

  &__tm-image {
    width: 100%;
    height: 100%;

    &--title {
      font-size: 1.4rem;
      font-weight: 600;
    }
  }
}

.splide__arrow {
  font-size: 3rem;
}
</style>
