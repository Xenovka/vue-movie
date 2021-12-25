<template>
  <div class="container navbar">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="navbar__title text-center">Vumovin</h2>
      </div>
      <div class="col-lg-12 navbar__list">
        <a class="navbar__list--item" to="">Home</a>
        <a class="navbar__list--item" to="">Movies</a>
        <a class="navbar__list--item" to="">Actor</a>
        <a class="navbar__list--item" to="">Actress</a>
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
    font-weight: 600;
    color: #fff;
  }

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;

    &--item {
      padding: 1rem 2rem;
      font-size: 1.6rem;
      font-weight: 600;
      text-decoration: none;
      text-transform: uppercase;
      color: #fff;

      &:hover {
        cursor: pointer;
        color: #ccc;
      }
    }
  }
}
</style>
