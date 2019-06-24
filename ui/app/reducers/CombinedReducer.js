"use strict";
import { combineReducers } from "redux";
import * as _stackOverFlow from "./_StackOverFlow";

const reducer = combineReducers({
    _stackOverFlow: combineReducers({ ..._stackOverFlow }),
});

export default reducer;
