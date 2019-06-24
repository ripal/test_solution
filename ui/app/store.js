"use strict";
import createStore from "redux/lib/createStore";
import applyMiddleware from "redux/lib/applyMiddleware";

import thunk from "redux-thunk";
import reducer from "./reducers/CombinedReducer";

const store = createStore(
  reducer,
  // Following line is just for development. Used for redux devtool chrome extension for debugging redux store.
  // https://github.com/zalmoxisus/redux-devtools-extension
  process.env.NODE_ENV !== "production" ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : "",

  applyMiddleware(thunk)
);

export default store;
