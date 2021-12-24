<template>
  <h2 class="home__np--main-title">Now Playing</h2>
  <Splide :options="splideOptions">
    <SplideSlide v-for="movie in movieData" :key="movie['id']">
      <a to="" class="home__np--wrapper">
        <img class="home__np--image" :src="movie['poster']" :alt="movie['title']" :title="movie['title']" />
        <h3 class="home__np--title">{{ movie["title"] }}</h3>
        <p class="home__np--release">{{ movie["releaseDate"] }}</p>
      </a>
    </SplideSlide>
  </Splide>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
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

    store.dispatch("getNowPlaying").then(() => {
      movieData.value = store.state.nowPlayingMovie;
    });

    return {
      movieData,
      splideOptions
    };
  }
};
</script>
