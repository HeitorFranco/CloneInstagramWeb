import React, { useState, useEffect, createContext } from "react";
import api from "../services/api";

interface AuthContextData {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  handleLogin({ email, password }: AuthData): Promise<boolean>;
  handleRegister({ name, email, password }: AuthData): Promise<boolean>;
  handleLogoff(): void;
  id: number;
  name: string;
  email: string;
  photo_url: string;
}

interface UserContextData {
  id: number;
  name: string;
  email: string;
  photo_url: string;
}

interface AuthData {
  username?: string;
  name?: string;
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export default function AuthProvider({ children }: any) {
  const [user, setUser] = useState({} as UserContextData);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      api.defaults.headers.Authorization = token;
      if (token) {
        try {
          const { data } = await api.get("users");
          setUser(data);
          setIsAuthenticated(true);
        } catch {
          setUser({} as UserContextData);
        }
      }
      setLoading(false);
    })();
  }, []);

  async function handleLogin({ email, password }: AuthData) {
    try {
      const { data } = await api.post("auth", {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      api.defaults.headers.Authorization = data.token;
      setUser(data.user);
      setIsAuthenticated(true);

      return true;
    } catch (err) {
      alert(err.response.data.erro);
      setUser({} as UserContextData);
      setIsAuthenticated(false);

      return false;
    }
  }
  async function handleRegister({ username, name, email, password }: AuthData) {
    try {
      const { data } = await api.post("users", {
        username,
        name,
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      api.defaults.headers.Authorization = data.token;
      setIsAuthenticated(true);
      setUser(data.user);
      return true;
    } catch (err) {
      alert(err.response.data.erro);
      setIsAuthenticated(false);
      setUser({} as UserContextData);
      return false;
    }
  }

  function handleLogoff() {
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = undefined;
    setUser({} as UserContextData);
    setIsAuthenticated(false);
    setLoading(false);
  }

  if (loading) {
    return null;
  }
  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        handleRegister,
        handleLogoff,
        isAuthenticated,
        setIsAuthenticated,
        ...user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
