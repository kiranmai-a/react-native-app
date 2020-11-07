// @flow
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "../reducers";

const enhancer = compose(
    applyMiddleware(thunk),
);
    
const store = createStore(rootReducer, {}, enhancer);

export {store}