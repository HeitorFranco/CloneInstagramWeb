import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import Login from "./pages/Login";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
