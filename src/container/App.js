import React, { useEffect } from "react";
import { Redirect, Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import history from "util/history";
import GuardedRoute from "component/guardedRoute";
import Animal from "./Animal";
import SignIn from "./SignIn";
import Register from "./Register";
import NotFoundPage from "./NotFound";
import { Header } from "component/header";
import { loadUser } from "store/user/actions";

const App = () => {
  const auth = useSelector((root) => root.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Environment : ", process.env.REACT_APP_CURRENT_ENV);
    !auth.isUserFetched && dispatch(loadUser());
  });

  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/animal" />} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/register" component={Register} />
        <GuardedRoute path="/animal" component={Animal} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
