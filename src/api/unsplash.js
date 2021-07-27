import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID t6VCxLd3KK1E3LeiiRqjYG-W4iH5Xecz1aOOc3QXZxM",
  },
});
