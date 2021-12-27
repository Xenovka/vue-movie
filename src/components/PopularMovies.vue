<template>
  <h2 class="home__pm--main-title">Popular Movies</h2>
  <Splide :options="splideOptions">
    <SplideSlide v-for="movie in movieData" :key="movie['id']">
      <router-link to="/" class="home__pm--wrapper">
        <img class="home__pm--image" :src="movie['poster']" :alt="movie['title']" :title="movie['title']" />
        <h3 class="home__pm--title">{{ movie["title"] }}</h3>
        <p class="home__pm--rating">{{ movie["rating"] }}/10 ({{ movie["ratingCount"] }} Votes)</p>
      </router-link>
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
      pagination: false,
      breakpoints: {
        900: {
          perPage: 5
        },
        800: {
          perPage: 4
        },
        540: {
          perPage: 2
        }
      }
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
