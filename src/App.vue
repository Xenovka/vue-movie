<template>
  <base-navbar />
  <router-view />
</template>

<script>
import BaseNavbar from "./components/BaseNavbar.vue";

export default {
  components: {
    BaseNavbar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap");

* {
  margin: 0;
  padding: 0;
  font-size: 62.5%;
  font-family: "Source Sans Pro", sans-serif;
}

body {
  background-color: #141414 !important;
}
</style>
