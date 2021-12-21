import axios from "axios";

const ENDPOINT = process.env.VUE_APP_API_ENDPOINT;
const APIKEY = process.env.VUE_APP_APIKEY;

export default {
  async getMovieData({ commit }) {
    const data = [];
    const getData = await axios.get(`${ENDPOINT}/movie/top_rated?api_key=${APIKEY}`);
    const movies = await getData.data;

    for (let movie of movies.results) {
      data.push({
        id: movie["id"],
        title: movie["title"],
        rating: movie["vote_average"],
        ratingCount: movie["vote_count"],
        poster: `https://image.tmdb.org/t/p/w500/${movie["poster_path"]}`
      });
    }
    commit("changeMovieData", data);
  }
};
