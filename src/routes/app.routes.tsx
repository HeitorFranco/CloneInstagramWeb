import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Feed from "../pages/Feed";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Feed} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
