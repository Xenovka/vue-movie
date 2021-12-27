import moment from "moment";
import hd from "humanize-duration";

import getGenres from "../composable/getGenres";
import getMovieData from "../composable/getMovieData";

export default {
  async getMovieData({ commit }) {
    const data = [];
    const movies = await getMovieData("/movie/popular");

    for (let movie of movies.results) {
      data.push({
        id: movie["id"],
        title: movie["title"],
        rating: movie["vote_average"],
        ratingCount: movie["vote_count"],
        poster: `https://image.tmdb.org/t/p/w500${movie["poster_path"]}`
      });
    }

    commit("updateMovieData", data);
  },
  async getTrending({ commit }) {
    const data = [];
    const trending = await getMovieData("/trending/movie/day");
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
  },
  async getNowPlaying({ commit }) {
    const data = [];
    const movies = await getMovieData("/movie/now_playing");

    for (let movie of movies.results) {
      data.push({
        id: movie["id"],
        title: movie["title"],
        releaseDate: moment(movie["release_date"]).format("LL"),
        poster: `https://image.tmdb.org/t/p/w500${movie["poster_path"]}`
      });
    }

    commit("updateNowPlayingMovieData", data);
  },
  async searchMovie({ commit }, title) {
    const data = [];
    const movies = await getMovieData("/search/movie", title);

    for (let movie of movies.results) {
      data.push({
        id: movie["id"],
        title: movie["title"],
        releaseDate: moment(movie["release_date"]).format("LL"),
        poster: movie["poster_path"] ? `https://image.tmdb.org/t/p/w500${movie["poster_path"]}` : "https://goxpert.id/course/image/poster/27"
      });
    }

    commit("updateMovieData", data);
  },
  async searchPeople({ commit }) {
    const data = [];
    const people = await getMovieData("/person/popular");

    for (let p of people.results) {
      data.push({
        id: p["id"],
        name: p["name"],
        picture: p["profile_path"]
          ? `https://image.tmdb.org/t/p/w500${p["profile_path"]}`
          : "https://avatars.services.sap.com/images/krishan.yadav2_small.png"
      });
    }

    commit("updatePeopleData", data);
  },
  async getDetails({ commit }, id) {
    const movies = await getMovieData(`/movie/${id}`);
    const shortDuration = hd.humanizer({
      language: "shortEn",
      languages: {
        shortEn: {
          y: () => "y",
          mo: () => "mo",
          w: () => "w",
          d: () => "d",
          h: () => "h",
          m: () => "m",
          s: () => "s",
          ms: () => "ms"
        }
      }
    });

    let overview = movies["overview"].split(" ");

    if (overview.length > 150) {
      overview = overview.slice(0, 150).join(" ") + " ...";
    } else {
      overview = overview.join(" ");
    }

    const genres = movies["genres"].map((g) => g.name).join(", ");
    const prodCompanies = movies["production_companies"].map((c) => `${c["name"]}`).join(" • ");

    const data = {
      id: movies["id"],
      title: movies["title"],
      releaseDate: moment(movies["release_date"]).format("L"),
      releaseYear: new Date(movies["release_date"]).getFullYear(),
      runtime: shortDuration(movies["runtime"] * 1000 * 60)
        .split(",")
        .join(" "),
      overview: movies["overview"],
      tagline: movies["tagline"],
      genres,
      backdrop: movies["backdrop_path"]
        ? `https://image.tmdb.org/t/p/w1280${movies["backdrop_path"]}`
        : "https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-film-scene-film-background-image_190374.jpg",
      poster: `https://image.tmdb.org/t/p/w500${movies["poster_path"]}`,
      prodCompanies
    };

    commit("updateMovieData", data);
  }
};
