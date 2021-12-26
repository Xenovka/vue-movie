<template>
  <div class="container p-4 text-center movies">
    <h1 class="movies__title">Search Movies</h1>
    <form class="movies__search" @submit.prevent="searchMovie">
      <input
        placeholder="Movie Title..."
        type="text"
        v-model="movieInput"
        ref="input"
        @input="searchMovie(movieInput)"
        class="movies__search--input"
      />
    </form>
    <h2 class="movies__search--text">{{ movieInput ? `Showing Result For "${movieInput}"` : "" }}</h2>
    <div class="row g-4" v-if="movieData">
      <div class="col-lg-2 movies__items" v-for="movie in movieData" :key="movie['id']">
        <router-link :to="'/movies/details/' + movie['id']">
          <img :src="movie['poster']" :alt="movie['title']" :title="movie['title']" class="movies__images" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const movieData = ref(null);
    const movieInput = ref("");
    const input = ref("");

    const searchMovie = (title) => {
      store.dispatch("searchMovie", title).then(() => {
        movieData.value = store.state.movieData;
      });
    };

    return {
      movieData,
      movieInput,
      input,
      searchMovie
    };
  }
};
</script>

<style lang="scss">
.movies {
  &__title {
    font-size: 4rem;
    font-weight: 600;
    color: #fff;
    margin-top: 4rem;
  }

  &__search {
    width: 100%;
    margin-top: 2rem;
    position: relative;

    &--text {
      margin-top: 2rem;
      margin-bottom: 4rem;
      font-size: 2.4rem;
      font-weight: 600;
      color: #fff;
    }

    &--input,
    &--submit {
      font-size: 1.8rem;
      font-weight: 600;
      border: none;
      outline: none;
      border-radius: 26px;
    }

    &--input {
      width: 40%;
      padding: 10px 20px;
    }

    &--submit {
      font-size: 1.8rem;
      padding: 10px 34px;
      margin-left: 1rem;
    }
  }

  &__items {
    display: block;
  }

  &__images {
    width: 100%;
    height: 100%;
  }
}
</style>
