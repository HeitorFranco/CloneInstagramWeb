import api from "../services/api";

export const TOKEN_KEY = "token";
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
export const isAuthenticated = async () => {
  try {
    await api.get("/users");
    return true;
  } catch {
    return false;
  }
};
