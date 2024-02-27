import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/aboutme" component={AboutMe} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Router;
