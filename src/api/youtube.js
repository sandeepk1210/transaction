import axios from "axios";

const KEY = "AIzaSyCm4bT508-AE9yNUsxSlV6K_SHcpc50Ubw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
