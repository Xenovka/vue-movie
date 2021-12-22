<template>
  <Splide :options="splideOptions">
    <SplideSlide v-for="movie in trendingMovie" :key="movie['id']">
      <a to="" class="home__trd--wrapper">
        <img class="home__trd--image" :src="movie['poster']" :alt="movie['title']" />
        <h3 class="home__trd--title">{{ movie["title"] }}</h3>
      </a>
    </SplideSlide>
  </Splide>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";

export default {
  setup() {
    const store = useStore();
    const trendingMovie = ref(null);

    const splideOptions = {
      rewind: true,
      perPage: 1,
      autoplay: true,
      pagination: false
    };

    store.dispatch("getTrending").then(() => {
      trendingMovie.value = store.state.trendingMovie;
    });

    return {
      trendingMovie,
      splideOptions
    };
  }
};
</script>
