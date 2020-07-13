import { combineReducers } from "redux";
import errors from "./error";
import location from "./location";

//making a root reducer from current user and error
const rootReducer = combineReducers({
  errors,
  location,
});

export default rootReducer;
