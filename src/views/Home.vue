<template>
  <div class="container p-4 text-center home">
    <div class="row">
      <div class="col-12 home__tm">
        <trending-movies />
      </div>
      <div class="col-12 home__pm">
        <popular-movies />
      </div>
      <div class="col-12 home__np">
        <now-playing-movies />
      </div>
    </div>
  </div>
  <div class="container-fluid home__footer">
    <base-footer />
  </div>
</template>

<script>
import TrendingMovies from "../components/TrendingMovies.vue";
import PopularMovies from "../components/PopularMovies.vue";
import NowPlayingMovies from "../components/NowPlayingMovie.vue";
import BaseFooter from "../components/BaseFooter.vue";

export default {
  components: {
    TrendingMovies,
    PopularMovies,
    NowPlayingMovies,
    BaseFooter
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
      border-radius: 6px;
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

  &__footer {
    height: 25rem;
    background-color: #272727;
    display: flex;
    align-items: center;
    padding: 10rem 20rem !important;

    &--title {
      color: #fff;
      font-size: 5.6rem;
      font-weight: 600;
      margin-right: 10rem;
    }

    &--description {
      font-size: 1.4rem;
      color: #fff;
    }

    &--tmdb,
    &--link {
      font-size: 1.6rem;
      font-weight: 600;
      text-decoration: none;
      color: #fff;

      & > a:hover {
        color: #ddd;
      }
    }
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

@media only screen and (max-width: 1000px) {
  .home {
    &__tm {
      &--sub-content {
        padding: 0 2rem;
      }
      &--overview {
        padding-right: 0rem;
      }
    }

    &__footer {
      padding: 0 5rem !important;

      &--title {
        margin-right: 4rem;
      }
    }
  }

  .container {
    width: 100% !important;
    max-width: 100% !important;
  }
}

@media only screen and (max-width: 800px) {
  .home {
    &__tm {
      &--content {
        left: 5%;
      }

      &--sub-content {
        padding: 1rem;
        padding-right: 4rem;
      }
    }
  }
}

@media only screen and (max-width: 700px) {
  .home {
    &__tm {
      &--title {
        font-size: 2.8rem;
      }

      &--details {
        font-size: 1.4rem;
      }

      &--overview {
        font-size: 1.4rem;
      }
    }

    &__footer {
      padding: 0 2rem !important;

      &--title {
        font-size: 3.6rem;
        margin-right: 2rem;
      }

      &--description {
        font-size: 1.2rem;
      }
    }
  }
}

@media only screen and (max-width: 560px) {
  .home {
    &__tm {
      &--title {
        margin-top: 1rem;
      }

      &--content {
        top: 5%;
        left: 5%;
        flex-direction: column;
      }

      &--sub-content {
        padding: 0;
      }

      &--overview {
        font-size: 1.2rem;

        &-title {
          font-size: 1.6rem;
        }
      }

      &--image {
        width: 130px;
        height: 180px;
      }
    }
  }
}

@media only screen and (max-width: 500px) {
  .home {
    &__footer {
      display: block;
      text-align: center;
      padding: 4rem 2rem !important;
    }
  }
}

@media only screen and (max-width: 420px) {
  .home {
    &__tm {
      &--title {
        font-size: 2.2rem;
      }
    }
  }
}
</style>
