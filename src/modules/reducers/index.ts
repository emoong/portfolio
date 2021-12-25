import { combineReducers } from "redux";
import dockReducer from "./dockReducer";

const reducers = combineReducers({
  dock: dockReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>