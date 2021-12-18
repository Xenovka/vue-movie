import axios from "axios";

export default {
  async getMovieData({ commit }) {
    const getData = await axios.get(`https://imdb-api.com/en/API/Top250Movies/${process.env.VUE_APP_APIKEY}`);
    const movies = await getData.data;
    commit("changeMovieData", movies);
  }
};
