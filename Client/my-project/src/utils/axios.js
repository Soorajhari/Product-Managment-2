import axios from "axios";
const instance = axios.create({
  baseURL: "https://product-managment-server.vercel.app/",

  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
