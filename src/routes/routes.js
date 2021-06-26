import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import GitHub from "../pages/GitHub";
import Simpsons from "../pages/Simpsons";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/github" component={GitHub} />
        <Route path="/simpsons" component={Simpsons} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
