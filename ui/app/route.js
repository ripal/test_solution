"use strict";
// Third party modules
import React from "react";
import Router from "react-router/lib/Router";
import Route from "react-router/lib/Route";
import browserHistory from "react-router/lib/browserHistory";

// Application modules
import App from "./containers/App";
import PageNotFound from "./containers/PageNotFound";
import SignIn from "./containers/_SignIn";
import Home from "./containers/_Home";
import Profile from "./containers/_Profile";

let routes = (
    <Router history={browserHistory}>

        <Route path="/" component={App} >
            <Route path="/signin" component={SignIn} />
            <Route path="/home" component={Home} />
            <Route path="/user/:userId" component={Profile} />
            <Route path="*" component={PageNotFound} />
        </Route>

    </Router>
);

export default routes;
