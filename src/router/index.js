import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Movies from "../views/Movies.vue";
import MovieDetails from "../components/MovieDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies
  },
  {
    path: "/movies/details/:movieId",
    name: "MovieDetails",
    component: MovieDetails,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
