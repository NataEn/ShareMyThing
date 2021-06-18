import { combineReducers } from "redux";
import itemReducer from "./item.reducer.js";
// import authReducer from "./auth.reducer";
import errorReducer from "./error.reducer";
export default combineReducers({
  itemsReducer: itemReducer,
  // auth: authReducer,
  errorReducer: errorReducer,
});
