import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import userProfileReducer from "./userProfileReducer";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  userProfileReducer: userProfileReducer,
  taskReducer: taskReducer,
});

export default rootReducer;
