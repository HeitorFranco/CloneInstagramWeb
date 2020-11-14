import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA1Mzc0ODYwLCJleHAiOjE2MDU0NjEyNjB9.neg3wMUZ60nGB5tnqYA5Xq_950Nq_pHDsMqFSmZO8sU",
  },
});

export default api;
