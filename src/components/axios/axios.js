import axios from "axios";
const instance = axios.create({
  baseURL: "http://85.193.94.77:5555/",
});

export default instance;
