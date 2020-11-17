import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Register from "./pages/Register";

const PrivateRoute = (props: any) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Route {...props} /> : <Redirect to="/cadastrar" />;
};

const Routes: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Feed} />
        {!isAuthenticated && <Route path="/entrar" component={Login} />}
        {!isAuthenticated && <Route path="/cadastrar" component={Register} />}

        <PrivateRoute component={() => <h1>404 Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
