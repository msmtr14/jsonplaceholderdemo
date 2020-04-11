import { combineReducers } from "redux";
import userReducer from "./reducers/usersReducers";
const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
