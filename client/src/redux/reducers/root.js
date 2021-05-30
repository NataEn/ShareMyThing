import { combineReducers } from "redux";
import buttonReducer from "./button.reducer.js";
export default combineReducers({
  button: buttonReducer,
});
