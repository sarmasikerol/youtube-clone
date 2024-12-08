import axios from "axios";

export const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    "x-rapidapi-key": "5a56265c38msh86935356e173491p129c35jsn6beefb15f6db",
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
});
