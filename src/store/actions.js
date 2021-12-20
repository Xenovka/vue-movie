import axios from "axios";

export default {
  async getMovieData({ commit }) {
    const data = [];
    const getData = await axios.get(`https://imdb-api.com/en/API/Top250Movies/${process.env.VUE_APP_APIKEY}`);
    const movies = await getData.data;

    const sliceMovies = movies.items.slice(0, 25);

    for (let movie of sliceMovies) {
      const getPoster = await axios.get(`https://imdb-api.com/API/Posters/${process.env.VUE_APP_APIKEY}/${movie.id}`);
      const poster = await getPoster.data;
      data.push({
        id: movie.id,
        title: movie.fullTitle,
        rating: movie.imDbRating,
        ratingCount: movie.imDbRatingCount,
        poster: poster.posters[0].link
      });
    }
    commit("changeMovieData", data);
  }
};
