import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import userProfileReducer from "./userProfileReducer";

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  userProfileReducer: userProfileReducer,
});

export default rootReducer;
