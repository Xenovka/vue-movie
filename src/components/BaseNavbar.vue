<template>
  <div class="container navbar">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="navbar__title text-center">Vumovin.</h2>
      </div>
      <div class="col-lg-12 navbar__list">
        <router-link class="navbar__list--item" to="/">Home</router-link>
        <router-link class="navbar__list--item" to="/movies">Movies</router-link>
        <router-link class="navbar__list--item" to="/people">People</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  display: block;

  &__title {
    padding: 0 calc(1.5rem * 0.5) !important;
    font-size: 3.6rem;
    font-weight: 900;
    color: #fff;
  }

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;

    &--item {
      position: relative;
      padding: 1rem 2rem;
      font-size: 1.6rem;
      font-weight: 600;
      text-decoration: none;
      text-transform: uppercase;
      color: #fff;

      &:hover {
        content: "";
        cursor: pointer;
        color: #ccc;
      }

      &::after,
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        background-color: #fff;
        border: 1px solid #fff;
        transition: all 0.3s ease;
      }

      &::after {
        left: 0;
        bottom: 0;
        transform: scaleX(0);
        transform-origin: left;
      }

      &::before {
        right: 0;
        top: 0;
        transform: scaleX(0);
        transform-origin: right;
      }

      &:hover::after,
      &:hover::before {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
}
</style>
