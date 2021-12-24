<template>
  <div class="container p-4 text-center home">
    <div class="row">
      <div class="col-lg-12 home__td">
        <trending-movies />
      </div>
      <div class="col-lg-12 home__pm">
        <popular-movies />
      </div>
      <div class="col-lg-12 home__np">
        <now-playing-movies />
      </div>
    </div>
  </div>
</template>

<script>
import TrendingMovies from "../components/TrendingMovies.vue";
import PopularMovies from "../components/PopularMovies.vue";
import NowPlayingMovies from "../components/NowPlayingMovie.vue";

export default {
  components: {
    TrendingMovies,
    PopularMovies,
    NowPlayingMovies
  }
};
</script>

<style lang="scss">
.home {
  &__pm,
  &__np {
    &--wrapper {
      position: relative;
      display: block;
      cursor: pointer;
      text-decoration: none;
      height: 90%;
      border-radius: 6px;
      background-color: #272727;
      overflow: hidden;
    }
  }

  &__tm,
  &__pm,
  &__np {
    margin-top: 3rem !important;

    &--image {
      width: 100%;
      height: 70%;
    }

    &--title {
      padding: 1rem;
      font-size: 1.6rem;
      color: #fff;
      font-weight: 600;
    }

    &--rating,
    &--release {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.4rem;
      font-weight: 600;
      color: #fff;
    }

    &--main-title {
      font-size: 3.2rem;
      font-weight: 600;
      color: #fff;
      text-align: left;
      margin-bottom: 2rem;
    }
  }

  &__tm {
    margin-top: 0 !important;

    &--wrapper {
      display: block;
      height: 90%;
      width: 100%;
    }

    &--title {
      padding: 0;
      font-size: 4rem;
    }

    &--year {
      font-size: 2.6rem;
    }

    &--details {
      font-size: 1.8rem;
      color: #fff;
    }

    &--content {
      position: absolute;
      top: 10%;
      left: 10%;
      display: flex;
    }

    &--sub-content {
      padding: 3rem 4rem;
      text-align: left;
    }

    &--overview {
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

    &--backdrop {
      width: 100%;
      height: 100%;
      filter: brightness(0.3);
    }

    &--image {
      width: 240px;
      height: 330px;
      border-radius: 6px;
    }
  }

  &__np {
    margin-top: 1rem !important;
  }
}

.splide__arrow {
  font-size: 2.6rem;
  border-radius: 0px !important;
  padding: 4rem 0 !important;
  top: 40% !important;
  opacity: 1 !important;

  &--next {
    right: 0 !important;
  }

  &--prev {
    left: 0 !important;
  }
}

.splide__slide {
  height: 45rem;
}
</style>
