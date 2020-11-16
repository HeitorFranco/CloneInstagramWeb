import React, { useState, useEffect, createContext } from "react";
import api from "../services/api";

interface AuthContextData {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
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

export const AuthContext = createContext({} as AuthContextData);

export default function AuthProvider({ children }: any) {
  const [user, setUser] = useState({} as UserContextData);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log("s");
    (async () => {
      try {
        const { data } = await api.get("users");
        setUser(data);
        setIsAuthenticated(true);
        setLoading(false);
      } catch {
        setIsAuthenticated(false);
        setLoading(false);
      }
    })();
  }, []);
  if (loading) {
    return null;
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, ...user }}
    >
      {children}
    </AuthContext.Provider>
  );
}
