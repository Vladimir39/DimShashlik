import axios from "axios";
const instance = axios.create({
  baseURL: "http://45.12.19.21:4444/",
});

export default instance;
