<template>
  <h1 class="home__footer--title">Vumovin.</h1>
  <div class="home__footer--content">
    <p class="home__footer--description">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident exercitationem minus velit fuga accusantium, similique nihil tempora ducimus
      assumenda labore ab commodi dicta quia id sequi! Assumenda nemo quasi vitae. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Doloremque quisquam nisi repudiandae accusamus dolorem voluptatibus.
    </p>
    <h3 class="home__footer--tmdb">All Movies Data Was Provided By <a class="home__footer--link" href="https://www.themoviedb.org/">TMDB API</a>.</h3>
  </div>
</template>

<style lang="scss">
.home {
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

@media only screen and (max-width: 1000px) {
  .home__footer {
    padding: 0 5rem !important;

    &--title {
      margin-right: 4rem;
    }
  }
}

@media only screen and (max-width: 700px) {
  .home__footer {
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

@media only screen and (max-width: 500px) {
  .home__footer {
    display: block;
    text-align: center;
    padding: 4rem 2rem !important;
  }
}
</style>
