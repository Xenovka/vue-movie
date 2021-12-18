<template>
  <div class="container p-4 text-center home">
    <h1 class="home__main-title">Welcome to Vumovi</h1>
    <Splide :options="splideOptions">
      <SplideSlide v-for="movie in movieData" :key="movie['id']">
        <img class="home__tm-image" :src="movie['image']" :alt="movie['fullTitle']" />
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
    const splideOptions = { rewind: true, perPage: 3, gap: "1rem" };

    store.dispatch("getMovieData").then(() => {
      console.log(store.state.movieData);
      movieData.value = store.state.movieData.items.slice(0, 25);
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
  }
}

.splide__arrow {
  font-size: 3rem;
}
</style>
