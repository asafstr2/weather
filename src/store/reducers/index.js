import { combineReducers } from "redux";
import errors from "./error";
import location from "./location";
import  weather from "./weather";
import favorite from "./favorite"



//making a root reducer from current user and error
const rootReducer = combineReducers({
  errors,
  weather,
  location,
  favorite
});

export default rootReducer;
