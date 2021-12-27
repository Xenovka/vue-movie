import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Movies from "../views/Movies.vue";
import MovieDetails from "../components/MovieDetails.vue";
import People from "../views/People.vue";

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
  },
  {
    path: "/people",
    name: "People",
    component: People
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
