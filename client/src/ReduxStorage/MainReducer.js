import userReducers from "./Reducers/userReducers";
import eventReducers from "./Reducers/eventReducers";

import { combineReducers } from "redux";

export default combineReducers({
  userReducers,
  eventReducers,
});
