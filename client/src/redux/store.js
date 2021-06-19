import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import bufferToBase64Middleware from "./middleware/bufferToBase64.middleware";
import rootReducer from "./reducers/root.reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});

const initialState = {};
const middleware = [thunk, bufferToBase64Middleware];
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);
export default store;
