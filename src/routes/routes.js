import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Simpsons from "../pages/Simpsons";
import GitHub from "../pages/Github";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/github" component={GitHub} />
        <Route path="/simpsons" component={Simpsons} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
