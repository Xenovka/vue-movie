<template>
  <div class="container p-4 text-center home">
    <div class="row">
      <div class="col-lg-8 offset-lg-2 home__trd">
        <trending-movies />
      </div>
      <div class="col-lg-12 home__tm">
        <popular-movies />
      </div>
    </div>
  </div>
</template>

<script>
import TrendingMovies from "../components/TrendingMovies.vue";
import PopularMovies from "../components/PopularMovies.vue";

export default {
  components: {
    TrendingMovies,
    PopularMovies
  }
};
</script>

<style lang="scss">
.home {
  &__tm {
    margin-top: 10rem !important;

    &--wrapper {
      display: block;
      cursor: pointer;
      text-decoration: none;
    }

    &--image {
      width: 100%;
      height: 100%;
    }

    &--title {
      padding: 1rem;
      font-size: 1.4rem;
      color: #fff;
    }
  }

  &__trd {
    &--wrapper {
      display: block;
      height: 100%;
      width: 100%;
    }

    &--image {
      width: 100%;
      height: 100%;
    }
  }
}

.splide__arrow {
  font-size: 3rem;
  border-radius: 6px !important;
  top: 40% !important;

  &--next {
    right: 0 !important;
  }

  &--prev {
    left: 0 !important;
  }
}

.splide__slide {
  height: 50rem;
}
</style>
