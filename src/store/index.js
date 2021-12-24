import { createStore } from "vuex";
import mutations from "./mutations";
import actions from "./actions";

export default createStore({
  state: {
    movieData: null,
    trendingMovie: null,
    nowPlayingMovie: null
  },
  mutations,
  actions
});
