import { combineReducers } from "redux";
import dockReducer from "./dockReducer";
import fileReducer from "./fileReducer";

const reducers = combineReducers({
  dock: dockReducer,
  file: fileReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;