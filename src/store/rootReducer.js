import { combineReducers } from "redux";
import appReducer from "./app/appSlice";

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
