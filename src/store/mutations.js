export default {
  updateMovieData(state, data) {
    state.movieData = data;
  },
  updateTrendingMovieData(state, data) {
    state.trendingMovie = data;
  },
  updateNowPlayingMovieData(state, data) {
    state.nowPlayingMovie = data;
  },
  updatePeopleData(state, data) {
    state.peopleData = data;
  }
};
