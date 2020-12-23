import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
const Routes: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
