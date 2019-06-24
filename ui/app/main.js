"use strict";
import "babel-polyfill";

import React from "react";
import { render } from "react-dom";
import Provider from "react-redux/lib/components/Provider";
/* import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
 */
/* import getMuiTheme from "material-ui/styles/getMuiTheme";
 */
import injectTapEventPlugin from "react-tap-event-plugin";

import routes from "./route";
import store from "./store";

injectTapEventPlugin();

render(
    <Provider store={store}>
        {routes}
    </Provider>
    ,
    document.getElementById("app")
);
