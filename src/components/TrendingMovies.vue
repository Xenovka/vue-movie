<template>
  <h2 class="home__tm--main-title">Trending Movies</h2>
  <Splide :options="splideOptions">
    <SplideSlide v-for="movie in trendingMovie" :key="movie['id']" class="position-relative">
      <img class="home__tm--backdrop" :src="movie['backdrop']" :alt="movie['title']" />
      <a to="" class="home__tm--wrapper">
        <div class="home__tm--content">
          <img class="home__tm--image" :src="movie['poster']" :alt="movie['title']" />
          <div class="home__tm--sub-content">
            <h3 class="home__tm--title">
              {{ movie["title"] }} <span class="home__tm--year">({{ movie["releaseYear"] }})</span>
            </h3>
            <p class="home__tm--details">{{ movie["releaseDate"] }} • {{ movie["genres"] }}</p>
            <h3 class="home__tm--overview-title">Overview</h3>
            <p class="home__tm--overview">{{ movie["overview"] }}</p>
          </div>
        </div>
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
