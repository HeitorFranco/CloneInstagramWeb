import React from "react";
import AuthProvider from "./contexts/AuthContext";
import Routes from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;
