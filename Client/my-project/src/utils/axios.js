import axios from "axios";
const instance = axios.create({
  baseURL: "https://product-managment-server.vercel.app/",


});

export default instance;
