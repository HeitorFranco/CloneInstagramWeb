import axios from "axios";

const token = localStorage.getItem("token") || undefined;
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
