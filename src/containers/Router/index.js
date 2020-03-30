import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";




const routes = {
  LoginPage: "/login"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.LoginPage} component={LoginPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
