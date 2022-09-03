import axios from "axios";
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("HEDSPI_ASSISTANCE_USER_TOKEN"),
  },
});

axiosClient.interceptors.request.use(async (config) => {
  config.headers["Authorization"] =
    "Bearer " + localStorage.getItem("HEDSPI_ASSISTANCE_USER_TOKEN");

  return await config;
});

export default axiosClient;
