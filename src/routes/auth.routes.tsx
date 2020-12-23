import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/entrar" component={Login} />
        <Route path="/cadastrar" component={Register} />
        <Redirect to="/cadastrar" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
