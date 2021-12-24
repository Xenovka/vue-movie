import axios from "axios";

export default async function getGenres() {
  const getGenres = await axios.get(`${process.env.VUE_APP_API_ENDPOINT}/genre/movie/list?api_key=${process.env.VUE_APP_APIKEY}`);
  const genres = await getGenres.data;
  return genres;
}
