import axios from "axios";

const api = axios.create({
  baseURL: "https://api-instagram-heitormaf.herokuapp.com/",
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA1MjIwMzI0LCJleHAiOjE2MDUzMDY3MjR9.Z7NKlEDq8Okfpsir5XVVCoBP-48N_WIZISSzlQA3r1Q",
  },
});

export default api;
