import axios from "axios";

import { getToken } from "../auth/auth";

const token = getToken() || undefined;
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: token,
  },
});

export default api;
