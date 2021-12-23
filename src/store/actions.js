import axios from "axios";

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
        overview: movie["overview"],
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

    for (let movie of trending.results) {
      data.push({
        id: movie["id"],
        title: movie["title"],
        overview: movie["overview"],
        releaseDate: movie["release_date"],
        releaseYear: new Date(movie["release_date"]).getFullYear(),
        poster: `https://image.tmdb.org/t/p/w342${movie["poster_path"]}`,
        backdrop: `https://image.tmdb.org/t/p/w1280${movie["backdrop_path"]}`
      });
    }

    commit("updateTrendingMovieData", data);
  }
};
