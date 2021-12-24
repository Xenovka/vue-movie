<template>
  <h2 class="home__pm--main-title">Popular Movies</h2>
  <Splide :options="splideOptions">
    <SplideSlide v-for="movie in movieData" :key="movie['id']">
      <a to="" class="home__pm--wrapper">
        <img class="home__pm--image" :src="movie['poster']" :alt="movie['title']" :title="movie['title']" />
        <h3 class="home__pm--title">
          {{ movie["title"] }} <span class="home__pm--year">({{ movie["releaseYear"] }})</span>
        </h3>
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
    const movieData = ref(null);

    const splideOptions = {
      rewind: true,
      perPage: 6,
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
