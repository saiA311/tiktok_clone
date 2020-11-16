import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://tiktokserver311.herokuapp.com/",
});

export default instance;
