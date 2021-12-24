import axios from "axios";

const ENDPOINT = process.env.VUE_APP_API_ENDPOINT;
const APIKEY = process.env.VUE_APP_APIKEY;

export default async function getMovieData(url) {
  const getData = await axios.get(`${ENDPOINT}${url}?api_key=${APIKEY}`);
  const data = await getData.data;
  return data;
}
