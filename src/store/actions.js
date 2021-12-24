import axios from "axios";
import moment from "moment";

import getGenres from "../composable/getGenres";

const ENDPOINT = process.env.VUE_APP_API_ENDPOINT;
const APIKEY = process.env.VUE_APP_APIKEY;

export default {
  async getMovieData({ commit }) {
    const data = [];
    const getData = await axios.get(`${ENDPOINT}/movie/popular?api_key=${APIKEY}`);
    const movies = await getData.data;

    for (let movie of movies.results) {
      data.push({
        id: movie["id"],
        title: movie["title"],
        rating: movie["vote_average"],
        ratingCount: movie["vote_count"],
        releaseDate: movie["release_date"],
        releaseYear: new Date(movie["release_date"]).getFullYear(),
        poster: `https://image.tmdb.org/t/p/w500${movie["poster_path"]}`
      });
    }
    commit("updateMovieData", data);
  },
  async getTrending({ commit }) {
    const data = [];
    const getData = await axios.get(`${ENDPOINT}/trending/movie/day?api_key=${APIKEY}`);
    const trending = await getData.data;
    const getGenre = await getGenres();

    for (let movie of trending.results) {
      let overview = movie["overview"].split(" ");
      let genres = [];

      if (overview.length > 50) {
        overview = overview.slice(0, 50).join(" ") + " ...";
      } else {
        overview = overview.join(" ");
      }

      for (let genre of movie["genre_ids"]) {
        const genreName = getGenre.genres.find((g) => (g.id === genre ? g.name : null));
        genres.push(genreName.name);
      }

      genres = genres.join(", ");

      data.push({
        id: movie["id"],
        title: movie["title"],
        genres,
        overview,
        releaseDate: moment(movie["release_date"]).format("L"),
        releaseYear: new Date(movie["release_date"]).getFullYear(),
        poster: `https://image.tmdb.org/t/p/w342${movie["poster_path"]}`,
        backdrop: `https://image.tmdb.org/t/p/w1280${movie["backdrop_path"]}`
      });
    }

    commit("updateTrendingMovieData", data);
  }
};
