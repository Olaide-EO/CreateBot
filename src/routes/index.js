import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import { homeRoutes, setupWizzardRoutes } from "./routes";

const AllRoutes = () => {
  return (
    <Router>
      <Switch>
        {homeRoutes.map((route) => (
          <Route
            exact
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
        {setupWizzardRoutes.map((route) => (
          <Route
            exact
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default AllRoutes;
