import { combineReducers } from "redux";
import postReducer from "./postRD";
import userReducer from "./userRD";

const rootReducer = combineReducers({
  userReducer,
  postReducer,
});
export default rootReducer;
