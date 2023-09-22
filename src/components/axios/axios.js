import axios from "axios";
const instance = axios.create({
  baseURL: "https://85.193.94.77:5555/",
});

export default instance;
