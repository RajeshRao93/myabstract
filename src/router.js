import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./components/Homepage";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/Home/" />
          <Route exact path="/Home/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Router;
