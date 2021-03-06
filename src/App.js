import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";
import Navbar from "./components/layout/Navbar.js";
import Login from "./components/auth/Login";

function onAuthRequired() {
  let history = createHistory();
  history.push("/login");
}

function App() {
  return (
    <Router>
      <Security
        issuer="https://dev-730560.okta.com/oauth2/default"
        client_id="0oad8yipeAlEUj2fT4x6"
        redirect_uri={window.location.origin + "/implicit/callback"}
        onAuthRequired={onAuthRequired}
      >
        <div className="container">
          <Navbar />
          <Route path="/" exact={true} component={Home} />
          <SecureRoute path="/staff" exact={true} component={Staff} />
          <Route
            path="/login"
            render={() => <Login baseUrl="https://dev-730560.okta.com" />}
          />
          <Route path="/implicit/callback" component={ImplicitCallback} />
        </div>
      </Security>
    </Router>
  );
}

export default App;
