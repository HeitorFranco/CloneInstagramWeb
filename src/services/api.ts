import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA1MTMyMjIzLCJleHAiOjE2MDUyMTg2MjN9.nKWUH5f-JXPndHd_AgqNMWGNVm0QD4IwxbRDQmVXCu0",
  },
});

export default api;
