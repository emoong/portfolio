import { combineReducers } from "redux";
import dockReducer from "./dockReducer";

const reducers = combineReducers({
  dock: dockReducer
});

export default reducers;