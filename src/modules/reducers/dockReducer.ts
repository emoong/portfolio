import Actions from "modules/actions/dock";
import { DockFileActionType } from "modules/constants";
import { initialState } from '../stores/dock';

let zIndex = 0;

const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case DockFileActionType.OPEN_FILE: {
      return state.map(dockFile => {
        if (dockFile.name === action.payload) {
          return { ...dockFile, open: true, zIndex: zIndex++ };
        }
        return dockFile;
      })
    }
    case DockFileActionType.CLOSE_FILE: {
      return state.map(dockFile => {
        if (dockFile.name === action.payload) {
          return { ...dockFile, open: false };
        }
        return dockFile;
      })
    }
    case DockFileActionType.POP_FILE: {
      return state.map(dockFile => {
        if (dockFile.name === action.payload) {
          return { ...dockFile, zIndex: zIndex++ };
        }
        return dockFile;
      })
    }
    default: {

    }
  }
}

export default reducer;